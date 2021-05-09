import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Notes from "../notes";

const createNotes = (noteItem) => {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
};

const App = () => {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {Notes.map(createNotes)}
      <Footer />
    </div>
  );
};

export default App;
