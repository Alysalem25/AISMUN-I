'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import Navigation from '@/component/navbar';

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
            <Navigation />

            <motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl m-5 font-extrabold text-center  mb-6 text-red-700">
                    Our Theme

                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-xl m-5 font-bold text-white mb-6">
                    In a world that often believes it is moving forward, history reminds us that progress is rarely a straight line. Back to Black: Past Precedents,
                    Present Pressures is more than just a theme it is a return to the darkest moments that shaped our international system,
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-xl m-5 font-bold text-white mb-6">
                    the crises that exposed
                    humanity's greatest failures, and the lessons we continue to overlook. "Black" symbolizes periods of instability, conflict, collapse, and moral uncertainty times when global order was tested and, in many cases, broken. Yet within these moments lie the foundations of today's world, and the warnings we continue to ignore.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9 }}
                    className="text-xl m-5 font-bold text-white mb-6">

                    At AISMUN I, we believe that to understand the pressures defining our present rising polarization, renewed conflict, economic instability, and humanitarian crises we must first confront their origins. History does not simply repeat itself; it evolves, re-emerges, and adapts to new contexts. The echoes of past decisions can be heard in today's headlines, proving that unresolved precedents continue to shape modern diplomacy.
                    In honor of this theme, AISMUN I has intentionally structured its agenda to reflect this continuity.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1 }}
                    className="text-xl m-5 font-bold text-white mb-6">
                    Each of our chosen committees will feature one historical topic and one modern topic, creating a deliberate dialogue between past and present. By debating historical crises, delegates will explore the roots of global systems, power structures, and conflicts. By addressing modern issues, they will confront the consequences of those very foundations under contemporary pressures.
                    AISMUN I is not about escaping the past, but about returning to it with clarity, responsibility, and purpose.
                    Because only by going Back to Black can we hope to shape a future that does not repeat it.
                </motion.p>
            </motion.div>
        </section >
    );
};

export default TeamSection;