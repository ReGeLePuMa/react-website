import "../../index.css"
import { AiOutlineTrophy } from "react-icons/ai"
import { BiMedal } from "react-icons/bi"

function Awards() {
    return (
        <div id="awards-section" className="flex h-screen w-screen  bg-white">
            <div className="w-1/2 flex flex-col items-center justify-center flex-1">
                <h1 className="text-6xl font-bold text-black">Awards</h1>
                <AiOutlineTrophy className="w-96 h-96" />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="flex border-2 border-black w-4/5 rounded-lg my-4 items-center p-4 bg-light-gray">
                <BiMedal className="w-16 h-16 mr-4"/>
                <div>
                    <h2 className="text-2xl font-bold text-black">1st place Young Investigator's Award</h2>
                    <p className="text-lg text-gray-700">Congress of the University of Medicine and Pharmacy "Carol Davila" Bucharest X edition</p>
                    <p className="text-sm text-gray-500 italic">Oral Presentation - CBCT assessment of the greater palatine canal</p>
                </div>
            </div>
            <div className="flex border-2 border-black w-4/5 rounded-lg my-4 items-center p-4 bg-light-gray">
                    <BiMedal className="w-16 h-16 mr-4"/>
                <div>
                        <h2 className="text-2xl font-bold text-black">1st place - Scientific Presentations</h2>
                        <p className="text-lg text-gray-700">Preclinical Section - Dent-X Congress 3rd edition</p>
                        <p className="text-sm text-gray-500 italic">Oral Presentation - The Zygomatic Implant: An anatomical view of the potential risks</p>
                </div>
            </div>    
            </div>
        </div>
    )
}

export default Awards