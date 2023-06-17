import React, { Component } from "react";
import { ContactList } from "../components/contacts/Contacts";
import { GlobalStyle } from "./GlobalStyle.styled";
import NewContactForm from "./NewContactForm/NewContactForm";
import { v4 as uuidv4 } from "uuid";
import Filter from "../components/filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem("contacts");

    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  addContact = (contact) => {
    const { contacts } = this.state;

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

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      const updatedContacts = prevState.contacts.filter(
        (contact) => contact.id !== id
      );

      return {
        contacts: updatedContacts,
      };
    });
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div style={{ padding: "20px" }}>
        <GlobalStyle />
        <div>
          <h1 style={{ marginBottom: "20px" }}>Phonebook</h1>
          <NewContactForm addContact={this.addContact} />

          <h2 style={{ marginBottom: "10px" }}>Contacts</h2>
          <Filter setFilter={this.handleFilterChange} />

          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;





