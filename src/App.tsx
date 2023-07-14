import './index.css'
import Navbar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Teaching from './components/Teaching/Teaching'
import Research from './components/Research/Research'
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact'

function App() {
  
  return (
    <>
     <Navbar />
      <Home/>
      <About/>
      <Research/>
      <Awards/>
      <Teaching/>
      <Contact/>
    </>
  )
}

export default App
