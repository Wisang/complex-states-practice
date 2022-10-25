import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleInput(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      console.log(prevValue);
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleInput} name="fName" placeholder="First Name" value={contact.fName} />
        <input onChange={handleInput} name="lName" placeholder="Last Name" value={contact.lName} />
        <input onChange={handleInput} name="email" placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
