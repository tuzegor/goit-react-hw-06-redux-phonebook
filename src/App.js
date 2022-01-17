import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);

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
