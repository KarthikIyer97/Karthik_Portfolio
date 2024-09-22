// import React from 'react'
// import { EDUCATION } from '../constants';

// const EducationSection = () => {
//   return (
//   <section className='py-8' id='education'>
//     <h2 className='mb-4 text-center text-3xl font-bold'>Education</h2>
//     {EDUCATION.map((edu, index) => (
//         <div key={index} className='mb-6 p-10'>
//             <h3 className='text-xl font-semibold'>{edu.degree}</h3>
//             <p className='text-lg'>{edu.institution}</p>
//             <p className='text-sm text-stone-300'>{edu.duration}</p>
            
//         </div>
//     ))}
//   </section>
//   )
// }

// export default EducationSection;

// import React from 'react';
// import { EDUCATION } from '../constants';

// const EducationSection = () => {
//   return (
//     <section className='py-8' id='education'>
//       <h2 className='mb-6 text-center text-3xl font-bold'>Education</h2>
//       <div className="flex flex-col items-center transition-transform transform hover:scale-105">
//         {EDUCATION.map((edu, index) => (
//           <div key={index} className='mb-4 p-6 transition-shadow duration-300 hover:shadow-lg rounded-lg bg-white text-center'>
//             <h3 className='text-xl font-semibold'>{edu.degree}</h3>
//             <p className='text-lg'>{edu.institution}</p>
//             <p className='text-sm text-stone-300'>{edu.duration}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default EducationSection;


import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from "framer-motion"

const EducationSection = () => {
  return (
    <section className='py-8' id='education'>
      <motion.h2 
      initial= {{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 1 }}
      className='mb-6 text-center text-3xl font-bold'>Education</motion.h2>
      <div className="flex flex-col items-center">
        {EDUCATION.map((edu, index) => (
          <motion.div 
          initial= {{opacity: 0, x: -20}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index* 0.5}}


            key={index} 
            className='mb-4 p-6 transition-shadow duration-300 hover:shadow-lg rounded-lg text-center bg-gradient-to-r  to-purple-500 text-white'
          >
            <h3 className='text-xl font-semibold'>{edu.degree}</h3>
            <p className='text-lg'>{edu.institution}</p>
            <p className='text-sm text-stone-200'>{edu.duration}</p>
            <p className="mx-auto text-sm w-2/4 flex">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
