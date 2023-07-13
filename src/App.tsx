import './index.css'
import Navbar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

function App() {
  
  return (
    <>
      <Navbar />
      <Home/>
      <div id="about-me" className="h-screen w-screen flex items-center justify-center bg-white z-10"></div>
    </>
  )
}

export default App
