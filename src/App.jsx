import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import Books from './components/Books'
import Skills from './components/Skills'
import TechRadar from './components/TechRadar'
import Services from './components/Services'
import Certifications from './components/Certifications'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import Speaking from './components/Speaking'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Books />
        <Skills />
        <TechRadar />
        <Services />
        <Certifications />
        <Timeline />
        <FAQ />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
