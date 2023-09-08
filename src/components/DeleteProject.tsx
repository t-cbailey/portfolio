import "../styling/admin.css";
import React from "react";
import { deleteProjectByID } from "../../Utils/utils";
import { DeleteProjectProps, ProjectRes } from "../../types/CustomTypes";

function DeleteProject({ projects }: DeleteProjectProps) {
  const handleDeleteSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const { value } = target;

    deleteProjectByID(value).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <h2 className="adminTitle">delete project</h2>
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
