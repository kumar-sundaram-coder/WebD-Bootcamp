import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const createItem = (item) => {
  return (
    <Entry
      key={item.id}
      // id={item.id}
      emoji={item.emoji}
      name={item.name}
      meaning={item.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>


      {/* <Entry /> */}

      <dl className="dictionary">
      {emojipedia.map(createItem)}
      </dl>
    </div>
  );
}

export default App;
