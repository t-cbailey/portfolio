import "../styling/projects.css";
import barkapedia from "../assets/barkapedia.gif";
import ncGames from "../assets/ncgames.gif";

function Projects() {
  return (
    <>
      <h2 id="projectsTitle">Select a project</h2>
      <ul className="projectScroller">
        <li>
          <img src={barkapedia} alt="barkapedia demo" />
          <h3 className="projectName"> Barkapedia</h3>
        </li>
        <li>
          <img src={ncGames} alt="nc games demo" />
          <h3 className="projectName"> NC Games</h3>
        </li>
      </ul>
    </>
  );
}

export default Projects;
