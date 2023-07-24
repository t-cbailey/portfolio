import React from "react";
import "../styling/about.css";

function About() {
  const [timer, setTimer] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState("scrollDown");

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--scroll-animation",
      scrollDirection === "scrollDown"
        ? "scrollDownAnimation"
        : "scrollUpAnimation"
    );
  }, [scrollDirection]);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 3500);
  }, [timer]);

  React.useEffect(() => {
    const handleScroll = () => {
      setTimer(false);
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
    console.log("in func");
    window.open(
      "https://storage.cloud.google.com/personal-portfolio-9fb89.appspot.com/Tim%20Bailey%20CV.pdf?authuser=1"
    );
  }

  return (
    <>
      <div id="about">
        <div className="aboutText">
          <h2 id="aboutTitle">Hello, I'm Tim</h2>
          <p id="aboutBody">
            I'm a musician and sound engineer turned software developer.
          </p>
        </div>
        {timer && <div className="icon-scroll"></div>}
        <div className="aboutText">
          <p id="aboutBody">
            Having recently completed a software development bootcamp at
            <span style={{ color: "red" }}> Northcoders</span> I am looking for
            my first role in the tech industry.
          </p>
        </div>

        <div className="aboutText">
          <p id="aboutBody">
            Over a decade of self-employment has ingrained in me a robust work
            ethic, adaptability and strong organisational skills. Regularly
            leading small teams has also honed my leadership abilities.
          </p>
        </div>

        <button id="cvbutton" type="submit" onClick={handleClick}>
          Download my CV
        </button>
      </div>
    </>
  );
}

export default About;
