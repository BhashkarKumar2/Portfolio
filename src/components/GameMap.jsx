import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const GameMap = ({ children }) => {
    const containerRef = useRef(null);
    const [pathHeight, setPathHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    // Tech Physics: Stiffer spring for mechanical feel
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 40,
        restDelta: 0.001
    });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setPathHeight(containerRef.current.scrollHeight);
            }
            setIsMobile(window.innerWidth < 768);
        };

        updateDimensions();
        // ResizeObserver is better but this works for now
        window.addEventListener('resize', updateDimensions);
        updateDimensions(); // Initial call

        // Polling to fix height if children expand/load
        const interval = setInterval(updateDimensions, 1000);

        return () => {
            window.removeEventListener('resize', updateDimensions);
            clearInterval(interval);
        };
    }, [children]);

    const amplitude = isMobile ? 10 : 40;
    const center = 50;

    const generatePath = () => {
        if (pathHeight === 0) return "";

        let path = `M ${center} 0`;
        const zigZagHeight = 400;
        const steps = Math.ceil(pathHeight / zigZagHeight);

        for (let i = 0; i < steps; i++) {
            const startY = i * zigZagHeight;
            const endY = (i + 1) * zigZagHeight;
            const direction = i % 2 === 0 ? 1 : -1;

            // Angular / Tech Path (Straight Lines with Chamfered Corners instead of Curves?)
            // Keeping Bezier for smoothness but tightening control points could look more "cable-like"
            path += ` C ${center + (amplitude * direction)} ${startY + 100}, ${center + (amplitude * direction)} ${endY - 100}, ${center} ${endY}`;
        }

        return path;
    };

    const pathD = generatePath();

    return (
        <div ref={containerRef} className="relative w-full min-h-screen pb-32">

            {/* The SVG Path Layer */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-0">
                <svg
                    width="100%"
                    height={pathHeight}
                    viewBox={`0 0 100 ${pathHeight}`}
                    preserveAspectRatio="none"
                    className="absolute left-0 top-0 w-full h-full overflow-visible"
                >
                    {/* Background Trace - Dark Cable */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="#1a1a1a"
                        strokeWidth="6"
                        strokeLinecap="square"
                    />

                    {/* Inner core of cable */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="#333"
                        strokeWidth="2"
                        strokeDasharray="4 4" // Dashed line = Data cable feel
                    />

                    {/* The Active "Data Flow" Path */}
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="#00f3ff" // Cyber Cyan
                        strokeWidth="4"
                        strokeLinecap="square"
                        strokeDasharray="1 0" // Solid
                        style={{ pathLength: scaleY }}
                        filter="url(#glow)"
                    />

                    {/* Defs for Glow Filter */}
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Content Layer (LevelNodes) */}
            <div className="relative z-10 pt-32">
                {children}
            </div>
        </div>
    );
};

export default GameMap;
