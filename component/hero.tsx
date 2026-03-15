'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
            {/* Animated Background with Parallax Effect */}
            <motion.div 
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image
                    src="/bg3.jpeg"
                    alt="Conference venue"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Gradient Overlay with Animation */}
                {/* <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                /> */}
                
                {/* Animated Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
            </motion.div>

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-red-500/20 rounded-full"
                        initial={{ 
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
                        }}
                        animate={{ 
                            y: [null, -100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ 
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    {/* Logo with Glow Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="mb-8 relative"
                    >
                        <div className="absolute inset-0 blur-3xl  rounded-full transform scale-150" />
                        <img
                            src="/logo.png"
                            alt="Conference Logo"
                            width={600}
                            className="relative z-10 object-contain mx-auto drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Title with Character Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-6"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="inline-block text-white"
                            >
                                AIS
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="inline-block text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                            >
                                MUN
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="inline-block text-white ml-2"
                            >
                                 I
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* Date with Stagger Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="relative"
                    >
                        <motion.p
                            initial={{ opacity: 0, letterSpacing: "0.5em" }}
                            animate={{ opacity: 1, letterSpacing: "0.2em" }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-2xl md:text-4xl  text-gray-300 uppercase tracking-widest font-extrabold" 
                        >
                           <span className='text-red-700'>April</span>   2-4
                        </motion.p>
                        
                        {/* Animated Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-4"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-2 bg-red-500 rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;