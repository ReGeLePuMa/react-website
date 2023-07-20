import "../../index.css"

function Footer() {
  return (
    <div className="w-screen flex items-center bottom-0 p-4 bg-black text-white">
    <div className="flex flex-col">
      <a href="http://anatomy.ro" className=" text-white hover:underline
        min-[700px]:text-sm
        min-[300px]:text-xs">Anatomy.ro</a>
      <a href="https://umfcd.ro/" className="text-white hover:underline
       min-[700px]:text-sm
       min-[300px]:text-xs">University of Medicine and Pharmacy "Carol Davila"</a>
    </div>
    <h5 className="w-1/2 text-center p-4
     min-[700px]:text-lg
     min-[300px]:text-sm">© 2023 Tudose Răzvan. All rights reserved.</h5>
  </div>
  
  )
}

export default Footer