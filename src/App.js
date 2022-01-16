import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import { setState } from './store/contacts/items-slice';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  //---- проветка стейта
  const states = useSelector(state => state);
  console.log(states);
  // ---

  useEffect(() => {
    const contactsFromStorage = JSON.parse(
      localStorage.getItem('contactsStorage'),
    );
    if (contactsFromStorage !== null) {
      dispatch(setState(contactsFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsStorage', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
