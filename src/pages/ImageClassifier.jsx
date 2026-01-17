import React, { useState } from 'react';
import { Upload, X, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageClassifier = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);
            setResult(null);
        }
    };

    const handleClassify = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            // Mock result logic for demo purposes
            const mockClasses = ['Golden Retriever', 'Tabby Cat', 'German Shepherd', 'Persian Cat'];
            const randomClass = mockClasses[Math.floor(Math.random() * mockClasses.length)];
            const confidence = (85 + Math.random() * 14).toFixed(1);
            setResult({ label: randomClass, confidence });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-300">
            {/* Header */}
            <nav className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6 flex items-center justify-between border-b dark:border-gray-700">
                <Link to="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors">
                    <ArrowLeft size={20} />
                    Back to Portfolio
                </Link>
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    AI Image Classifier
                </div>
                <div className="w-20"></div> {/* Spacer for center alignment */}
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl w-full border border-gray-100 dark:border-gray-700 transition-all duration-300">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Upload an Image</h1>
                        <p className="text-gray-500 dark:text-gray-400">Detect objects with our Hybrid FCN + CNN Deep Learning Model</p>
                    </div>

                    <div className="mb-8">
                        {!image ? (
                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <div className="p-4 bg-white dark:bg-gray-600 rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                                        <Upload className="w-8 h-8 text-gray-500 dark:text-gray-300" />
                                    </div>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold text-primary-600 dark:text-primary-400">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                                </div>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                            </label>
                        ) : (
                            <div className="relative w-full h-64 bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center group">
                                <img src={image} alt="Upload preview" className="h-full object-contain" />
                                <button
                                    onClick={() => { setImage(null); setResult(null); }}
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleClassify}
                            disabled={!image || loading}
                            className={`
                                flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all
                                ${!image || loading
                                    ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-primary-600 to-indigo-600 hover:scale-105 active:scale-95 shadow-primary-500/30'}
                            `}
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <checkCircle size={20} />
                                    Classify Image
                                </>
                            )}
                        </button>
                    </div>

                    {/* Results Area */}
                    {result && (
                        <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl animate-fade-in flex flex-col items-center text-center">
                            <span className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">Classification Result</span>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{result.label}</div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <CheckCircle size={18} className="text-green-500" />
                                <span className="font-medium">Confidence: {result.confidence}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-4 max-w-xs">
                                <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${result.confidence}%` }}></div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ImageClassifier;
