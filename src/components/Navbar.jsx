import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks,socialMedia} from '../constants/index';
import {logo,menu,close} from '../assets';
// import {Ajay} from '../assets/social media icons/Aave.png';
import Aave from "../assets/social media icons/aave.svg";
import Insta from "../assets/social media icons/instagram.svg";
import FB from "../assets/social media icons/facebook.svg";
import Linked from "../assets/social media icons/linked.svg";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleLinkClick = (linkTitle) => {
      navigate(`/${linkTitle}`); 
      console.log(`/${linkTitle}`);
      // Construct the desired path
    };


    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`${
      styles.paddingX
    } w-full flex items-center py-3 sm:py-4 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-primary"
    }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10 justify-between"> {/* Added justify-between class */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                navigate(`/${link.title}`); // Use navigate for programmatic navigation
              }}
            >
              <Link to={`/${link.title}`}>{link.title}</Link> {/* Keep the Link component for in-app routing */}
            </li>
          ))}
        </ul>

        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={Aave} alt="logo" className="w-9 h-9 object-contain filter invert" />
          <p className="text-[22px] font-bold cursor-pointer flex text-[#915EFF]">JAY<img src={Aave} alt="logo" className="w-9 h-9 object-contain filter invert" />
            <span className="sm:block hidden">RAVA</span>
          </p>
        </Link>
{/* Responsive Social Media Icons */}
<div className="hidden md:flex gap-10"> {/* Hide on small screens */}
  {socialMedia.map((icon) => (
    <img
      key={icon.id}
      src={icon.src}
      className="w-[28px] h-[28px] object-contain cursor-pointer gap-0 filter invert border-2"
    />
  ))}
</div>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle?close:menu} alt='menu' className='w-[28px] h-[8px] object-contain cursor-pointer'
        onClick={()=>setToggle(!toggle)}
        />
        <div className={`${!toggle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((link)=>(
          <li key={link.id} className={`${
            active===link.title?"text-white":"text-secondary"} font-poppins text-[16px] font-medium cursor-pointer `}
             onClick={()=>{setActive(link.title); setToggle(!toggle)}}>
            <a href={`/${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;