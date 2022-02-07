import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

  const contacts = [
    {
      id: "1",
      name: "Sanket",
      email: "sinhasanket3@gmail.com"
    },
    {
      id: "2",
      name: "Shubham",
      email: "shubham@gmail.com"
    },
  ];

  return (
    <div className="ui container">
      <Header/>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
