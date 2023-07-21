import { Link, animateScroll as scroll } from "react-scroll"
import { useState } from "react"
import { FaHome } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import Sidebar from "./SideBar"
import "../../index.css"


const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [isTapped, setIsTapped] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsTapped(false);
    setTimeout(() => setIsTapped(true), 1000);
  };

  return (
    <div className="w-screen flex items-center justify-between p-4 bg-black text-white fixed top-0 z-20 overflow-x-hidden my-auto">
      <div>
        <button className={`flex items-center bg-${isTapped ? 'black' : 'white'} text-${isTapped ? 'white' : 'black'} text-xl cursor-pointer  min-[700px]:hover:bg-white min-[700px]:hover:text-black rounded-lg min-[700px]:hover:scale-105 transition-all duration-300 p-4`} onClick={scrollToTop}>
          <FaHome className="mr-2" />
          Home
        </button>
      </div>
      <div className="hidden sm:flex items-center justify-center flex-1">
        <Link
          activeClass="active"
          to="research-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-xl p-4"
        >
          Research
        </Link>
        <Link
          activeClass="active"
          to="awards-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-xl p-4"
        >
          Awards
        </Link>
        <Link
          activeClass="active"
          to="teaching-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-xl p-4"
        >
          Teaching
        </Link>
        <Link
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-xl p-4"
        >
          Contact
        </Link>
      </div>
      <div className="sm:hidden relative ">
        <button className="text-white text-xl cursor-pointer" onClick={toggleDropdown}>
          <GiHamburgerMenu/>
        </button>
        {showDropdown && <Sidebar toggleDropdown={toggleDropdown}/>}
      </div>
    </div>
  );
};

export default Navbar;
