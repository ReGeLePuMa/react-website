import "../../index.css"


function Research() {

    const handleDivClick = (url : string) => {
        window.open(url, '_blank');
      };
    return (
        <div id="research-section" className="w-screen h-screen bg-black flex flex-col items-center justify-center z-20 p-4">
            <div className="flex items-center justify-center w-4/5 p-4">
                <h1 className="text-white m-5 text-4xl">Research</h1>
            </div>
            <div className="flex flex-col items-center justify-center m-4 p-4">
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col  bg-white w-full rounded-lg min-[700px]:mb-8 min-[300px]:mb-4 mx-4 cursor-pointer"
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
                <div className="flex min-[700px]:flex-row min-[300px]:flex-col  bg-white w-full rounded-lg cursor-pointer mx-4 min-[700px]:mt-8 min-[300px]:mt-4"
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
            </div>
        </div>
    )
}

export default Research