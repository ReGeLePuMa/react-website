import "../../index.css"


function Research() {

    const handleDivClick = (url : string) => {
        window.open(url, '_blank');
      };
    return (
        <div id="research-section" className="w-screen h-screen bg-black flex flex-col items-center justify-center z-20">
            <div className="flex items-center justify-center w-4/5 p-4">
                <h1 className="text-4xl text-white m-5 ">Research</h1>
            </div>
            <div className="flex flex-col items-center justify-center m-4 p-4">
                <div className="flex  bg-white w-full rounded-lg mb-8 mx-4 cursor-pointer"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/36984623/')}>
                    <div className="flex flex-col w-2/4">
                        <h1 className="text-lg font-bold text-black ml-5 p-2">Anatomical Variations of the External Jugular Vein: A Pictorial and Critical Review</h1>
                        <p className="text-md text-black italic ml-5 p-2">Rusu MC, Tudose RC, Vrapciu AD, Toader C, Popescu ŞA </p>
                        <p className="text-sm text-black italic ml-5 p-2">Medicina (Kaunas). 2023 Mar 21;59(3):622. doi: 10.3390/medicina59030622. PMID: 36984623; PMCID: PMC10052824</p>
                    </div>
                    <div className="flex w-2/4 items-center justify-center ">
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10052824/bin/medicina-59-00622-g020.gif" alt="Tudose" className="mx-5 border-2 border-black h-[150px] w-[150px]" />
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10052824/bin/medicina-59-00622-g021.gif" alt="Tudose" className="mx-5 border-2 border-black h-[150px] w-[150px]" />
                        </div>
                </div>
                <div className="flex  bg-white w-full rounded-lg cursor-pointer mx-4 mt-8"
                onClick={() => handleDivClick('https://pubmed.ncbi.nlm.nih.gov/37370931/')}>
                    <div className="flex flex-col w-2/4">
                        <h1 className="text-lg font-bold text-black ml-5 p-2">The Vertebral Artery: A Systematic Review and a Meta-Analysis of the Current Literature</h1>
                        <p className="text-md text-black italic ml-5 p-2">Tudose RC, Rusu MC, Hostiuc S </p>
                        <p className="text-sm text-black italic ml-5 p-2">Diagnostics (Basel). 2023 Jun 12;13(12):2036. doi: 10.3390/diagnostics13122036. PMID: 37370931; PMCID: PMC10296927</p>
                    </div>
                    <div className="flex w-2/4 items-center justify-center ">
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10296927/bin/diagnostics-13-02036-g001.gif" alt="Tudose" className="mx-5 border-2 border-black h-[150px] w-[150px]" />
                        <img src="https://www.ncbi.nlm.nih.gov/pmc/articles/instance/10296927/bin/diagnostics-13-02036-g031.gif" alt="Tudose" className="mx-5 border-2 border-black h-[150px] w-[150px]" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Research