import React from "react";
import PropTypes from "prop-types";
import { ContactForm } from "../NewContactForm/NewContactForm.styled";

function NewContactForm({ addContact }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = {
      name: name,
      number: number,
    };

    addContact(contact);

    form.reset();
  };

  return (
    <>
      <ContactForm onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </ContactForm>
    </>
  );
}

NewContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default NewContactForm;





