import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles';
import { experiences } from "../constants";
import {SectionWrapper} from '../hoc'
import {textVariant} from '../utils/motion'
import { VerticalBlurShader } from "three/examples/jsm/Addons.js";


const ExperienceCard=({experience})=>(
  <VerticalTimelineElement 
  contentStyle={{background:'#1d1836',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} className="w-[60%] h-[60%] object-contain"/>
    </div>
  }
  >
    <div>
    <h3 className="text-white text-[24px] font-bold font-ComicNeue">{experience.title}</h3>
    <p className="text-secondary text-[16px] font-semibold font-ComicNeue">{experience.company_name}</p>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
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
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience,index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")