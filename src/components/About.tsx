import React from "react";
import "../styling/about.css";
import { Link } from "react-router-dom";
import CV from "../assets/Tim Bailey CV.pdf";

function About() {
  const [timer, setTimer] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState("scrollDown");
  const [scrollPostition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--scroll-animation",
      scrollDirection === "scrollDown"
        ? "scrollDownAnimation"
        : "scrollUpAnimation"
    );
  }, [scrollDirection]);

  const windowHeight = window.innerHeight;
  const aboutB = document.getElementById("aboutB");
  const aboutC = document.getElementById("aboutC");
  const aboutD = document.getElementById("aboutD");
  const cvButton = document.getElementById("cvbutton");
  const enterpoint = windowHeight * 0.2;
  if (aboutB) {
    aboutB.style.opacity = `${scrollPostition / enterpoint}`;
  }
  if (aboutC) {
    aboutC.style.opacity = `${scrollPostition / enterpoint - 1.8}`;
  }
  if (aboutD) {
    aboutD.style.opacity = `${scrollPostition / enterpoint - 2.3}`;
  }
  if (cvButton) {
    cvButton.style.opacity = `${scrollPostition / enterpoint - 2.8}`;
  }

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 4000);
  }, [timer]);

  React.useEffect(() => {
    const handleScroll = () => {
      setTimer(false);
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBottom = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setScrollDirection("scrollUp");
    } else {
      setScrollDirection("scrollDown");
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleBottom, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleBottom);
    };
  }, []);

  function handleClick() {
    window.open(CV);
  }

  return (
    <>
      <div id="about">
        <div id="aboutContainer">
          <section className="aboutText">
            <h2 id="aboutTitle">Hello, I'm Tim</h2>
            <p className="aboutBody" id="aboutA">
              I'm a junior full stack software developer.
            </p>
          </section>
          {timer && <div className="icon-scroll"></div>}
          <section className="aboutText">
            <p className="aboutBody" id="aboutB">
              Having recently completed a software development bootcamp at{" "}
              <a href="https://northcoders.com/" target="blank">
                Northcoders
              </a>{" "}
              I am looking for my first role in the tech industry.
            </p>
          </section>

          <section className="aboutText">
            <p className="aboutBody" id="aboutC">
              Over a decade of self-employment has ingrained in me a robust work
              ethic, adaptability and strong organisational skills. Regularly
              leading small teams has also honed my leadership abilities.
            </p>
          </section>
          <section className="aboutText">
            <p className="aboutBody" id="aboutD">
              <Link to="/projects">Check out my Projects</Link> or dowload my CV
              below.
            </p>
          </section>

          <button id="cvbutton" type="submit" onClick={handleClick}>
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
