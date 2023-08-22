import "../styling/header.css";
import linkedInLogo from "../assets/linkedin-logo.png";
import gitHubLogo from "../assets/github-mark.png";
function Header() {
  return (
    <>
      <header>
        Tim Bailey Software Developer
        <a href="https://www.linkedin.com/in/timbaileydev/" target="blank">
          <img
            src={linkedInLogo}
            alt="linkedInLogo"
            className="socialsIcon"
            id="linkedIn"
          />
        </a>
        <a href="https://github.com/t-cbailey" target="blank">
          <img
            src={gitHubLogo}
            alt="gitHubLogo"
            className="socialsIcon"
            id="gitHub"
          />
        </a>
      </header>
    </>
  );
}

export default Header;
