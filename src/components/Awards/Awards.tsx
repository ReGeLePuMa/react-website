import "../../index.css"
import { AiOutlineTrophy } from "react-icons/ai"
import { BiMedal } from "react-icons/bi"

function Awards() {
    return (
        <div id="awards-section" className="flex min-[700px]:flex-row min-[300px]:flex-col h-screen w-screen  bg-white">
            <div className="min-[700px]:w-1/2 min-[300px]:w-full h-auto  flex flex-col items-center justify-center flex-1">
                <h1 className="font-bold text-black text-4xl">Awards</h1>
                <AiOutlineTrophy className="w-1/2 h-1/2
                min-[900px]:w-80 min-[900px]:h-80
                min-[700px]:w-60 min-[700px]:h-60
                min-[300px]:w-60 min-[300px]:w-60
                min-[150px]:w-60 min-[150px]:w-60" />
            </div>
            <div className="min-[700px]:w-1/2 min-[300px]:w-full h-auto flex flex-col items-center justify-center">
                <div className="flex flex-row border-2 border-black w-4/5 rounded-lg my-4 items-center p-4 bg-light-gray">
                <BiMedal className="w-16 h-16 mr-4"/>
                <div>
                    <h2 className="font-bold text-black
                     min-[900px]:text-2xl
                     min-[700px]:text-xl
                     min-[300px]:text-lg">1st place Young Investigator's Award</h2>
                    <p className="text-gray-700
                    min-[900px]:text-xl
                    min-[700px]:text-md
                    min-[300px]:text-sm">Congress of the University of Medicine and Pharmacy "Carol Davila" Bucharest X edition</p>
                    <p className="text-gray-500 italic
                    min-[900px]:text-xl
                    min-[700px]:text-md
                    min-[300px]:text-sm">Oral Presentation - CBCT assessment of the greater palatine canal</p>
                </div>
            </div>
            <div className="flex border-2 flex-row border-black w-4/5 rounded-lg my-4 items-center p-4 bg-light-gray">
                    <BiMedal className="w-16 h-16 mr-4"/>
                <div>
                        <h2 className="font-bold text-black
                        min-[900px]:text-2xl
                        min-[700px]:text-xl
                        min-[300px]:text-lg">1st place - Scientific Presentations</h2>
                        <p className="text-gray-700
                        min-[900px]:text-xl
                        min-[700px]:text-md
                        min-[300px]:text-sm">Preclinical Section - Dent-X Congress 3rd edition</p>
                        <p className="text-gray-500 italic
                        min-[900px]:text-xl
                        min-[700px]:text-md
                        min-[300px]:text-sm">Oral Presentation - The Zygomatic Implant: An anatomical view of the potential risks</p>
                </div>
            </div>    
            </div>
        </div>
    )
}

export default Awards