import { FaTooth } from 'react-icons/fa'
import { BsFillPinFill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'
import { Link } from "react-scroll";
import Video from '../../assets/tudose.mp4'
import Photo from '../../assets/tudose.png'
import "../../index.css"


function Home() {
  return (
    <div className="h-screen w-screen overflow-x-auto relative flex items-center justify-center mt-4">
        <video className="w-full h-screen object-cover absolute top-0 left-0" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>

      <div className="flex flex-col items-center text-white z-10">
        <img src={Photo} alt="Tudose" className="w-2/3 h-2/3 rounded-full mx-auto mt-10" />
        <h1 className="text-5xl font-bold p-2">Dr. Răzvan Tudose</h1>
        <div className="flex items-center mr-4 p-2">
          <FaTooth className="text-2xl" />
          <span className="ml-2 text-2xl">Faculty of Dentistry</span>
        </div>
        <div className="flex items-center p-2">
          <HiAcademicCap className=" text-2xl" />
          <span className="ml-2 text-2xl">“Carol Davila” University of Medicine and Pharmacy</span>
        </div>
        <div className="flex items-center p-2">
          <BsFillPinFill className=" text-2xl" />
          <span className="ml-2 text-2xl">Bucharest, Romania</span>
        </div>
        <div className="flex items-center p-4">
          <Link
            activeClass="active"
            to="about-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer  bg-black border-white border-2 rounded-lg hover:scale-105 transition-all duration-300 text-2xl mr-10 p-4"
          >
            About me
          </Link>
          <Link
            activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link cursor-pointer bg-white text-black rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4 mr-10 ml-5"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home