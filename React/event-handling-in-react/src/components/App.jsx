import React, { useState } from "react";

function App() {
  const [Heading, setHeading] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  const clickHandler = () => {
    setHeading("Submitted");
  };

  const mouseOverHandler = () => {
    setMouseOver(true);
  };

  const mouseOutHandler = () => {
    setMouseOver(false);
  };

  return (
    <div className="container">
      <h1>{Heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onClick={clickHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
