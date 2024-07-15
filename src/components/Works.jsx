// import React from 'react';
// import { projects } from '../constants';
// import { SectionWrapper } from '../hoc';
// import {motion} from 'framer-motion';
// import { styles } from '../styles';
// import { div } from 'three/examples/jsm/nodes/Nodes.js';

// const WorkCard=({work})=>(
// <div className='border-2 rounded  flex flex-col justify-center items-center m-3 w-full'>
//   <img src={work.image} className='w-10/12 h-[300px]'/>
//   <div className=' p-4'>
//     <h2 className='text-white font-bold text-[24px]'>{work.name}</h2>
//     <p className='mt-2 text-secondary text-[14px]'>{work.description.length > 90 ? `${work.description.substring(0, 50)}...` : work.description}</p>
 
//     <div className="flex flex-wrap gap-2">
//         {work.tags.map((tag, index) => (
//           <span key={index} className={`text-xs px-2 py-1 rounded-lg ${tag.color}`}>{tag.name}</span>
//         ))}
//       </div>
//   </div>  

// </div>
// )



// const Works = () => {
//   return (
//     <>
//         <motion.div>
//        <p className={`${styles.sectionSubText} text-center font-ComicNeue`}>
//           What I have done so far
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center font-ComicNeue`}>
//           Work Experience.
//         </h2>
//     </motion.div>
//     <div className="grid grid-cols-2 gap-4 mt-20">
//         {projects.map((work,index)=>(
//           <WorkCard key={index} work={work} />
//         ))}
//     </div>
//     </>
//   )
// }

// export default SectionWrapper(Works,"work")

import React from 'react';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Link } from 'react-router-dom'; // Import Link

const WorkCard = ({ work }) => (
  <Link to={`/work/${work.name}`}> {/* Use Link with dynamic slug */}
    <div className='border-2 rounded flex flex-col justify-center items-center m-3 w-full'>
      <img src={work.image} className='w-10/12 h-[300px]' />
      <div className='p-4'>
        <h2 className='text-white font-bold text-[24px]'>{work.name}</h2>
        <p className='mt-2 text-secondary text-[14px]'>{work.description.length > 90 ? `${work.description.substring(0, 50)}...` : work.description}</p>

        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag, index) => (
            <span key={index} className={`text-xs px-2 py-1 rounded-lg ${tag.color}`}>{tag.name}</span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} text-center font-ComicNeue`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center font-ComicNeue`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 mt-20">
        {projects.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");

