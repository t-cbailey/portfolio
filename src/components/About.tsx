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

  return (
    <>
      <div id="about">
        <div className="aboutText">
          <h2 id="aboutTitle">Hi, I'm Tim</h2>
          <p id="aboutBody">
            I'm a musician turned coder, intent on finding my place in the world
            of software development.
          </p>
        </div>
        {timer && <div className="icon-scroll"></div>}
        <div className="aboutText">
          <p id="aboutBody">
            Outside of coding, I love to mountain bike my local trails in the
            peak district, camp, hike, and box.
          </p>
        </div>
        <div className="aboutText">
          <p id="aboutBody">
            Performing and composing with a 9 piece funk band is my favourite
            creative outlet!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
