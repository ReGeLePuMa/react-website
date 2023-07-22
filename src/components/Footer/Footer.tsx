import "../../index.css"
import { AiFillMail } from 'react-icons/ai'

function Footer() {
  return (
    <div className="w-screen flex items-center justify-center min-[700px]:flex-row min-[300px]:flex-col-reverse bottom-0 p-4 bg-black text-white">
    <div className="w-auto flex flex-col">
      <a href="http://anatomy.ro" className=" text-white hover:underline max-[699px]:text-center max-[699px]:p-2
        min-[1500px]:text-md
        min-[700px]:text-sm
        min-[300px]:text-xs">Anatomy.ro</a>
      <a href="https://umfcd.ro/" className="text-white hover:underline max-[699px]:text-center max-[699px]:p-2
       min-[1500px]:text-md
       min-[700px]:text-sm
       min-[300px]:text-xs">University of Medicine and Pharmacy "Carol Davila"</a>
    </div>
    <div className="w-screen flex flex-col items-center justify-center">
    <h5 className="w-3/4 text-center max-[699px]:p-2
     min-[1500px]:text-xl 
     min-[700px]:text-lg
     min-[300px]:text-md">© 2023 Tudose Răzvan. All rights reserved.</h5>
     <div className="flex items-center justify-center">
     <AiFillMail className="mr-2"/>
       <p className="text-center max-[699px]:p-2
       min-[1500px]:text-md
       min-[700px]:text-md
       min-[300px]:text-sm">razvan-costin.tudose0721@stud.umfcd.ro</p>
       </div>
    </div> 
  </div>
  
  )
}

export default Footer