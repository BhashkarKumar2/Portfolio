import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background shape - Soft subtle gradient */}
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1877F2" />
                    <stop offset="100%" stopColor="#0a5eb8" />
                </linearGradient>
            </defs>

            {/* Main Container - Rounded rect synonymous with app icons */}
            <rect width="100" height="100" rx="22" fill="url(#logoGradient)" />

            {/* Stylized 'B' formed by brackets/code symbols */}
            <path
                d="M35 30H55C63.2843 30 70 36.7157 70 45C70 53.2843 63.2843 60 55 60H35V30Z"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M35 60H55C63.2843 60 70 66.7157 70 75C70 83.2843 63.2843 90 55 90H35"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
            />

            {/* Vertical spine - representing strong foundation */}
            <line x1="35" y1="20" x2="35" y2="80" stroke="white" strokeWidth="8" strokeLinecap="round" />

            {/* Code dot accent */}
            <circle cx="75" cy="25" r="5" fill="#A7F3D0" />
        </svg>
    );
};

export default Logo;
