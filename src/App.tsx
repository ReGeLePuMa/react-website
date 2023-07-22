import './index.css'
import Navbar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Teaching from './components/Teaching/Teaching'
import Research from './components/Research/Research'
import Awards from './components/Awards/Awards'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Research />
      <Awards />
      <Teaching />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App

console.log("Acest site este protejat de catre Belea Spartanul Iluminatul.");
console.log("LinkedIn: https://www.linkedin.com/in/petrea-andrei/");
console.log("GitHub: https://github.com/ReGeLePuMa");
