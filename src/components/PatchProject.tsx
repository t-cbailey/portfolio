import { editProjectByID } from "../../Utils/utils";
import {
  PatchProjectProps,
  ProjectRes,
  Project,
} from "../../types/CustomTypes";
import React from "react";

function PatchProject({ projects }: PatchProjectProps) {
  const [selectedProjectID, setSelectedProjectID] = React.useState("");
  const [currentProject, setCurrentProject] = React.useState<Project>({
    name: "",
    imgURLmp4: "",
    imgURLwebm: "",
    description: "",
    githubFE: "",
    githubBE: "",
    livelink: "",
    stack: "",
  });
  const [success, setSuccess] = React.useState<string>("");

  const handleEditSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { value } = e.target as HTMLButtonElement;
    const pid = value;
    setSelectedProjectID(pid);
  };

  React.useEffect(() => {
    const target = projects.find((project) => {
      return project.id === selectedProjectID;
    });

    if (target) setCurrentProject(target);
  }, [selectedProjectID]);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setCurrentProject((curr) => {
      if (name === "name") {
        curr.name = value;
      }
      if (name === "imgURLwebm") {
        curr.imgURLwebm = value;
      }
      if (name === "imgURLmp4") {
        curr.imgURLmp4 = value;
      }
      if (name === "description") {
        curr.description = value;
      }
      if (name === "githubFE") {
        curr.githubFE = value;
      }
      if (name === "githubBE") {
        curr.githubBE = value;
      }
      if (name === "livelink") {
        curr.livelink = value;
      }
      if (name === "stack") {
        curr.stack = value;
      }
      return curr;
    });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    editProjectByID(selectedProjectID, currentProject).then((res) => {
      setSuccess(res);
    });
  };

  if (selectedProjectID === "") {
    return (
      <>
        <h2>Edit Project</h2>
        <ul>
          {projects.map((project: ProjectRes) => {
            return (
              <li key={project.id}>
                <button value={project.id} onClick={handleEditSelect}>
                  {project.name} {project.id}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else if (success) {
    return <h3>{success}</h3>;
  } else {
    return (
      <>
        <h3>{`Edit ${selectedProjectID}`}</h3>
        <form className="form">
          <label className="inputLabel" htmlFor="name">
            name
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="name"
            type="text"
            defaultValue={currentProject.name}
          />
          <label className="inputLabel" htmlFor="imgURLwebm">
            webm ImgUrl
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="imgURLwebm"
            type="text"
            defaultValue={currentProject.imgURLwebm}
          />
          <label className="inputLabel" htmlFor="imgURLmp4">
            mp4 ImgUrl
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="imgURLmp4"
            type="text"
            defaultValue={currentProject.imgURLmp4}
          />
          <label className="inputLabel" htmlFor="description">
            description
          </label>
          <textarea
            className="inputField"
            onChange={handleInputChange}
            name="description"
            defaultValue={currentProject.description}
          />
          <label className="inputLabel" htmlFor="githubBE">
            GitHubFE link
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="githubBE"
            type="text"
            defaultValue={currentProject.githubBE}
          />
          <label className="inputLabel" htmlFor="githubFE">
            GitHub BE link
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="githubFE"
            type="text"
            defaultValue={currentProject.githubFE}
          />
          <label className="inputLabel" htmlFor="livelink">
            Live Link
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="livelink"
            type="text"
            defaultValue={currentProject.livelink}
          />
          <label className="inputLabel" htmlFor="stack">
            stack
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="stack"
            type="text"
            defaultValue={currentProject.stack}
          />
          <button className="submitButton" onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default PatchProject;
