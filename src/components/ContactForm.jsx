import React, {useState} from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import css from "../Modules/phoneBook.module.css"

function ContactForm({addContact}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (name.trim() === '' || number.trim() === '') {
        return;
        }
        const newContact = {
        id: nanoid(),
        name: name,
        number: number,
        };
        addContact(newContact);
        setName('');
        setNumber('');
    };

    return (
<form className={`${css.basicFont} ${css.form}`} onSubmit={handleSubmit}>
      <label className={`${css.basicFont} ${css.label}`}>
        Name:
        <input className={`${css.basicFont} ${css.input}`}
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
      </label>
      <label className={`${css.basicFont} ${css.label}`}>
        Number:
        <input className={`${css.basicFont} ${css.input}`}
        type="tel"
        name="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
      </label>
      <button className={`${css.basicFont} ${css.button}`} type="submit">Add Contact</button>
</form>
);
}

ContactForm.propTypes = {
 addContact: PropTypes.func.isRequired,
};


export default ContactForm;