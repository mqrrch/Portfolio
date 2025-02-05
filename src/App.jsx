import { useState } from 'react'
import './App.css'
import About from './comps/About'
import Contact from './comps/Contact'
import Homepage from './comps/Homepage'
import Navbar from './comps/Navbar'
import Projects from './comps/Projects'
import ContactPopup from './comps/ContactPopup'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return(
    <div className=''>
      <ContactPopup isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen}/>
      <div className='fixed top-0 z-[-2] w-full h-full'>
        <div className='absolute top-0 z-[-2] h-screen w-screen bg-[#10061f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(70,33,103,0.5),rgba(255,255,255,0))]'></div>
      </div>
      <Navbar />
      <div className='px-5'>
        <Homepage isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />
        {/* <About /> */}
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
