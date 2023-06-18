import React, { useState, useEffect } from "react";
import { ContactList } from "../components/contacts/Contacts";
import { GlobalStyle } from "./GlobalStyle.styled";
import NewContactForm from "./NewContactForm/NewContactForm";
import { v4 as uuidv4 } from "uuid";
import Filter from "../components/filter/Filter";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const isContactExists = contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${contact.name} is already in contacts`);
    } else {
      const newContact = {
        id: uuidv4(),
        name: contact.name,
        number: contact.number,
      };

      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <GlobalStyle />
      <div>
        <h1 style={{ marginBottom: "20px" }}>Phonebook</h1>
        <NewContactForm addContact={addContact} />

        <h2 style={{ marginBottom: "10px" }}>Contacts</h2>
        <Filter setFilter={handleFilterChange} />

        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default App;






