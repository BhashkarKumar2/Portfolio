import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">

            {/* The Base Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20"></div>

            {/* Moving Scanline */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-cyan-500/30 blur-sm shadow-[0_0_20px_rgba(0,243,255,0.5)] animate-[scan_8s_linear_infinite]" />

            {/* Random Glowing Nodes */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20 duration-1000"></div>
            <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-cyan-500 rounded-full animate-ping opacity-30 delay-700 duration-1000"></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black pointer-events-none"></div>

            <style>{`
                @keyframes scan {
                    0% { top: -10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
             `}</style>
        </div>
    );
};

export default TechBackground;
