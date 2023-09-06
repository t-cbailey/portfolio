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
        <Route path="/" element={<About setCurrentPage={setCurrentPage} />} />
        <Route
          path="/about"
          element={<About setCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/projects"
          element={<Projects setCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/projects/:project_id"
          element={<SingleProjectPage setCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/skills"
          element={<Skills setCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/certifications"
          element={<Certifications setCurrentPage={setCurrentPage} />}
        />
        <Route
          path="/contact"
          element={<Contact setCurrentPage={setCurrentPage} />}
        />
      </Routes>
    </>
  );
}

export default App;
