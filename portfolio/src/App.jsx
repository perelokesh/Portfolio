import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import NavBar from './Components/NavBar';
function App() {

  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      
    </Routes>
   </Router>
      
  )
}

export default App
