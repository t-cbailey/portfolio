import "./styling/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import SingleProjectPage from "./components/SingleProjectPage";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project_id" element={<SingleProjectPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </>
  );
}

export default App;
