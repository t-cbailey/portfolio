import React from "react";
import { firebaseSignIn } from "../../Firebase";
import { getUserById } from "../../Utils/utils";
import AddProject from "./AddProject";

function Admin() {
  const [input, setInput] = React.useState({
    emailInput: "",
    passwordInput: "",
  });
  const [loggedInUser, setLoggedInUser] = React.useState("");

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
          console.log("Unfortunately, we do not recognize those details ☹️");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loggedInUser === "") {
    return (
      <>
        <h1>admin</h1>
        <form action="submit">
          <label htmlFor="emailInput">Email</label>
          <input
            onChange={handleInput}
            name="emailInput"
            id="emailInput"
            type="text"
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            onChange={handleInput}
            name="passwordInput"
            id="passwordInput"
            type="text"
          />
        </form>
        <button onClick={handleSubmit} type="submit">
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
