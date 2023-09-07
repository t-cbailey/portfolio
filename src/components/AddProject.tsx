import React from "react";
import "../styling/addProject.css";
import { postNewProject } from "../../Utils/utils";
import { useNavigate } from "react-router";

function AddProject() {
  const [input, setInput] = React.useState({
    name: "",
    imgURLmp4: "",
    imgURLwebm: "",
    description: "",
    githubFE: "",
    githubBE: "",
    livelink: "",
    stack: "",
  });
  const [response, setResponse] = React.useState("");

  const navigate = useNavigate();

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((curr) => {
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

  const handleSubmit = () => {
    return postNewProject(input).then((res) => {
      setResponse(res);
    });
  };

  const handleBack = () => {
    setResponse("");
  };

  if (response !== "") {
    return (
      <>
        <h2>{response}</h2>
        <button onClick={handleBack}>back</button>
      </>
    );
  } else
    return (
      <>
        <h2 id="addProjTitle">Add project</h2>
        <form className="form">
          <label className="inputLabel" htmlFor="name">
            name
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="name"
            type="text"
          />
          <label className="inputLabel" htmlFor="imgURLwebm">
            webm ImgUrl
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="imgURLwebm"
            type="text"
          />
          <label className="inputLabel" htmlFor="imgURLmp4">
            mp4 ImgUrl
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="imgURLmp4"
            type="text"
          />
          <label className="inputLabel" htmlFor="description">
            description
          </label>
          <textarea
            className="inputField"
            onChange={handleInputChange}
            name="description"
          />
          <label className="inputLabel" htmlFor="githubBE">
            GitHubFE link
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="githubBE"
            type="text"
          />
          <label className="inputLabel" htmlFor="githubFE">
            GitHub BE link
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="githubFE"
            type="text"
          />
          <label className="inputLabel" htmlFor="livelink">
            Live Link
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="livelink"
            type="text"
          />
          <label className="inputLabel" htmlFor="stack">
            stack
          </label>
          <input
            className="inputField"
            onChange={handleInputChange}
            name="stack"
            type="text"
          />
          <button className="submitButton" onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </>
    );
}
export default AddProject;
