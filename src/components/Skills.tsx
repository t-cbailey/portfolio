import "../styling/skills.css";
import React, { useState } from "react";
import css from "../assets/icons/css.svg";
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
import nextjs from "../assets/icons/nextjs.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import { SkillsProps } from "../../types/CustomTypes";

function Skills({ setCurrentPage }: SkillsProps) {
  const [iconArr, setIconArr] = useState<{ svg: string; name: string }[]>([]);

  React.useEffect(() => {
    setCurrentPage("Skills");
  });

  React.useEffect(() => {
    const icons = [
      { svg: css, name: "CSS3" },
      { svg: express, name: "Express.js" },
      { svg: firebase, name: "Firebase" },
      { svg: html5, name: "HTML" },
      { svg: javascript, name: "JavaScript" },
      { svg: jest, name: "Jest" },
      { svg: materialui, name: "MUI" },
      { svg: nodejs, name: "Node.js" },
      { svg: postgresql, name: "PostgreSQL" },
      { svg: react, name: "React" },
      { svg: typescript, name: "TypeScript" },
      { svg: nextjs, name: "Next.js" },
      { svg: tailwindcss, name: "Tailwind CSS" },
    ];
    setIconArr(icons);
  }, []);

  return (
    <>
      <div id="iconContainer">
        {iconArr.map((icon) => {
          return (
            <div className="singleIconContainer">
              <img
                className="techIcon"
                key={icon.name}
                src={icon.svg}
                alt={icon.name}
              />
              <p>{icon.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
