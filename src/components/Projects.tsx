import "../styling/projects.css";
import React from "react";
import { getFile, getProjects } from "../../Utils/utils";
import { ProjectRes } from "../../types/CustomTypes";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = React.useState<ProjectRes[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [loadErr, setLoadErr] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getProjects()
      .then((res) => {
        if (res.data && res.data.data) {
          const projArr = res.data.data;
          return projArr;
        } else {
          setLoadErr(true);
          return [];
        }
      })
      .then((projArr) => {
        return Promise.all(
          projArr.map((proj: ProjectRes) => {
            return getFile(proj.imgURL).then((url) => {
              if (url) proj.imgURL = url;
              return proj;
            });
          })
        );
      })
      .then((projArr) => {
        setProjects(projArr);
        setLoading(false);
      });
  }, []);

  if (loadErr) {
    return <h3 className="error">Error- reload the page and try again.</h3>;
  }
  if (loading) {
    return <h3 className="loading">Loading...</h3>;
  } else if (projects.length < 1) {
    return <h3 className="error">No projects</h3>;
  } else
    return (
      <>
        <h3 id="projectTitle">select a project...</h3>
        <ul className="projectScroller">
          {projects.map((project: ProjectRes) => {
            return (
              <li key={project.id}>
                <Link key={project.id} to={project.id}>
                  <img src={project.imgURL} alt={project.name} />
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
