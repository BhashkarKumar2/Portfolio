import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const LevelNode = ({
    level,
    title,
    description,
    icon: Icon,
    status = 'locked',
    alignment = 'left',
    id,
    children
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-10% 0px -10% 0px" });
    const [isHovered, setIsHovered] = useState(false);
    const isLeft = alignment === 'left';

    // Mech Status Styles
    const statusColors = {
        locked: 'bg-zinc-900 border-zinc-800 text-zinc-600',
        active: 'bg-cyan-900/30 border-cyan-500 text-cyan-400 shadow-[0_0_30px_rgba(0,243,255,0.4)] animate-pulse',
        completed: 'bg-teal-900/30 border-teal-500 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.3)]'
    };

    return (
        <div
            ref={ref}
            id={id}
            className="relative flex items-center justify-center w-full py-32 md:py-40"
            style={{ zIndex: isHovered ? 50 : 10 }}
        >

            {/* The Node (Hexagon Core) */}
            <div
                className="relative z-20 cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
            >
                {/* Hexagon Wrapper */}
                <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    className={`
                        w-20 h-20 md:w-24 md:h-24 
                        flex items-center justify-center 
                        transition-all duration-300 
                        hex-shape border-2
                        ${statusColors[isInView ? 'active' : 'locked']}
                        ${isHovered ? 'ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-black' : ''}
                    `}
                    style={{
                        backdropFilter: 'blur(4px)',
                    }}
                >
                    {Icon && <Icon size={28} className={`transition-transform duration-300 ${isHovered ? 'scale-110 text-glow-cyan' : ''}`} strokeWidth={1.5} />}

                    {/* Level Badge (Small Hex) */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-black text-cyan-400 border border-cyan-500 hex-shape flex items-center justify-center text-xs font-bold tracking-widest shadow-lg z-30">
                        {level.toString().padStart(2, '0')}
                    </div>
                </motion.div>

                {/* Connecting Lines (Decorative) */}
                <div className={`absolute top-1/2 w-12 h-[2px] bg-cyan-900/50 z-10 ${isLeft ? 'right-full' : 'left-full'} group-hover:bg-cyan-500/50 transition-colors pointer-events-none`} />
            </div>

            {/* Content Card - HUD Style */}
            <div
                className={`
                    absolute top-1/2 -translate-y-1/2 z-30 
                    w-[90vw] sm:w-[300px] md:w-[400px]
                    transition-all duration-300
                    pointer-events-none 
                    ${isLeft ? 'right-[60%] md:right-[65%] text-right' : 'left-[60%] md:left-[65%] text-left'}
                    max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[125%] max-md:right-auto max-md:text-center max-md:translate-y-0
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: isLeft ? 30 : -30, scaleX: 0 }}
                            animate={{ opacity: 1, x: 0, scaleX: 1 }}
                            exit={{ opacity: 0, x: isLeft ? 30 : -30, scaleX: 0 }}
                            transition={{ duration: 0.15, type: "spring", stiffness: 400, damping: 25 }}
                            style={{ originX: isLeft ? 1 : 0 }}
                            className="hud-card p-6 pointer-events-auto"
                        >
                            {/* Decorative HUD Corner Markers */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500"></div>

                            {/* Header */}
                            <div className={`flex items-center gap-3 mb-3 pb-2 border-b border-white/10 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                                <h3 className="text-xl font-bold text-white tracking-widest uppercase font-display">{title}</h3>
                                <div className="h-1 flex-grow bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
                            </div>

                            <p className="text-cyan-100/70 text-sm mb-4 font-mono tracking-tight">{description}</p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.05 }}
                                className="font-mono text-sm text-gray-300"
                            >
                                {children}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LevelNode;
