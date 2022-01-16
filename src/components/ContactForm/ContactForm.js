import { useState } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/contacts/items-slice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);

  const formSubmit = event => {
    event.preventDefault();
    const contact = { id: nanoid(), name, number };

    if (
      contacts.find(
        сontactItem =>
          сontactItem.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('Such contact exists');
    } else {
      dispatch(addContact(contact));
    }

    setName('');
    setNumber('');
  };

  return (
    <form className={style.contactForm} onSubmit={formSubmit}>
      <div className={style.inputWrapper}>
        <label className={style.nameTitle}>
          <span>Name</span>
          <input
            className={style.nameField}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={event => setName(event.target.value)}
          />
        </label>
      </div>
      <div className={style.inputWrapper}>
        <label className={style.numberTitle}>
          <span>Number</span>
          <input
            className={style.numberField}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={event => setNumber(event.target.value)}
          />
        </label>
      </div>
      <button className={style.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
