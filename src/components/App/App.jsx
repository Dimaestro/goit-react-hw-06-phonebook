import styles from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const App = () => {
 

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={styles.title}>Contacts</h2>
        <Filter />
        <ContactList /> 
      </div>
  )
}

export default App;



// {
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   },[contacts])

//   const addContact = (contact) => {
//     const findContact = contacts.find(item => item.name === contact.name);

//     if (findContact) {
//       alert(`${contact.name} is alredy in contacts list`);
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       ...contact
//     }

//     setContacts(prevState => [newContact, ...prevState]);
//   }

//   const deleteContact = (id) => {
//     setContacts(prev => prev.filter(contact => id !== contact.id))
//   }

//   const handleChange = (event) => {
//     setFilter(event.target.value)
//   }

//   const filterContact = (name) => {
//     const normalizedName = name.toLowerCase();
//     if (contacts.length === 0) {
//       return;
//     }
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedName));
//   }

//   const filterContacts = filterContact(filter);

//   return (
//     <div className={styles.container}>
//         <h1 className={styles.title}>Phonebook</h1>
//         <ContactForm onSubmit={addContact}/>

//         <h2 className={styles.title}>Contacts</h2>
//         <Filter filter={filter} onChange={handleChange}/>
//         {filterContacts.length !== 0 ? <ContactList contacts={filterContacts} onDeleteContact={deleteContact}/> : <p>not found contacts</p>}
//       </div>
//   )
// }