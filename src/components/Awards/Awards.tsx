import "../../index.css"
import { AiOutlineTrophy } from "react-icons/ai"
import { BiMedal } from "react-icons/bi"

function Awards() {
    return (
        <div id="awards-section" className="flex w-screen h-96 bg-white">
            <div className="w-1/2 h-96 flex flex-col items-center flex-1">
                <h1 className="text-6xl font-bold text-black mx-auto my-auto">Awards</h1>
                <AiOutlineTrophy className="w-4/5 h-4/5 mx-auto my-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center flex-1">
                <div className="flex border-2 border-black w-4/5 h-full rounded-lg my-4 cursor-pointer items-center p-4 bg-light-gray">
                <BiMedal className="w-16 h-16 mr-4"/>
                <div>
                    <h2 className="text-2xl font-bold text-black">1st place Young Investigator's Award</h2>
                    <p className="text-lg text-gray-700">Congress of the University of Medicine and Pharmacy "Carol Davila" Bucharest X edition</p>
                    <p className="text-sm text-gray-500 italic">Oral Presentation - CBCT assessment of the greater palatine canal</p>
                </div>
            </div>
            <div className="flex border-2 border-black w-4/5 h-full rounded-lg my-4 cursor-pointer items-center p-4 bg-light-gray">
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