import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Training from './components/Training';

function App() {
  

  return (
    <Router>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Contact />
      <Footer />
    </div>
    </Router>
  )
}

export default App
