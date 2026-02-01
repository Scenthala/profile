import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Books from './components/Books'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Timeline from './components/Timeline'
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
        <Books />
        <Skills />
        <Certifications />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
