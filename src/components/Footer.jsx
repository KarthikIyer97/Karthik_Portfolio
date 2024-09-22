// 
import React from 'react';
import logo from "../assets/logo.jpg";
import { SOCIAL_MEDIA_LINKS } from '../constants';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
};

const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

const Footer = () => {
    return (
        <motion.div className='mb-8 mt-20' variants={containerVariants} initial="hidden" whileInView="visible">
            {/* Logo */}
            <motion.div className="flex items-center justify-center" variants={logoVariants}>
                <img src={logo} width={200} className='my-20' alt="Logo" />
            </motion.div>

            {/* Social Media Links */}
            <motion.div className="flex items-center justify-center gap-8" variants={containerVariants}>
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target='_blank'
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }} // Slight scale on hover
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </motion.div>

            {/* Copyright Text */}
            <motion.p
                className='mt-8 text-center text-sm tracking tracking-wide text-gray-400'
                variants={itemVariants}
            >
                &copy; compileTab. All rights reserved.
            </motion.p>
        </motion.div>
    );
};

export default Footer;
