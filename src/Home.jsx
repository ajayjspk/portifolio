import { BrowserRouter,Route,Routes } from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components';
import Skills from './components/Skills'


const Home=() =>{
    return (
    //   <BrowserRouter>
      <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <Hero/>
            </div>
            <Experience/>
            <Contact/>
            <Skills/>
            
      </div>
    //   </BrowserRouter>
    )
  }
  
  export default Home;