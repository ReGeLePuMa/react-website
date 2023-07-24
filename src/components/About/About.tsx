import "../../index.css"
import Photo from "../../assets/umfcd.png"

function About() {
    return (
        <div id="about-me" className="w-screen h-screen flex min-[700px]:flex-row min-[300px]:flex-col bg-white z-20 p-4">
            <div className="min-[700px]:w-1/2 min-[300px]:w-full h-auto flex items-center justify-center p-4">
                <img src={Photo} className="object-contain w-full h-full " alt="Your Photo" />
            </div>
            <div className="min-[700px]:w-1/2 min-[300px]:w-full h-full flex flex-col items-center justify-center p-4">
                <h1 className="text-center font-bold p-4 text-4xl">About me</h1>
                <p className="text-center
                min-[1500px]:text-3xl
                min-[900px]:text-2xl
                min-[700px]:text-xl
                min-[300px]:text-sm">
                    I am Răzvan Tudose, a committed and driven dentistry student at the Faculty of Dentistry, “Carol Davila” University of Medicine and Pharmacy, Bucharest, Romania.
                    With a profound dedication to unravelling anatomy and contributing to medical research, I strive for excellence in the field of dentistry.
                    Proficient in english, I possess the adaptability to thrive in diverse clinical environments, while showcasing exceptional teamwork and interpersonal skills.
                    Continuously seeking new avenues for growth, I am eager to delve into the complexities of oral and maxillofacial anatomy and contribute to cutting-edge research in the field of medicine.
                </p>
            </div>
        </div>
    )
}

export default About