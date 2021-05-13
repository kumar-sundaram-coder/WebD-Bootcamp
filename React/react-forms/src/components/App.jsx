import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  const changeHandler = () => {
    setName(event.target.value);
  };

  const clickHandler = (event) => {
    setHeading(name);
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>

      <form onSubmit={clickHandler}>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="What's your name?"
          value={name}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
