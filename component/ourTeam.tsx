'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';

const TeamSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const teamMembers = [
        {
            id: 1,
            name: "Hanna El Tahan and Mohamed Samir",
            role: "Secretary General",
            image: "/team1.jpg",
            color: "from-rose-500 to-orange-500"
        },
        {
            id: 2,
            name: "Abdalla Talaat and Omar Tamer",
            role: "Head of logistics",
            image: "/team2.jpg",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            name: "Yehia Darrat and Abdalla Talaat",
            role: "Head of Media",
            image: "/team6.jpg",
            color: "from-violet-500 to-purple-500"
        },
        {
            id: 4,
            name: "Adam Eldesouky and Yehia Darrat",
            role: "Head of Training and Debate",
            image: "/team5.jpg",
            color: "from-emerald-500 to-teal-500"
        },
        {
            id: 5,
            name: "Lojain El Dairoty and Clara Sherif",
            role: "Head of Organization",
            image: "/team3.jpg",
            color: "from-amber-500 to-yellow-500"
        },
        {
            id: 6,
            name: "Mrs.Aichyne Mohamed",
            role: "MUN director",
            image: "/team4.jpg",
            color: "from-indigo-500 to-blue-600"
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    return (
        <section
            ref={ref}
            className="relative py-32 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full blur-3xl opacity-20 ${
                            i % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'
                        }`}
                        style={{
                            width: Math.random() * 400 + 200,
                            height: Math.random() * 400 + 200,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Meet Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            AISMUN HIGH BOARD
                        </span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {teamMembers.map((member) => {
                        const isHovered = hoveredId === member.id;

                        return (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredId(member.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="group relative"
                            >
                                <div className="relative h-[450px] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-white/20">

                                    {/* Hover gradient */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-t ${member.color}`}
                                        animate={{ opacity: isHovered ? 0.15 : 0 }}
                                    />

                                    {/* Image */}
                                    <div className="relative h-[70%] w-full overflow-hidden">
                                        <motion.div
                                            className="relative w-full h-full"
                                            animate={{
                                                scale: isHovered ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </motion.div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-[30%] p-6 flex flex-col justify-center">

                                        <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${member.color} text-white mb-3`}>
                                            {member.role}
                                        </span>

                                        <h3 className="text-2xl font-bold text-white">
                                            {member.name}
                                        </h3>

                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default TeamSection;