import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

const createCard = (contact) => {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
};

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://media-exp1.licdn.com/dms/image/C4E03AQGIaywDwBCRzg/profile-displayphoto-shrink_200_200/0/1596013827958?e=1625702400&v=beta&t=icSByME1VP3NYtp5gym4b0m_INpR0URvFB6swWtjddw" />

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
