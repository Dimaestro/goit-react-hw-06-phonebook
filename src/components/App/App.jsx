import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => (
    JSON.parse(localStorage.getItem('contacts')) ?? ''
  ));

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts])

  const addContact = (contact) => {
    const findContact = contacts.find(item => item.name === contact.name);

    if (findContact) {
      alert(`${contact.name} is alredy in contacts list`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact
    }

    setContacts(prevState => [newContact, ...prevState]);
  }

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => id !== contact.id))
  }

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  const filterContact = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedName));
  }

  const filterContacts = filterContact(filter);

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact}/>

        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={filter} onChange={handleChange}/>
        <ContactList contacts={filterContacts} onDeleteContact={deleteContact}/>
      </div>
  )
}

export default App;