import React from "react";
import { ContactItem, DeleteButton } from "../contacts/Contacts.styled";
import PropTypes from "prop-types";

class ContactList extends React.Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <div>
        <ul style={{ paddingLeft: "30px" }}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id}>
              <span style={{ marginRight: "10px" }}>
                {contact.name}: {contact.number}
              </span>
              <DeleteButton
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </DeleteButton>
            </ContactItem>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export { ContactList };


 





