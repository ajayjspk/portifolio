import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants'; // Import projects data
import Github from '../assets/social media icons/github.svg'

const WorkDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  
  useState(() => {
      const foundProject = projects.find((p) => encodeURIComponent(p.slug) === slug); // Find project by encoded slug
      setProject(foundProject);
    }, [slug]);// Re-run useEffect on slug change
    
    const Project = projects.find((project) => project.name === slug); 


  return (
    < div className='flex flex-col items-center bg-slate-900 sm:mr-0 sm:ml-0 lg:mr-30 lg:ml-30'> 
    <p><a>Home</a><span> / </span><a>Projects</a><span> / </span><a>{ Project?.name }</a></p>
    <div className=' flex flex-col justify-center items-center lg:w-4/5'>
    <h2 className='font-bold text-4xl m-5 text-left'>{Project.name}</h2>
      <img src={Project.image} className='w-10/12 rounded-lg sm:w-8/12 md:w-9/12 lg:w-full'/>

    <div className='flex justify-between items-center w-full  w-11/12 p-5'>
      <a href={Project.source_code_link} target='blank' className=''><img width={40} src={Github} className='invert'/></a>
      <div className='flex '>
      <h3>Technologies Used:-</h3>
      {Project.tags.map(tag=>(
        <p className={`text-${tag.color} ml-3 font-bold`}>{tag.name}</p>
      ))}</div>

      </div>
    <p className='p-4 mt-5 text-xl text-justify'>{Project.description}</p>
    {/* ... display other project details */}
  </div>
  </div>

  );
};

export default WorkDetails;
