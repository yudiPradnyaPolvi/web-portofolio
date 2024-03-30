import './App.scss'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Experience from './component/Experience/Experience.jsx'
import {  Outlet } from 'react-router-dom'
import Skill from './component/Skill/Skill.jsx'
import Work from './component/Work/Work.jsx'
import Testimonial from './component/Testimonial/Testimonial.jsx'
import GetInTouch from './component/GetInTouch/GetInTouch.jsx'
import Footer from './component/Footer/Footer'
// import Awards from './component/Awards/Awards.jsx'
// import Certificates from './component/Certificates/Certificates.jsx'
// import Contact from './component/Contact/Contact.jsx'




function App() {


  return (
    <>
    
        <Header />

        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>

        <section id="experience">
          <Experience />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="testimonial">
          <Testimonial />
        </section>
        <section id="getintouch">
          <GetInTouch />
        </section>
        <section id="footer">
          <Footer/>
        </section>
      {/* <Route component ={Contact} path= "/contact"/>      */}
      
    </>
  )
}

export default App
