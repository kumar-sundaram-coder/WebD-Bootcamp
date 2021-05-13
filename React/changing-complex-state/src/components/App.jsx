import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  // const [fullName, setfullName]= useState("");

  const fnameChangeHandler = () => {
    setFname(event.target.value);
  };
  const lnameChangeHandler = () => {
    setLname(event.target.value);
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>Hello {fname + " " + lname}</h1>
      <form onSubmit={submitClickHandler}>
        <input
          onChange={fnameChangeHandler}
          type="text"
          name="fName"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={lnameChangeHandler}
          type="text"
          name="lName"
          placeholder="Last Name"
          value={lname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
