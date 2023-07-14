import "../../index.css"

function Footer() {
  return (
    <div className="w-screen flex items-center p-4 bg-black text-white">
    <div className="flex flex-col">
      <a href="http://anatomy.ro" className="text-xl text-white hover:underline">Anatomy.ro</a>
      <a href="https://umfcd.ro/" className="text-xl text-white hover:underline">University of Medicine and Pharmacy "Carol Davila"</a>
    </div>
    <h5 className="text-2xl w-1/2 text-center p-4">© 2023 Tudose Răzvan. All rights reserved.</h5>
  </div>
  
  )
}

export default Footer