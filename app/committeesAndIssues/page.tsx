'use client';

import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
    Scale, 
    Shield, 
    AlertTriangle, 
    Globe, 
    Building2, 
    Users, 
    Heart, 
    ShieldCheck, 
    UserCheck,
    ChevronRight,
    Gavel
} from 'lucide-react';

const CommitteesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCommittee, setSelectedCommittee] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const committees = [
        {
            id: "icc",
            name: "ICC",
            fullName: "International Criminal Court",
            icon: Scale,
            color: "from-amber-500 to-orange-600",
            bgColor: "bg-amber-500/10",
            borderColor: "border-amber-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Accountability for War Crimes in Conflict Zones", "Prosecuting Environmental Destruction as Crime Against Humanity"]
        },
        {
            id: "unsc",
            name: "UNSC",
            fullName: "United Nations Security Council",
            icon: Shield,
            color: "from-blue-600 to-indigo-700",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["The Situation in the South China Sea", "Cyber Warfare and International Security"]
        },
        {
            id: "crisis",
            name: "Crisis Committee",
            fullName: "Special Crisis Committee",
            icon: AlertTriangle,
            color: "from-red-600 to-rose-700",
            bgColor: "bg-red-500/10",
            borderColor: "border-red-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Live Crisis: Global Financial Collapse", "Humanitarian Intervention in Real-time"]
        },
        {
            id: "ecosoc",
            name: "ECOSOC",
            fullName: "Economic and Social Council",
            icon: Globe,
            color: "from-emerald-500 to-teal-600",
            bgColor: "bg-emerald-500/10",
            borderColor: "border-emerald-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Sustainable Development Goals Post-2030", "Digital Economy and Developing Nations"]
        },
        {
            id: "eu",
            name: "EU",
            fullName: "European Union",
            icon: Building2,
            color: "from-blue-500 to-cyan-600",
            bgColor: "bg-blue-400/10",
            borderColor: "border-blue-400/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Energy Independence and Green Transition", "Migration Policy Reform"]
        },
        {
            id: "au",
            name: "AU",
            fullName: "African Union",
            icon: Users,
            color: "from-green-600 to-emerald-700",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Pan-African Free Trade Zone Implementation", "Climate Adaptation for African Nations"]
        },
        {
            id: "hrc",
            name: "HRC",
            fullName: "Human Rights Council",
            icon: Heart,
            color: "from-rose-500 to-pink-600",
            bgColor: "bg-rose-500/10",
            borderColor: "border-rose-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Rights of Indigenous Peoples in Modern Conflicts", "Freedom of Expression in the Digital Age"]
        },
        {
            id: "unodc",
            name: "UNODC",
            fullName: "Office on Drugs and Crime",
            icon: ShieldCheck,
            color: "from-violet-600 to-purple-700",
            bgColor: "bg-violet-500/10",
            borderColor: "border-violet-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Transnational Organized Crime in Cyber Space", "Corruption in Sports and Gaming"]
        },
        {
            id: "csw",
            name: "CSW",
            fullName: "Commission on Status of Women",
            icon: UserCheck,
            color: "from-fuchsia-500 to-pink-600",
            bgColor: "bg-fuchsia-500/10",
            borderColor: "border-fuchsia-500/30",
            chairs: ["Chair 1", "Chair 2"],
            topics: ["Women's Economic Empowerment in Post-Pandemic Era", "Ending Gender-Based Violence Online"]
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.5, 
                ease: "easeOut"
            }
        }
    };

    return (
        <section 
            ref={ref}
            id="committees"
            className="relative py-32 bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full blur-3xl opacity-10"
                        style={{
                            background: `radial-gradient(circle, ${['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'][i]} 0%, transparent 70%)`,
                            width: Math.random() * 500 + 300,
                            height: Math.random() * 500 + 300,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 60, 0],
                            y: [0, 40, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
                
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"
                    />
                    
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium tracking-wider uppercase mb-4"
                    >
                        9 Committees
                    </motion.span>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        Explore Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                            Committees
                        </span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        From the Security Council to specialized agencies, find your platform to debate, negotiate, and resolve global challenges
                    </motion.p>
                </motion.div>

                {/* Committees Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {committees.map((committee) => {
                        const isHovered = hoveredId === committee.id;
                        const isSelected = selectedCommittee === committee.id;
                        const Icon = committee.icon;
                        
                        return (
                            <motion.div
                                key={committee.id}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredId(committee.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setSelectedCommittee(isSelected ? null : committee.id)}
                                className="group relative cursor-pointer"
                            >
                                <div className={`relative overflow-hidden rounded-2xl border ${committee.borderColor} bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${isSelected ? 'ring-2 ring-red-500/50' : ''}`}>
                                    
                                    {/* Gradient Header */}
                                    <div className={`relative h-32 bg-gradient-to-r ${committee.color} p-6 overflow-hidden`}>
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:20px_20px]" />
                                        
                                        <motion.div
                                            className="absolute right-4 top-4 w-20 h-20 text-white/20"
                                            animate={{
                                                rotate: isHovered ? 360 : 0,
                                                scale: isHovered ? 1.2 : 1
                                            }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <Icon className="w-full h-full" strokeWidth={1} />
                                        </motion.div>
                                        
                                        <div className="relative z-10">
                                            <motion.div
                                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm mb-3"
                                                animate={{ y: isHovered ? -5 : 0 }}
                                            >
                                                <Icon className="w-6 h-6 text-white" />
                                            </motion.div>
                                            
                                            <h3 className="text-2xl font-bold text-white">{committee.name}</h3>
                                            <p className="text-white/80 text-sm font-medium">{committee.fullName}</p>
                                        </div>
                                        
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                            initial={{ x: '-200%' }}
                                            animate={{ x: isHovered ? '200%' : '-200%' }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                                <Gavel className="w-4 h-4" />
                                                <span className="uppercase tracking-wider font-semibold">Chairs</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {committee.chairs.map((chair, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className={`px-3 py-1 rounded-full text-sm font-medium ${committee.bgColor} text-white border ${committee.borderColor}`}
                                                    >
                                                        {chair}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                                <ChevronRight className="w-4 h-4" />
                                                <span className="uppercase tracking-wider font-semibold">Topics</span>
                                            </div>
                                            
                                            <AnimatePresence>
                                                {isSelected ? (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="space-y-3"
                                                    >
                                                        {committee.topics.map((topic, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: idx * 0.1 }}
                                                                className={`p-3 rounded-lg ${committee.bgColor} border ${committee.borderColor}`}
                                                            >
                                                                <span className="text-gray-300 text-sm">
                                                                    <span className={`font-bold bg-gradient-to-r ${committee.color} bg-clip-text text-transparent`}>
                                                                        Topic {idx + 1}:{' '}
                                                                    </span>
                                                                    {topic}
                                                                </span>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="space-y-2"
                                                    >
                                                        {committee.topics.slice(0, 1).map((topic, idx) => (
                                                            <div key={idx} className="text-gray-400 text-sm line-clamp-2">
                                                                {topic}
                                                            </div>
                                                        ))}
                                                        <span className={`inline-flex items-center gap-1 text-sm font-medium bg-gradient-to-r ${committee.color} bg-clip-text text-transparent`}>
                                                            +1 more topic
                                                            <ChevronRight className="w-4 h-4" />
                                                        </span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        
                                        <motion.div
                                            className="mt-4 flex justify-center"
                                            animate={{ y: isHovered ? 5 : 0 }}
                                        >
                                            <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${committee.color} opacity-50`} />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: "9", label: "Committees" },
                        { number: "18", label: "Topics" },
                        { number: "18", label: "Chairs" },
                        { number: "500+", label: "Delegates" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CommitteesSection;