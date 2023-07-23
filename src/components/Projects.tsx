import "../styling/projects.css";
import React from "react";
import { getProjects } from "../../utils";
import { ProjectRes } from "../../types/CustomTypes";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProjects().then((res) => {
      res.data.data && setProjects(res.data.data);
      setLoading(false);
    });
  }, [projects]);

  return (
    <>
      <h2 id="projectsTitle">Select a project</h2>
      {loading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <ul className="projectScroller">
          {projects.map((project: ProjectRes) => {
            return (
              <li key={project.id}>
                <Link key={project.id} to={project.id}>
                  <img src={project.imgURL} alt="barkapedia demo" />
                  <h3 className="projectName"> {project.name}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Projects;
