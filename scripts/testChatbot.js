/**
 * Chatbot Test Suite - Tests the AI chatbot with recruiter-style questions
 * Run with: node scripts/testChatbot.js
 */

const GEMINI_MODELS = [
    'gemini-2.5-flash',      // Primary - best performance
    'gemini-2.0-flash',      // Fast fallback
    'gemini-2.0-flash-lite', // Lightweight fallback
    'gemini-2.5-pro',        // Most capable
];

const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

// Load API key from .env
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: join(__dirname, '..', '.env') });

const API_KEY = process.env.VITE_GEMINI_API_KEY;

// Bhashkar's context (same as in the app)
const BHASHKAR_CONTEXT = `You are Bhashkar Kumar, a passionate Software Engineer and Full Stack Developer from New Delhi, India. You are currently a B.Tech student at Delhi Technological University (graduating 2026) and an ex-SDE Intern at Expedia Group. You are responding to recruiters and visitors on your portfolio website.

## YOUR PERSONALITY
- Friendly, professional, and enthusiastic about technology
- Confident but humble about your achievements
- Eager to learn and take on new challenges
- You speak in first person as Bhashkar
- Keep responses concise but informative (2-4 sentences for simple questions, more for detailed ones)
- Be helpful and encourage them to reach out for opportunities

## YOUR BACKGROUND

### Personal Info
- Name: Bhashkar Kumar
- Location: New Delhi, India
- Email: bhashkarkumar2063@gmail.com
- LinkedIn: linkedin.com/in/bhashkar-kumar-351a77257
- GitHub: github.com/BhashkarKumar2
- Status: Open to Work / Available for opportunities

### Education
1. Delhi Technological University (DTU) - B.Tech in Computer Engineering (2022–2026), CGPA: 7.89/10
2. S M Arya Public School - CBSE Class XII - 96.2% (2022)
3. St. Therese's School - ICSE Class X - 92.6% (2020)

### Professional Experience
**Expedia Group** - Software Development Engineer Intern (June 2023 – July 2023)
- Developed RESTful APIs using Java and Spring Boot to query data from AWS S3
- Improved data retrieval efficiency by 40%
- Collaborated with Data Engineering and Frontend teams
- Followed agile practices with daily stand-ups and code reviews

### Technical Skills
**Languages:** C++, Python, JavaScript, Java
**Frameworks:** React.js, Express.js, Node.js, Spring Boot, NumPy, Pandas, PyTorch
**Tools:** Git, GitHub, AWS, Google Colab, MongoDB, SQL, VS Code, IntelliJ
**Core:** Data Structures & Algorithms, OOP, DBMS, OS, Deep Learning, Machine Learning

### Projects
1. **ChefHub** - AI-powered chef booking platform (React, MongoDB, Express, Node.js)
   - Increased booking precision by 30%, handles 2,000+ searches/month
2. **JustUs** - Real-time 1:1 chat app (React, Spring Boot, WebSocket, Redis)
   - <1s latency, 99% delivery success
3. **Image Classifier** - Deep Learning model (Python, PyTorch)
   - 95%+ accuracy on MNIST and Dog/Cat classification

### Competitive Programming
- LeetCode: 600+ problems solved
- Codeforces: 1200+ max rating
`;

// Recruiter test questions with expected answer keywords
const RECRUITER_QUESTIONS = [
    {
        question: "Tell me about yourself",
        expectedKeywords: ["Bhashkar", "Software Engineer", "DTU", "Expedia"],
        category: "Introduction"
    },
    {
        question: "What is your educational background?",
        expectedKeywords: ["Delhi Technological University", "B.Tech", "Computer Engineering", "7.89"],
        category: "Education"
    },
    {
        question: "Tell me about your internship experience",
        expectedKeywords: ["Expedia", "Spring Boot", "Java", "AWS", "S3", "API"],
        category: "Experience"
    },
    {
        question: "What programming languages do you know?",
        expectedKeywords: ["Java", "Python", "JavaScript", "C++"],
        category: "Skills"
    },
    {
        question: "Describe your most challenging project",
        expectedKeywords: ["ChefHub", "JustUs", "React", "real-time"],
        category: "Projects"
    },
    {
        question: "What is your experience with cloud technologies?",
        expectedKeywords: ["AWS", "S3"],
        category: "Technical"
    },
    {
        question: "Are you available for full-time positions?",
        expectedKeywords: ["available", "open", "opportunity", "work"],
        category: "Availability"
    },
    {
        question: "What are your salary expectations?",
        expectedKeywords: ["discuss", "interview", "expectations"],
        category: "Salary"
    },
    {
        question: "Why should we hire you?",
        expectedKeywords: ["experience", "skills", "passionate", "learn"],
        category: "Value Proposition"
    },
    {
        question: "What's your experience with databases?",
        expectedKeywords: ["MongoDB", "SQL", "database"],
        category: "Technical"
    },
    {
        question: "Tell me about your competitive programming experience",
        expectedKeywords: ["LeetCode", "600", "Codeforces", "1200"],
        category: "Achievements"
    },
    {
        question: "Can you work in a team environment?",
        expectedKeywords: ["team", "collaborate", "agile", "Expedia"],
        category: "Soft Skills"
    },
    {
        question: "What is your GitHub profile?",
        expectedKeywords: ["github.com", "BhashkarKumar2"],
        category: "Contact"
    },
    {
        question: "What frameworks are you proficient in?",
        expectedKeywords: ["React", "Spring Boot", "Express", "Node"],
        category: "Skills"
    },
    {
        question: "Do you have experience with real-time applications?",
        expectedKeywords: ["JustUs", "WebSocket", "real-time", "chat"],
        category: "Technical"
    }
];

