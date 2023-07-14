import "../../index.css"
import Photo from "../../assets/umfcd.png"
import { Link } from 'react-scroll'

function About() {
    return (
        <div id="about-me" className="w-screen h-screen  flex bg-white z-20 ">
            <div className="w-1/2 flex justify-center ">
                <img src={Photo} />
            </div>
            <div className="w-1/2 flex flex-col items-center ">
                <h1 className="text-5xl text-center font-bold p-4">About me</h1>
                <div className="max-w-screen-md p-8">
                    <p className="text-xl text-left">
                        “I am Tudose Razvan, a committed and driven dentistry student at the Faculty of Dentistry, “Carol Davila” University of Medicine and Pharmacy, Bucharest, Romania.
                        With a profound dedication to unravelling anatomy and contributing to medical research, I strive for excellence in the field of dentistry.
                        Proficient in english, I possess the adaptability to thrive in diverse clinical environments, while showcasing exceptional teamwork and interpersonal skills.
                        Continuously seeking new avenues for growth, I am eager to delve into the complexities of oral and maxillofacial anatomy and contribute to cutting-edge research in the field of medicine.“
                    </p>
                </div>
                <Link
                    activeClass="active"
                    to="teaching-section"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="nav-link cursor-pointer  bg-black text-white rounded-lg hover:scale-105 transition-all duration-300 text-2xl p-4"
                >
                    Teaching
                </Link>
            </div>
        </div>
    )
}

export default About