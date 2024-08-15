import React, { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function ScrollBtn() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        if (scrollPosition > 300) { // You can adjust this threshold
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay:0.2 }}
                className='fixed bottom-10 right-20 z-40 border border-designColor p-3 rounded-full cursor-pointer hover:bg-black transition duration-200 text-lightText bg-darkText/40 duration-300'
                onClick={scrollToTop}
            >
                <MdArrowUpward size={24} />
            </motion.div>
        )
    );
}
