import "../styling/skills.css";
import React, { useState } from "react";
import css3 from "../assets/icons/css3.svg";
import express from "../assets/icons/express.svg";
import firebase from "../assets/icons/firebase.svg";
import html5 from "../assets/icons/html5.svg";
import javascript from "../assets/icons/javascript.svg";
import jest from "../assets/icons/jest.svg";
import materialui from "../assets/icons/materialui.svg";
import nodejs from "../assets/icons/nodejs.svg";
import postgresql from "../assets/icons/postgresql.svg";
import react from "../assets/icons/react.svg";
import typescript from "../assets/icons/typescript.svg";

function Skills() {
  const [iconArr, setIconArr] = useState<string[]>([]);

  React.useEffect(() => {
    const icons = [
      css3,
      express,
      firebase,
      html5,
      javascript,
      jest,
      materialui,
      nodejs,
      postgresql,
      react,
      typescript,
    ];
    setIconArr(icons);
  }, []);

  return (
    <>
      <div id="iconContainer">
        {iconArr.map((icon) => {
          return <img className="techIcon" key={icon} src={icon} alt={icon} />;
        })}
      </div>
    </>
  );
}

export default Skills;
