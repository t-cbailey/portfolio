import React from "react";
import { firebaseSignIn } from "../../Firebase";
import { getUserById } from "../../Utils/utils";
import AddProject from "./AddProject";
import "../styling/admin.css";

function Admin() {
  const [input, setInput] = React.useState({
    emailInput: "",
    passwordInput: "",
  });
  const [loggedInUser, setLoggedInUser] = React.useState("");
  const [error, setError] = React.useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "emailInput") {
      setInput((curr) => {
        curr.emailInput = value;
        return curr;
      });
    } else if (name === "passwordInput") {
      setInput((curr) => {
        curr.passwordInput = value;
        return curr;
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    firebaseSignIn(input.emailInput, input.passwordInput)
      .then((userId) => {
        if (userId) {
          getUserById(userId).then((result) => {
            const user = result;
            setLoggedInUser(user.email);
          });
        } else {
          setError("incorrect credentials");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loggedInUser === "") {
    return (
      <>
        <h2 id="adminTitle">Admin</h2>
        {error !== "" && <h3 id="error">{error}</h3>}
        <form id="loginForm" action="submit">
          <label className="inputLabel" htmlFor="emailInput">
            Email
          </label>
          <input
            className="inputField"
            onChange={handleInput}
            name="emailInput"
            id="emailInput"
            type="text"
          />
          <label className="inputLabel" htmlFor="passwordInput">
            Password
          </label>
          <input
            className="inputField"
            onChange={handleInput}
            name="passwordInput"
            id="passwordInput"
            type="text"
          />
        </form>
        <button id="loginButton" onClick={handleSubmit} type="submit">
          login
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Logged in!</p>
        <AddProject />
      </>
    );
  }
}
export default Admin;
