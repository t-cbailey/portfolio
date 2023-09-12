import React from "react";
import AddProject from "./AddProject";
import "../styling/admin.css";
import Login from "./Login";
import DeleteProject from "./DeleteProject";
import { getProjects } from "../../Utils/utils";

function Admin() {
  const [loggedInUser, setLoggedInUser] = React.useState("");
  const [error, setError] = React.useState("");
  const [selectedPage, setSelectedPage] = React.useState("");
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    getProjects().then((res) => {
      if (res.data && res.data.data) {
        const projArr = res.data.data;
        setProjects(projArr);
      } else {
        return [];
      }
    });
  }, []);

  const handlePageSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const { value } = target;
    setSelectedPage(value);
  };

  if (loggedInUser === "") {
    return (
      <Login
        setLoggedInUser={setLoggedInUser}
        setError={setError}
        error={error}
      />
    );
  } else {
    return (
      <>
        <p id="loginNotification">Logged in!</p>
        <nav className="adminNav">
          <ul id="adminNavItems">
            <li className="adminNavItem">
              <button value="Create Project" onClick={handlePageSelect}>
                Create Project
              </button>
            </li>
            <li className="adminNavItem">
              <button value="Delete Project" onClick={handlePageSelect}>
                Delete Project
              </button>
            </li>
          </ul>
        </nav>
        <div id="adminPageContainer">
          {selectedPage === "Create Project" && <AddProject />}
          {selectedPage === "Delete Project" && (
            <DeleteProject projects={projects} setProjects={setProjects} />
          )}
        </div>
      </>
    );
  }
}
export default Admin;
