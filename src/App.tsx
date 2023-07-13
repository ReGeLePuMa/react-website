import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home/><About/></>} />
        <Route path="/gallery" element={<><Navbar /><Gallery/></>} />
      </Routes>
    </Router>
  )
}

export default App
