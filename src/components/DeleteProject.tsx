import "../styling/admin.css";
import React from "react";
import { deleteProjectByID } from "../../Utils/utils";
import { DeleteProjectProps, ProjectRes } from "../../types/CustomTypes";

function DeleteProject({ projects, setProjects }: DeleteProjectProps) {
  const [successMsg, setSuccessMsg] = React.useState("");

  const handleDeleteSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const { value } = target;
    const result = confirm(
      `Are you sure you want to delete ${value}? This can't be undone`
    );
    if (result === true) {
      deleteProject(value);
    } else {
      null;
    }
  };

  const deleteProject = (value: string) => {
    deleteProjectByID(value).then((res) => {
      setSuccessMsg(res);
      projects.forEach((project, i) => {
        if (project.id === value) {
          projects.splice(i, 1);
        }
      });
    });
  };

  if (successMsg) {
    return <h3>{successMsg}</h3>;
  } else
    return (
      <>
        <h2 className="adminTitle">delete project</h2>
        {projects.length < 1 && <h3>No Projects</h3>}
        <ul>
          {projects.map((project: ProjectRes) => {
            return (
              <li key={project.id}>
                <button value={project.id} onClick={handleDeleteSelect}>
                  {project.name} {project.id}
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
}

export default DeleteProject;
