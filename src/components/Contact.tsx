import React from "react";
import { postMessage } from "../../Utils/utils";
import "../styling/contact.css";
import { useFormInput } from "../../Utils/customHooks";
import { ContactProps } from "../../types/CustomTypes";

function Contact({ setCurrentPage }: ContactProps) {
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const name = useFormInput("");
  const email = useFormInput("");
  const subject = useFormInput("");
  const messageBody = useFormInput("");

  React.useEffect(() => {
    setCurrentPage("Contact");
  });

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const msg = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      messageBody: messageBody.value,
    };

    if (msg.name.length < 1) {
      alert("Name Required.");
    } else if (msg.subject.length < 1) {
      alert("Subject Required.");
    } else if (msg.messageBody.length < 1) {
      alert("Message Required.");
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(msg.email) === false
    ) {
      alert("Invalid email address.");
    } else {
      setSending(true);
      postMessage(msg)
        .then(() => {
          setSending(false);
          setSuccess(true);
        })
        .catch(() => {
          setSending(false);
          setError(true);
        });
    }
  }

  if (sending) return <h2 className="sending">sending...</h2>;
  if (error)
    return <h3 className="error">Error- reload the page and try again.</h3>;
  if (success) return <h3 className="error">Message sent</h3>;
  else
    return (
      <>
        <form className="form">
          <input
            type="text"
            placeholder="Name"
            {...name}
            className="inputField"
          />
          <input
            className="inputField"
            type="text"
            placeholder="Email"
            {...email}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Subject"
            {...subject}
          />
          <textarea
            className="messageInput"
            required
            placeholder="Message"
            {...messageBody}
          />
          <button className="submitButton" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </>
    );
}

export default Contact;
