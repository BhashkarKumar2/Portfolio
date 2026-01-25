import { useState, useCallback, useRef } from 'react';
import { BHASHKAR_CONTEXT } from './chatbotContext';

// Multiple models for fallback - if one is rate-limited, try another
const GEMINI_MODELS = [
    'gemini-2.5-flash',      // Primary - best performance
    'gemini-2.0-flash',      // Fast fallback
    'gemini-2.0-flash-lite', // Lightweight fallback
    'gemini-2.5-pro',        // Most capable (may have stricter limits)
];

const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

// Simple in-memory rate limit tracker
const rateLimitTracker = {
    lastRequest: 0,
    minInterval: 1000, // Minimum 1 second between requests
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const useGemini = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const retryCount = useRef(0);

    const tryModel = async (modelName, contents, apiKey) => {
        const response = await fetch(`${BASE_URL}/${modelName}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                },
                safetySettings: [
                    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
                ]
            })
        });

        return response;
    };

    const sendMessage = useCallback(async (userMessage, conversationHistory = []) => {
        setIsLoading(true);
        setError(null);

        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        // Check if API key is missing or still has placeholder value
        if (!apiKey || apiKey === 'your_api_key_here' || apiKey.trim() === '') {
            setIsLoading(false);
            setError('API key not configured');
            return {
                success: false,
                message: "⚠️ API key not configured! Please add your Gemini API key to the .env file. Get one free at aistudio.google.com"
            };
        }

        // Rate limiting: ensure minimum interval between requests
        const now = Date.now();
        const timeSinceLastRequest = now - rateLimitTracker.lastRequest;
        if (timeSinceLastRequest < rateLimitTracker.minInterval) {
            await sleep(rateLimitTracker.minInterval - timeSinceLastRequest);
        }
        rateLimitTracker.lastRequest = Date.now();

        // Build conversation contents for Gemini
        const contents = [
            {
                role: 'user',
                parts: [{ text: `${BHASHKAR_CONTEXT}\n\n---\nNow respond to the following conversation as Bhashkar. Remember to stay in character and be helpful.` }]
            },
            {
                role: 'model',
                parts: [{ text: "Understood! I'm ready to respond as Bhashkar Kumar. How can I help you?" }]
            },
            ...conversationHistory.map(msg => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            })),
            {
                role: 'user',
                parts: [{ text: userMessage }]
            }
        ];

        // Try each model with retry logic
        const maxRetries = 2;

        for (let retry = 0; retry <= maxRetries; retry++) {
            for (let i = 0; i < GEMINI_MODELS.length; i++) {
                const modelName = GEMINI_MODELS[i];

                try {
                    const response = await tryModel(modelName, contents, apiKey);

                    // If rate limited (429), wait and try next model
                    if (response.status === 429) {
                        console.log(`Model ${modelName} rate limited, trying next...`);
                        // Exponential backoff for rate limits
                        if (retry < maxRetries) {
                            await sleep(1000 * (retry + 1));
                        }
                        continue;
                    }

                    // If not found (404), try next model
                    if (response.status === 404) {
                        console.log(`Model ${modelName} not found, trying next...`);
                        continue;
                    }

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.error?.message || 'Failed to get response');
                    }

                    const data = await response.json();
                    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

                    if (!aiResponse) {
                        throw new Error('No response generated');
                    }

                    setIsLoading(false);
                    retryCount.current = 0;
                    console.log(`Success with model: ${modelName}`);
                    return {
                        success: true,
                        message: aiResponse
                    };

                } catch (err) {
                    console.log(`Error with model ${modelName}:`, err.message);
                    // Continue to next model
                    continue;
                }
            }

            // If we've tried all models, wait before retry
            if (retry < maxRetries) {
                console.log(`All models failed, waiting before retry ${retry + 1}...`);
                await sleep(2000 * (retry + 1));
            }
        }

        // Fallback if all models and retries fail
        setIsLoading(false);
        return {
            success: false,
            message: "I'm experiencing high traffic right now. Please wait a moment and try again, or reach out to Bhashkar directly at bhashkarkumar2063@gmail.com 📧"
        };
    }, []);

    return {
        sendMessage,
        isLoading,
        error
    };
};

export default useGemini;
