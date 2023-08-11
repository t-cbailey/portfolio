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
            return Promise.all([
              getFile(proj.imgURLwebm),
              getFile(proj.imgURLmp4),
            ]).then((urls) => {
              console.log(urls);
              if (urls[0]) {
                proj.imgURLwebm = urls[0];
              }
              if (urls[1]) {
                proj.imgURLmp4 = urls[1];
              }
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
                  <video autoPlay loop muted playsInline key={project.id}>
                    <source src={project.imgURLwebm} type="video/webm" />
                    <source src={project.imgURLmp4} type="video/mp4" />
                  </video>
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
