import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
  });

  const changeHandler = (event) => {
    const { value, name } = event.target;

    setfullName((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
        };
      }
    });
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form onSubmit={submitClickHandler}>
        <input
          onChange={changeHandler}
          type="text"
          name="fname"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={changeHandler}
          type="text"
          name="lname"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
