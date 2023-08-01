import "./styling/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import SingleProjectPage from "./components/SingleProjectPage";
import React from "react";

function App() {
  const [currentPage, setCurrentPage] = React.useState<string>("");

  return (
    <>
      <Header />
      <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/about"
          element={<About setCurrentPage={setCurrentPage} />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project_id" element={<SingleProjectPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
