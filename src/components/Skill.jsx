import React, { useState } from 'react';
import { SOFTWARE_SKILLS, DATA_SKILLS } from '../constants';
import { motion } from 'framer-motion';

// Container and item animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3, // Staggered animation for each skill item
    },
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

const buttonVariants = {
  hover: { scale: 1.05 }, // Button hover effect
};

const Skill = () => {
  const [selectedSkillType, setSelectedSkillType] = useState('software');

  const skillsToShow = selectedSkillType === 'software' ? SOFTWARE_SKILLS : DATA_SKILLS;

  return (
    <motion.div
      className="container mx-auto"
      id="skills"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h2
        className="mb-12 mt-20 text-center text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      {/* Buttons */}
      <div className="flex justify-center mb-6">
        <motion.button
          onClick={() => setSelectedSkillType('software')}
          className={`px-4 py-2 mx-2 rounded-lg ${
            selectedSkillType === 'software'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-black'
          }`}
          variants={buttonVariants}
          whileHover="hover"
        >
          Software Skills
        </motion.button>
        <motion.button
          onClick={() => setSelectedSkillType('data')}
          className={`px-4 py-2 mx-2 rounded-lg ${
            selectedSkillType === 'data'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-black'
          }`}
          variants={buttonVariants}
          whileHover="hover"
        >
          Data Skills
        </motion.button>
      </div>

      {/* Skill list */}
      <motion.div
        className="mx-2 flex flex-wrap justify-center rounded-3xl px-4 lg:px-20 border border-stone-50/30"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {skillsToShow.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center justify-center p-4 ${
              index !== skillsToShow.length - 1 ? 'border-r border-stone-50/30' : ''
            }`}
            variants={itemVariants}
          >
            <div className="flex items-center group">
              {skill.icon}
              <h3 className="px-2 text-lg lg:text-2xl">{skill.name}</h3>
              <span className="tooltip hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-sm rounded p-1 group-hover:block">
                {skill.experience}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skill;
