'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Navigation from '@/component/navbar';

const TableOfContents = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };



    return (
        <section 
            ref={ref}
            className="flex flex-col justify-center py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden min-h-screen"
        >
            <Navigation />
            <img src={"/img1.jpg"} />
            <img src={"/img2.jpg"} />
            <img src={"/img3.jpg"} />
            <img src={"/img4.jpg"} />
            <img src={"/img5.jpg"} />
            <img src={"/img6.jpg"} />
            <img src={"/img7.jpg"} />
            <img src={"/img8.jpg"} />
            <img src={"/img9.jpg"} />
            <img src={"/img10.jpg"} />
            <img src={"/img11.jpg"} />
            <img src={"/img12.jpg"} />
       
        </section>
    );
};

export default TableOfContents;