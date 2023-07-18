import "../../index.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import Film from "../../assets/carousel/video.mp4"
import Image1 from "../../assets/carousel/picture1.jpg"
import Image2 from "../../assets/carousel/picture2.jpg"
import Image3 from "../../assets/carousel/picture3.jpg"
import Image4 from "../../assets/carousel/picture4.jpg"
import Image5 from "../../assets/carousel/picture5.jpg"
import Image6 from "../../assets/carousel/picture6.jpg"



function Teaching() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleVideoEnded = () => {
    setCurrentSlide(currentSlide + 1);
  };
  return (
    <div id="teaching-section" className="w-screen h-screen bg-black flex flex-col items-center justify-start">
      <div className="p-12 mb-12">
        <h1 className="text-6xl text-white font-bold my-auto mx-auto">Teaching</h1>
      </div>
      <div className="flex-start mx-auto">
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showArrows={false}
          emulateTouch={true}
          showIndicators={false}
          stopOnHover={true}
          axis="horizontal"
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
        >
          <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
            <video className="w-full h-[50vh]" muted autoPlay loop onEnded={handleVideoEnded}>
              <source src={Film} type="video/mp4" />
            </video>
            <p className="h-auto w-auto text-white text-center mt-4 italic leading-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>
              A case of significant clinical importance in dentistry is presented. Bilateral, erupted 3rd molars, lightly bucco-angulated, tangential at the maxillary sinus.<br/><br/>
              Left: The palatine root of the 3rd molar presents a periapical granuloma, diameter - 1.58 mm. The excision of such formation situated in the proximity of the greater palatine foramen (distance - 2.24 mm) may result in the lesion of the greater palatine bundles, coursing through the foramen.<br /><br />
              Note the high bone density of the medial wall of the greater palatine canal/lateral wall of the nasal fossa.
            </p>

          </div>
          <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
            <img
              src={Image1}
              alt="Slide 1"
              className=" w-full h-[50vh]" />
            <p className="h-auto w-auto text-white text-center mt-4 italic leading-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>CBCT posterior-lateral view of the head and neck region, consisting of two 2D planes (axial and sagittal)
              and a cropped-volume 3D model representing the mandible (red) and the rest of the skull (blue). <br/><br/>
              Bilateral greater palatine fiber bundles can be observed in the anterior part of the scheme (yellow). The greater palatine canal
              and its opening in the oral cavity can be easily spotted via the greater palatine foramen on the sagittal plane</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
            <img
              src={Image2}
              alt="Slide 2"
              className=" w-full h-[50vh]" />
            <p className="h-auto w-auto text-white text-center mt-8 italic leading-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>3D rendering of the skull, anterolateral view <br/><br/>
              Infraorbital neurovascular bundles can be observed, exiting through the infraorbital foramen <br/><br/>
              Anatomical areas of interest for the zygomatic implant have been suggestively stained bilaterally (red/blue)
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
            <img
              src={Image3}
              alt="Slide 3"
              className=" w-full h-[50vh]"
            />
            <p className="h-auto w-auto text-white text-center mt-8 italic leading-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}> 3D-2D-2D-2D rendering illustrating the A-L view of the head. <br/><br/>
            An X-Ray filter was used for its high transparency. The greater palatine canal can be visualized, as well as the pterygopalatine fossa,
            and its communication with the orbit through the inferior orbital fissure (yellow). Other anatomical structures may be as well distinguished.</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
            <img
              src={Image4}
              alt="Slide 4"
              className=" w-full h-[50vh]"
            />
            <p className="h-auto w-auto text-white text-center mt-8 italic leading-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>3D rendering of the skull, anterolateral view <br/><br/>
              Infraorbital neurovascular bundles can be observed, exiting through the infraorbital foramen <br/><br/>
              Anatomical areas of interest for the zygomatic implant have been suggestively stained bilaterally (red/blue)</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
            <img
              src={Image5}
              alt="Slide 5"
              className=" w-full h-[50vh]"
            />
            <p className="h-auto w-auto text-white text-center mt-8 italic leading-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>3D-2D-2D figure
              Anterior-Lateral-Inferior view of the head <br></br>
              Illustration of the greater palatine canals with the greater palatine bundle and their extension in the oral cavity through the palatine grooves.<br></br>
              Yellow: Right greater palatine bundle <br></br>
              Green: Left greater palatine bundle <br></br>
              Grey: 3D model of the right hemi maxilla and hemi mandibula <br></br>
              The figure presents the bilateral morpho-topography of the greater palatine canals
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
            <img
              src={Image6}
              alt="Slide 6"
              className=" w-full h-[50vh]"
            />
            <p className="h-auto w-auto text-white text-center mt-8 italic leading-normal" style={{ whiteSpace: 'pre-line', lineHeight: '1' }}>3D rendering of the skull, anterior view <br/><br/>
              Infraorbital neurovascular bundles can be observed, exiting through the infraorbital foramen <br/><br/>
              Anatomical areas of interest for the zygomatic implant have been suggestively stained bilaterally (red/blue)</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Teaching