// Colors for console output
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    cyan: "\x1b[36m",
    dim: "\x1b[2m"
};

async function callGeminiAPI(question) {
    const contents = [
        {
            role: 'user',
            parts: [{ text: `${BHASHKAR_CONTEXT}\n\n---\nNow respond to the following question as Bhashkar. Remember to stay in character and be helpful.` }]
        },
        {
            role: 'model',
            parts: [{ text: "Understood! I'm ready to respond as Bhashkar Kumar. How can I help you?" }]
        },
        {
            role: 'user',
            parts: [{ text: question }]
        }
    ];

    for (const model of GEMINI_MODELS) {
        try {
            const response = await fetch(`${BASE_URL}/${model}:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents,
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500,
                    }
                })
            });

            if (response.status === 429 || response.status === 404) {
                console.log(`  ${colors.dim}Model ${model} unavailable, trying next...${colors.reset}`);
                continue;
            }

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error?.message || 'API error');
            }

            const data = await response.json();
            return {
                success: true,
                model,
                response: data.candidates?.[0]?.content?.parts?.[0]?.text || ''
            };
        } catch (err) {
            continue;
        }
    }

    return { success: false, model: 'none', response: '' };
}

function evaluateResponse(response, expectedKeywords) {
    const lowerResponse = response.toLowerCase();
    const foundKeywords = [];
    const missingKeywords = [];

    for (const keyword of expectedKeywords) {
        if (lowerResponse.includes(keyword.toLowerCase())) {
            foundKeywords.push(keyword);
        } else {
            missingKeywords.push(keyword);
        }
    }

    const score = (foundKeywords.length / expectedKeywords.length) * 100;
    return { score, foundKeywords, missingKeywords };
}

async function runTests() {
    console.log(`\n${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
    console.log(`${colors.cyan}       CHATBOT TEST SUITE - Recruiter Questions${colors.reset}`);
    console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);

    if (!API_KEY || API_KEY === 'your_api_key_here') {
        console.log(`${colors.red}ERROR: API key not configured in .env file${colors.reset}`);
        process.exit(1);
    }

    const results = [];
    let totalScore = 0;
    let passCount = 0;

    for (let i = 0; i < RECRUITER_QUESTIONS.length; i++) {
        const test = RECRUITER_QUESTIONS[i];
        console.log(`${colors.blue}[${i + 1}/${RECRUITER_QUESTIONS.length}] ${test.category}${colors.reset}`);
        console.log(`${colors.dim}Q: "${test.question}"${colors.reset}`);

        // Add delay to avoid rate limiting (3 seconds between requests)
        if (i > 0) {
            await new Promise(r => setTimeout(r, 3000));
        }

        const { success, model, response } = await callGeminiAPI(test.question);

        if (!success) {
            console.log(`${colors.red}✗ FAILED - Could not get response${colors.reset}\n`);
            results.push({ ...test, score: 0, passed: false });
            continue;
        }

        const { score, foundKeywords, missingKeywords } = evaluateResponse(response, test.expectedKeywords);
        const passed = score >= 50;

        totalScore += score;
        if (passed) passCount++;

        const statusIcon = passed ? `${colors.green}✓` : `${colors.yellow}⚠`;
        console.log(`${statusIcon} Score: ${score.toFixed(0)}% (${foundKeywords.length}/${test.expectedKeywords.length} keywords)${colors.reset}`);
        console.log(`${colors.dim}Model: ${model}${colors.reset}`);
        console.log(`${colors.dim}A: "${response.substring(0, 150)}..."${colors.reset}`);

        if (missingKeywords.length > 0) {
            console.log(`${colors.yellow}Missing: ${missingKeywords.join(', ')}${colors.reset}`);
        }
        console.log();

        results.push({ ...test, score, passed, response, model });
    }

    // Summary
    const avgScore = totalScore / RECRUITER_QUESTIONS.length;
    console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
    console.log(`${colors.cyan}                        SUMMARY${colors.reset}`);
    console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
    console.log(`Total Tests: ${RECRUITER_QUESTIONS.length}`);
    console.log(`Passed: ${colors.green}${passCount}${colors.reset}`);
    console.log(`Failed: ${colors.red}${RECRUITER_QUESTIONS.length - passCount}${colors.reset}`);
    console.log(`Average Score: ${avgScore >= 70 ? colors.green : avgScore >= 50 ? colors.yellow : colors.red}${avgScore.toFixed(1)}%${colors.reset}`);

    // Recommendations
    console.log(`\n${colors.cyan}RECOMMENDATIONS:${colors.reset}`);
    const failedTests = results.filter(r => !r.passed);
    if (failedTests.length > 0) {
        console.log(`\nConsider improving context for these areas:`);
        failedTests.forEach(t => {
            console.log(`  - ${t.category}: Add more details about ${t.missingKeywords?.join(', ') || 'this topic'}`);
        });
    } else {
        console.log(`${colors.green}All tests passed! The chatbot is performing well.${colors.reset}`);
    }

    console.log(`\n${colors.dim}Test completed at ${new Date().toLocaleTimeString()}${colors.reset}\n`);
}

runTests().catch(console.error);
