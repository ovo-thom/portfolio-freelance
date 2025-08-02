import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectsPage from "./components/ProjectsPage";
import ProjectList from "./components/ProjectList";
import ProcessSection from "./components/ProcessSection";

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
                <ProcessSection />
                <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
