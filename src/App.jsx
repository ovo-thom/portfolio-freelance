import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Training from './components/Training';
import TrainingDetails from './components/TrainingDetails'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Training />
              <Contact />
            </>
          }
        />

        <Route path="/training" element={<TrainingDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
