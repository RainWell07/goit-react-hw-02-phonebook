import React from "react";
import PropTypes from "prop-types";
import css from "../Modules/phoneBook.module.css"


function ContactList({contacts, deleteContact}) {
    return (
    <ul className={css.contactsList} >
      {contacts.map((contact) => (
        <li className={`${css.basicFont} ${css.contactInfo}`} key={contact.id}>
        {contact.name}: {contact.number}
        <button className={`${css.basicFont} ${css.buttonContacts}`} onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
    );
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

export default ContactList;