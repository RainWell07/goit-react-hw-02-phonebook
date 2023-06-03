import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { nanoid } from "nanoid";
import css from "../Modules/phoneBook.module.css";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (newContact) => {
    const { contacts } = this.state;
    if (contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    const id = nanoid();
    const contactWithId = { ...newContact, id };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactWithId],
    }));
  };

    deleteContact = (id) => {
      this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      }));
    };

    handleFilterChange = (value) => {
      this.setState({filter: value});
    };

    render() {
      const { contacts, filter} = this.state;
      const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
      );

      return (
        <div className={`${css.container} ${css.basicFont}`}>
        <h1 className={`${css.basicFont} ${css.logo}`}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={`${css.basicFont} ${css.logo}`}>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
      );
}
}

export default App;
