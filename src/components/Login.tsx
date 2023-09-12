import { firebaseSignIn } from "../../Firebase";
import { getUserById } from "../../Utils/utils";
import React from "react";
import { LoginProps } from "../../types/CustomTypes";

function Login({ setLoggedInUser, setError, error }: LoginProps) {
  const [input, setInput] = React.useState({
    emailInput: "",
    passwordInput: "",
  });

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
  return (
    <>
      <h2 id="adminTitle">Admin</h2>
      {error !== "" && <h3 id="error">{error}</h3>}
      <form className="form" action="submit">
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
        <button className="submitButton" onClick={handleSubmit} type="submit">
          login
        </button>
      </form>
    </>
  );
}
export default Login;
