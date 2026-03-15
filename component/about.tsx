'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section 
            ref={ref}
            className="relative py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                
                {/* Floating Shapes */}
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-40 -right-40 w-80 h-80 border border-red-500/10 rounded-full"
                />
                <motion.div
                    animate={{ 
                        rotate: -360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 border border-red-500/10 rounded-full"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Section Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="text-red-500 text-4xl font-extrabold tracking-widest uppercase ">
                            About The Team
                        </span>
                    </motion.div>

                  

                    {/* Description with Word Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-lg text-left md:text-2xl text-gray-300 leading-relaxed font-light"
                        >
                     The 13th of February 2026, officially marks one year with AISMUN. This day marks a defining milestone for the club, as we officially complete our first full year since its founding, a year that transformed a simple beginning into something purposeful, dynamic, and enduring.
Thanking everybody who have been or still is a part of this club, and for their outstanding performances!
To the one who built this entire club from the ground up, who saw potential in a mere few delegtes and made them who they are now; our amazing director Mrs.
Aichyne Mohammed who we owe everything that this club has become to. All her efforts undoubtedly show that shes not just a director or a second mother, but much more than that; she's our light in the dark, the one responsible for everything that we've accomplished in these past few months. Truly thank you Mrs. Aichyne </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                       
                        </motion.p>
                    </motion.div>

            
                </motion.div>
            </div>
        </section>
    );
};

export default About;