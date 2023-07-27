import "../styling/projects.css";
import React from "react";
import { getProjects } from "../../utils";
import { ProjectRes } from "../../types/CustomTypes";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [loadErr, setLoadErr] = React.useState(false);

  React.useEffect(() => {
    getProjects().then((res) => {
      if (res.data && res.data.data) {
        setProjects(res.data.data);
        setLoading(false);
      } else {
        setLoadErr(true);
      }
    });
  }, []);

  if (loadErr) {
    return <h3 className="error">Error- reload the page and try again.</h3>;
  } else if (loading) {
    <h3 className="loading">Loading...</h3>;
  } else if (projects.length < 1) {
    return <h3 className="error">No projects</h3>;
  } else
    return (
      <>
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
      </>
    );
}

export default Projects;
