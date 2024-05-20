import "../../index.css"


function Research() {

    const handleDivClick = (url : string) => {
        window.open(url, '_blank');
      };
    return (
        <div id="research-section" className="w-screen h-screen bg-black flex flex-col items-center justify-center z-20">
            <div className="flex items-center justify-center w-4/5 p-4">
                <h1 className="text-white m-5 text-4xl">Research</h1>
            </div>
            <div className="flex flex-col items-center justify-center overflow-y-scroll overflow-x-hidden h-5/6 pt-[605px]">
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col  bg-white w-full rounded-lg min-[700px]:m-4 min-[300px]:m-4 mx-4 cursor-pointer"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/36984623/')}>
                    <div className="flex flex-col min-[700px]:w-2/4 min-[300px]:w-full">
                        <h1 className="font-bold text-black ml-5 p-2
                        min-[1280px]:text-xl
                        min-[900px]:text-lg
                        min-[300px]:text-md">Anatomical Variations of the External Jugular Vein: A Pictorial and Critical Review</h1>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-lg
                        min-[900px]:text-md
                        min-[300px]:text-sm">Rusu MC, Tudose RC, Vrapciu AD, Toader C, Popescu ŞA </p>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-md
                        min-[900px]:text-sm
                        min-[300px]:text-xs">Medicina (Kaunas). 2023 Mar 21;59(3):622. doi: 10.3390/medicina59030622. PMID: 36984623; PMCID: PMC10052824</p>
                    </div>
                    <div className="flex min-[700px]:w-2/4 max-[699px]:hidden items-center justify-center ">
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10052824/bin/medicina-59-00622-g020.gif" alt="Tudose" className="mx-5 border-2 border-black 
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10052824/bin/medicina-59-00622-g021.gif" alt="Tudose" className="mx-5 border-2 border-black
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        </div>
                </div>
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col  bg-white w-full rounded-lg cursor-pointer mx-4 min-[700px]:m-4 min-[300px]:m-4"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/37370931/')}>
                    <div className="flex flex-col min-[700px]:w-2/4 min-[300px]:w-full">
                        <h1 className="font-bold text-black ml-5 p-2
                        min-[1280px]:text-xl
                        min-[900px]:text-lg
                        min-[300px]:text-md">The Vertebral Artery: A Systematic Review and a Meta-Analysis of the Current Literature</h1>
                        <p className="text-md text-black italic ml-5 p-2
                         min-[1280px]:text-lg
                         min-[900px]:text-md
                         min-[300px]:text-sm">Tudose RC, Rusu MC, Hostiuc S </p>
                        <p className="text-sm text-black italic ml-5 p-2
                         min-[1280px]:text-md
                         min-[900px]:text-sm
                         min-[300px]:text-xs">Diagnostics (Basel). 2023 Jun 12;13(12):2036. doi: 10.3390/diagnostics13122036. PMID: 37370931; PMCID: PMC10296927</p>
                    </div>
                    <div className="flex min-[700px]:w-2/4 max-[699px]:hidden items-center justify-center ">
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10296927/bin/diagnostics-13-02036-g001.gif" alt="Tudose" className="mx-5 border-2 border-black
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10296927/bin/diagnostics-13-02036-g031.gif" alt="Tudose" className="mx-5 border-2 border-black
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        </div>
                </div>
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col  bg-white w-full rounded-lg min-[700px]:mb-8 min-[300px]:mb-4 mx-4 cursor-pointer"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/38429407/')}>
                    <div className="flex flex-col min-[700px]:w-2/4 min-[300px]:w-full">
                        <h1 className="font-bold text-black ml-5 p-2
                        min-[1280px]:text-xl
                        min-[900px]:text-lg
                        min-[300px]:text-md">The anterior communicating artery variants: a meta-analysis with a proposed classification system</h1>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-lg
                        min-[900px]:text-md
                        min-[300px]:text-sm">Triantafyllou G, Tudose RC, Tsiouris C, Tsakotos G, Loukas M, Tubbs RS, Kalamatianos T, Chrissicopoulos C, Al-Nasraoui K, Koutserimpas C, Rusu MC, Natsis K, Kotrotsios A, Piagkou M </p>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-md
                        min-[900px]:text-sm
                        min-[300px]:text-xs">The anterior communicating artery variants: a meta-analysis with a proposed classification system. Surg Radiol Anat. 2024 May;46(5):697-716. doi: 10.1007/s00276-024-03336-7. Epub 2024 Mar 1. PMID: 38429407; PMCID: PMC11074054.</p>
                    </div>
                    <div className="flex min-[700px]:w-2/4 max-[699px]:hidden items-center justify-center ">
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/11074054/bin/276_2024_3336_Fig1_HTML.gif" alt="Tudose" className="mx-5 border-2 border-black 
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/11074054/bin/276_2024_3336_Fig12_HTML.gif" alt="Tudose" className="mx-5 border-2 border-black
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        </div>
                </div>
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col bg-white w-full rounded-lg min-[700px]:mb-8 min-[300px]:mb-4 mx-4 cursor-pointer"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/38590476/')}>
                    <div className="flex flex-col min-[700px]:w-2/4 min-[300px]:w-full">
                        <h1 className="font-bold text-black ml-5 p-2
                        min-[1280px]:text-xl
                        min-[900px]:text-lg
                        min-[300px]:text-md">Systematic Review and Meta-analysis of Suprascapular Notch Morphological Variability: Do We Know Everything?</h1>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-lg
                        min-[900px]:text-md
                        min-[300px]:text-sm">Tsakotos G, Tudose RC, Triantafyllou G, Koutserimpas C, Rusu MC, Flevas D, Piagkou M </p>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-md
                        min-[900px]:text-sm
                        min-[300px]:text-xs"> Systematic Review and Meta-analysis of Suprascapular Notch Morphological Variability: Do We Know Everything? Cureus. 2024 Mar 9;16(3):e55852. doi: 10.7759/cureus.55852. PMID: 38590476; PMCID: PMC11001262.</p>
                    </div>
                    <div className="flex min-[700px]:w-2/4 max-[699px]:hidden items-center justify-center ">
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/11001262/bin/cureus-0016-00000055852-i02.gif" alt="Tudose" className="mx-5 border-2 border-black 
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/11001262/bin/cureus-0016-00000055852-i03.gif" alt="Tudose" className="mx-5 border-2 border-black
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        </div>
                </div>
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col  bg-white w-full rounded-lg min-[700px]:mb-8 min-[300px]:mb-4 mx-4 cursor-pointer"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/38315210/')}>
                    <div className="flex flex-col w-full">
                        <h1 className="font-bold text-black ml-5 p-2
                        min-[1280px]:text-xl
                        min-[900px]:text-lg
                        min-[300px]:text-md">Lowered hyoid bone overlapping the thyroid cartilage in CT angiograms</h1>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-lg
                        min-[900px]:text-md
                        min-[300px]:text-sm">Rusu MC, Tudose RC, Vrapciu AD, Popescu ŞA </p>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-md
                        min-[900px]:text-sm
                        min-[300px]:text-xs"> Lowered hyoid bone overlapping the thyroid cartilage in CT angiograms. Surg Radiol Anat. 2024 Mar;46(3):333-339. doi: 10.1007/s00276-024-03300-5. Epub 2024 Feb 5. PMID: 38315210.</p>
                    </div>
                </div>
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col bg-white w-full rounded-lg min-[700px]:mb-8 min-[300px]:mb-4 mx-4 cursor-pointer"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/38654810/')}>
                    <div className="flex flex-col min-[700px]:w-2/4 min-[300px]:w-full">
                        <h1 className="font-bold text-black ml-5 p-2
                        min-[1280px]:text-xl
                        min-[900px]:text-lg
                        min-[300px]:text-md">A Bilateral Symmetrical Variant Formation of the Sural Nerve</h1>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-lg
                        min-[900px]:text-md
                        min-[300px]:text-sm">Tsakotos G, Triantafyllou G, Koutserimpas C, Rusu MC, Tudose R, Piagkou M </p>
                        <p className="text-black italic ml-5 p-2
                        min-[1280px]:text-md
                        min-[900px]:text-sm
                        min-[300px]:text-xs"> A Bilateral Symmetrical Variant Formation of the Sural Nerve. Cureus. 2024 Mar 24;16(3):e56801. doi: 10.7759/cureus.56801. PMID: 38654810; PMCID: PMC11036114.</p>
                    </div>
                    <div className="flex min-[700px]:w-2/4 max-[699px]:hidden items-center justify-center ">
                    <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/11036114/bin/cureus-0016-00000056801-i01.gif" alt="Tudose" className="mx-5 border-2 border-black my-5
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/11036114/bin/cureus-0016-00000056801-i02.gif" alt="Tudose" className="mx-5 border-2 border-black my-5
                        min-[1280px]:h-[150px] min-[1280px]:w-[150px]
                        min-[900px]:h-[125px] min-[900px]:w-[125px]
                        min-[700px]:h-[100px] min-[700px]:w-[100px]
                        min-[300px]:h-[50px] min-[300px]:w-[50px]" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Research