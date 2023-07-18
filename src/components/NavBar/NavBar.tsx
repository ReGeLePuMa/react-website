import { Link, animateScroll as scroll } from "react-scroll"
import { FaHome } from "react-icons/fa"
import "../../index.css"


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="w-screen flex items-center justify-between p-4 bg-black text-white fixed top-0 z-20 overflow-x-hidden my-auto">
      <div>
        <button className="flex items-center text-2xl cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 p-4" onClick={scrollToTop}>
          <FaHome className="mr-2" />
          Home
        </button>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Link
          activeClass="active"
          to="research-section"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
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
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
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
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
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
          className="nav-link cursor-pointer  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;