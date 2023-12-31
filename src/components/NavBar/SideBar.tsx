import { Link } from "react-scroll"
import "../../index.css"


function SideBar(props: {toggleDropdown: () => void}) {
  return (
    <div className="fixed flex flex-col z-40 bg-black text-white top-20 right-0 rounded-lg">
       <div className="flex flex-col items-center justify-center">
    <Link
      activeClass="active"
      to="research-section"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      className="nav-link cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 text-md p-4"
      onClick={props.toggleDropdown}
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
      className="nav-link cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 text-md p-4"
      onClick={props.toggleDropdown}
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
      className="nav-link cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 text-md p-4"
      onClick={props.toggleDropdown}
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
      className="nav-link cursor-pointer rounded-lg hover:scale-105 transition-all duration-300 text-md p-4"
      onClick={props.toggleDropdown}
    >
      Contact
    </Link>
  </div>
    </div>

  )
}

export default SideBar