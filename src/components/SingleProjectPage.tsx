import { useEffect, useState } from "react";
import { getSingleProject } from "../../utils";
import { useParams } from "react-router-dom";
import { Project } from "../../types/CustomTypes";

function SingleProjectPage() {
  const { project_id } = useParams();
  const [singleProject, setSingleProject] = useState<Project>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleProject(project_id)
      .then((project) => {
        setSingleProject(project.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching single park or reviews", error);
      });
  }, [project_id]);

  if (isLoading) {
    return <h3 className="loading">Loading...</h3>;
  }

  if (!singleProject) {
    return <p>No data found</p>;
  } else
    return (
      <>
        <h3>{singleProject.name}</h3>
        <p>{singleProject.description}</p>
        <img src={singleProject.imgURL} alt={singleProject.name} />
      </>
    );
}

export default SingleProjectPage;
