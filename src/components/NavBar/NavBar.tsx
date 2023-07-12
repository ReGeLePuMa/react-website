import { Link, animateScroll as scroll } from "react-scroll"
import { FaHome } from "react-icons/fa"
import "../../index.css"

type Props = {}

const Navbar = (props: Props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="flex items-center justify-between p-4 bg-black text-white fixed top-0 right-0 left-0">
      <div>
        <button className="flex items-center text-2xl  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 p-4" onClick={scrollToTop}>
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
          offset={-70}
          duration={500}
          className="nav-link  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
        >
          Research
        </Link>
        <Link
          activeClass="active"
          to="awards-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
        >
          Awards
        </Link>
        <Link
          activeClass="active"
          to="teaching-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
        >
          Teaching
        </Link>
        <Link
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link  hover:bg-white hover:text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;