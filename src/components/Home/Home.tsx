import { FaTooth } from 'react-icons/fa'
import { BsFillPinFill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'
import { Link } from "react-scroll";
import Video from '../../assets/tudose.mp4'
import Photo from '../../assets/tudose.png'
import PosterImage from '../../assets/poster.png'
import "../../index.css"


function Home() {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center mt-4 p-4">
        <video className="w-full h-screen object-cover absolute top-0 left-0" autoPlay loop muted playsInline poster={PosterImage}>
          <source src={Video} type="video/mp4" />
        </video>
      <div className="flex flex-col items-center w-full justify-center text-white z-10">
        <img src={Photo} alt="Tudose" className="object-contain mx-auto mt-12 
                                                  min-[1500px]:w-72 min-[1500px]:h-72
                                                  min-[1280px]:w-60 min-[1280px]:h-60
                                                  min-[900px]:w-52 min-[900px]:h-52
                                                  min-[800px]:w-44 min-[800px]:h-44
                                                  min-[600px]:w-36 min-[600px]:h-36
                                                  min-[300px]:w-32 min-[300px]:h-32" />
                                                  
        <h1 className="font-bold p-2
         min-[1500px]:text-3xl
         min-[1280px]:text-xl
         min-[900px]:text-xl
         min-[800px]:text-lg
         min-[600px]:text-lg
         min-[300px]:text-md">Răzvan Tudose</h1>
        <div className="flex items-center justify-center mr-4 p-2">
          <FaTooth className="
          min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md" />
          <span className="ml-2
          min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md">Faculty of Dentistry</span>
        </div>
        <div className="flex items-center justify-center p-2">
          <HiAcademicCap className=" min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md" />
          <span className="ml-2 min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md">“Carol Davila” University of Medicine and Pharmacy</span>
        </div>
        <div className="flex items-center justify-center p-2">
          <BsFillPinFill className=" min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md" />
          <span className="ml-2 min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md">Bucharest, Romania</span>
        </div>
        <div className="flex w-full min-[750px]:flex-row min-[300px]:flex-col  items-center justify-center p-4">
    <Link
      activeClass="active"
      to="about-me"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="nav-link cursor-pointer  bg-black border-white border-2 rounded-lg hover:scale-105 transition-all duration-300 mr-0 md:mr-10 p-4 mb-4 md:mb-0
      min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md"
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
      className="nav-link cursor-pointer bg-white text-black rounded-lg hover:scale-105 transition-all duration-300 p-4 ml-0 md:ml-5
      min-[1500px]:text-3xl
          min-[1280px]:text-xl
          min-[900px]:text-xl
          min-[800px]:text-lg
          min-[600px]:text-lg
          min-[300px]:text-md"
    >
      Contact
    </Link>
  </div>
      </div>
    </div>
  )
}

export default Home