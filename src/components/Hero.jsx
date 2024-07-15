import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Canvas } from '@react-three/fiber';
import Laptop from './Laptop';
import Happy from './Happy';

const Hero = () => {
  const openTerminal = () => {
    // Implement your logic to open a terminal here
    console.log('Opening terminal...');
     window.open('/termi', '_blank'); // Opens a new tab with /terminal
    // You can replace this with your own logic to open a terminal or trigger an action
  };

  return (
    <section className={`relative w-full  mx-auto flex flex-col items-center justify-center sm:px-16 px-6 p-24 sm:p-0`}>
      {/* <div className='flex flex-row'>   */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-2">
        {/* Animated Status Indicators */}
        <div className="flex flex-col items-center hidden sm:block ">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 ml-2 violet-gradient" />
        </div>

        {/* Responsive Text Content */}
        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white font-ComicNeue`}>
            Hi, I'm <span className="text-[#915EFF] font-ComicNeue">AJAY</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-slate-100 font-ComicNeue`}>
            I develop 3D visuals, user interfaces <br className="sm:block hidden" /> and web applications
          </p>
        </div>
        {/* </div> */}
        {/* Responsive 3D Canvas */}
        <div className=" w-10/12 h-screen hidden sm:block  md:block">
        {/* <div className='hidden sm:block'> */}
          <Canvas
            camera={{
              fov: 30,
              near: 0.2,
              far: 4000,
              position: [-2, 5, 6],
            }}
          >
            <Laptop position={[5, 2, 10]} />
          </Canvas>
        </div>
        <div onClick={openTerminal}   className='block lg:hidden md:hidden'>
          <Happy />
        </div>
      </div>
    </section>
  );
};

export default Hero;
