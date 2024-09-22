import React from 'react';
import { HERO } from "../constants";
import KarImg from "../assets/karthik_photo.jpg";
import { SOCIAL_MEDIA_LINKS } from "../constants"; // Import social media links
import { FaDownload } from "react-icons/fa"; // For the download button
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center'>
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0}}
      transition={{ duration: 1}}
      className="w-full md:w-1/2">
        <h2 className='my-12 p-1 text-5xl font-bold md:text-4xl lg:text-[5rem] whitespace-nowrap'>
          {HERO.name}
        </h2>

        <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
          {HERO.greet}
        </p>
        <p className='mb-8 p-2 text-xl'>
          {HERO.description}
        </p>

        {/* Social Media Links */}
        <div className='flex space-x-6 mb-4'>
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>

        {/* Resume Download Button */}
        <a href="/Karthik_Resume.pdf" download className='inline-flex items-center px-3 py-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700'>
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </motion.div>

      <motion.div 
      initial ={{ opacity:0, scale:0.8 }}
      animate={{ opacity:1, scale:1 }}
      transition={{duration: 1}}
      className="w-full md:w-1/2 lg:p-20">
        <div className="flex justify-center mt-3">
          <motion.img
          initial ={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1}}
          src={KarImg} width={450} height={400} alt="Karthik Iyer" className='rounded-3xl' />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
