import React, { useEffect, useState } from "react";
import { getSingleProject, getFile } from "../../Utils/utils";
import { useParams } from "react-router-dom";
import { Project, SingleProjectPageProps } from "../../types/CustomTypes";
import "../styling/singleProjectPage.css";

function SingleProjectPage({ setCurrentPage }: SingleProjectPageProps) {
  const { project_id } = useParams();
  const [singleProject, setSingleProject] = useState<Project>();
  const [isLoading, setIsLoading] = useState(true);
  const [stack, setStack] = React.useState<string[]>([]);

  React.useEffect(() => {
    setCurrentPage("Projects");
  });

  useEffect(() => {
    getSingleProject(project_id)
      .then((proj) => {
        return Promise.all([
          getFile(proj.data.imgURLmp4),
          getFile(proj.data.imgURLwebm),
        ]).then((url) => {
          if (url[0]) proj.data.imgURLmp4 = url[0];
          if (url[1]) proj.data.imgURLwebm = url[1];
          return proj;
        });
      })
      .then((proj) => {
        setSingleProject(proj.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching single park or reviews", error);
      });
  }, []);

  useEffect(() => {
    if (singleProject) {
      const stackArr = singleProject.stack.split(",");
      setStack(stackArr);
    }
  }, [singleProject]);

  if (isLoading) {
    return <h3 className="loading">Loading...</h3>;
  }

  if (!singleProject) {
    return <p>No data found</p>;
  } else
    return (
      <>
        <h2 id="SPtitle">{singleProject.name}</h2>
        <p id="SPdescription">{singleProject.description}</p>
        <div id="SPcontainer">
          <video autoPlay loop muted playsInline>
            <source src={singleProject.imgURLwebm} type="video/webm" />
            <source src={singleProject.imgURLmp4} type="video/mp4" />
          </video>

          <ul id="SPlist">
            <h3 id="SPlisttitle">Links</h3>
            <li className="SPlink">
              <a href={singleProject.githubFE} target="_blank">
                GitHub Frontend
              </a>
            </li>
            <li className="SPlink">
              <a href={singleProject.githubBE} target="_blank">
                GitHub Backend
              </a>
            </li>
            <li className="SPlink">
              <a href={singleProject.livelink} target="_blank">
                Live Site
              </a>
            </li>
          </ul>
        </div>

        <ul id="SPstack">
          {stack.map((item) => {
            return (
              <li key={item} className="SPstackitem">
                {item}
              </li>
            );
          })}
        </ul>
      </>
    );
}

export default SingleProjectPage;
