import React from 'react';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';

const Skills=()=> {
  return (
    <div>
          <div>
        {/* <p className={`font-ComicNeue`}>
          What I have done so far
        </p> */}
        <h2 className={'font-ComicNeue text-6xl font-bold mb-8'}>
          Skills
        </h2>
        </div>
    <div className='flex flex-row flex-wrap justify-center gap-10 sm:gap-5'>
      {technologies.map((technology)=>(
        <div  className=' w-max h-10 p-2 flex flex-row justify-center items-center bg-slate-800 rounded-md sm:p-1 sm:h-auto' key={technology.name}>
           <img src={ technology.icon} className='w-10 h-10'/> <h2 className='font-ComicNeue '>{technology.name}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}
export default  SectionWrapper(Skills,"");