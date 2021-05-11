import React, { useState } from "react";

function App() {
  
  const now = new Date().toLocaleTimeString();

  const [time, getTime] = useState(now);

  const getTimeFun = () => {
    const newTime = new Date().toLocaleTimeString();
    getTime(newTime);
  };
  setInterval(getTimeFun, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTimeFun}>Get Time</button>
    </div>
  );
}

export default App;
