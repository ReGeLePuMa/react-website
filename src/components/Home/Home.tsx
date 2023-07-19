import { FaTooth } from 'react-icons/fa'
import { BsFillPinFill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'
import { Link } from "react-scroll";
import Video from '../../assets/tudose.mp4'
import Photo from '../../assets/tudose.png'
import "../../index.css"


function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden overflow-x-auto relative flex items-center justify-center mt-4 p-4">
        <video className="w-full h-screen object-cover absolute top-0 left-0" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      <div className="flex flex-col items-center w-1/2 justify-center text-white z-10">
        <img src={Photo} alt="Tudose" className="object-contain h-52 w-52 min-[1280px]:w-60 min-[1280px]:h-60  mx-auto mt-12 " />
        <h1 className="text-3xl font-bold p-2">Răzvan Tudose</h1>
        <div className="flex items-center justify-center mr-4 p-2">
          <FaTooth className="text-xl" />
          <span className="ml-2 text-xl">Faculty of Dentistry</span>
        </div>
        <div className="flex items-center justify-center p-2">
          <HiAcademicCap className=" text-xl" />
          <span className="ml-2 text-xl">“Carol Davila” University of Medicine and Pharmacy</span>
        </div>
        <div className="flex items-center justify-center p-2">
          <BsFillPinFill className=" text-xl" />
          <span className="ml-2 text-xl">Bucharest, Romania</span>
        </div>
        <div className="flex flex-col md:flex-row items-center p-4">
    <Link
      activeClass="active"
      to="about-me"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="nav-link cursor-pointer  bg-black border-white border-2 rounded-lg hover:scale-105 transition-all duration-300 text-xl mr-0 md:mr-10 p-4 mb-4 md:mb-0"
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
      className="nav-link cursor-pointer bg-white text-black rounded-lg hover:scale-105 transition-all duration-300 text-xl p-4 ml-0 md:ml-5"
    >
      Contact
    </Link>
  </div>
      </div>
    </div>
  )
}

export default Home