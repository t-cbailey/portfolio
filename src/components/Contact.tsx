import React from "react";
import { postMessage } from "../../utils";
import "../styling/contact.css";

function Contact() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [messageBody, setMessageBody] = React.useState<string>("");
  const [sending, setSending] = React.useState(false);

  function handleNameChange(e: any) {
    setName(e.target.value);
  }

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }
  function handleSubjectChange(e: any) {
    setSubject(e.target.value);
  }
  function handleMessageBodyChange(e: any) {
    setMessageBody(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const msg = {
      name: name,
      email: email,
      subject: subject,
      messageBody: messageBody,
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
          alert("message sent");
        })
        .then(() => {
          setSending(false);
          setEmail("");
          setMessageBody("");
          setName("");
          setSubject("");
        });
    }
  }

  if (sending) return <h2 className="sending">sending...</h2>;
  else
    return (
      <>
        <h2 id="contactTitle">Contact</h2>
        <form id="contactForm">
          <input
            type="text"
            placeholder="Your Name"
            onChange={handleNameChange}
            className="inputField"
          />
          <input
            className="inputField"
            type="text"
            placeholder="Your Email"
            onChange={handleEmailChange}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Subject"
            onChange={handleSubjectChange}
          />
          <textarea
            className="messageInput"
            required
            placeholder="Message"
            onChange={handleMessageBodyChange}
          />
          <button id="submitButton" type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </>
    );
}

export default Contact;