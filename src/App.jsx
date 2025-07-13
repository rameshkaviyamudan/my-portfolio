import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App