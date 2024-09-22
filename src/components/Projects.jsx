import React, { useState } from 'react';
import { PROJECTS } from '../constants';  // Assuming PROJECTS contains websiteLink and githubLink
import { MdArrowOutward } from 'react-icons/md';
import { FaGithub } from "react-icons/fa";
import { motion } from  "framer-motion";
const Projects = () => {
  // State to track the currently selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the dialog
  const openDialog = (project) => {
    setSelectedProject(project);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section className='pt-8' id='projects'>
      <motion.h2 
      initial = {{ opacity:0,y: -20 }}
      whileInView={{ opacity:1, y: 0}}
      transition = {{ duration: 0.8 }}
      className='mb-8 text-center text-3xl lg:text-5xl'>Projects</motion.h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <motion.div
          initial = {{ opacity: 0, scale: 0.9 }}
          whileInView={{opacity: 1, scale: 1}}
          transition = {{duration:0.5}}
          whileHover={{scale: 1.05}}
            key={project.id}
            className='group relative overflow-hidden rounded-3xl cursor-pointer'
            onClick={() => openDialog(project)} // Open the dialog on click
          >
            <motion.img
            whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <motion.div 
            initial={{ opacity:0 }}
            whileHover={{ opacity: 1}}
            transition={{ duration: 0.5 }}
            className='absolute inset-0 flex flex-col items-center justify-center text-xl text-blue-500 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
              <h3 className='mb-2 text-xl'>{project.name}</h3>
              <div className="flex items-center">
                    <span className="mr-1">Read More...</span>
                    <MdArrowOutward className="inline" />
                  </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Dialog box */}
      {selectedProject && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Transition for background fade
        >
          <motion.div
            className='bg-black p-8 rounded-lg w-96'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }} // Transition for dialog box
          >
            <h3 className='text-2xl mb-4'>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>

            {/* Display GitHub and Website Links */}
            <div className='mt-4 flex justify-around'>
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-400'
                >
                  <div className="flex items-center">
                    <span className="mr-1">
                      Repository <FaGithub className="inline" />
                    </span>
                    <MdArrowOutward className="inline" />
                  </div>
                </a>
              )}
              {selectedProject.WebsiteLink && (
                <a
                  href={selectedProject.WebsiteLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-400'
                >
                  <div className="flex items-center">
                    <span className="mr-1">Website</span>
                    <MdArrowOutward className="inline" />
                  </div>
                </a>
              )}
            </div>

            <button
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
              onClick={closeDialog}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
