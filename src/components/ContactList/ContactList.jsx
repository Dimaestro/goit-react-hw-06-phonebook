import Contact from 'components/Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.data)
  const name = useSelector(state => state.filter.name)

  const onFilteredContact = (name) => {
      return contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()))
  }
  
  const filteredContacts = onFilteredContact(name);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredContacts.map((contact) => {
        return (
          <li className={styles.item} key={contact.id}>
            <Contact contact={contact}/>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default ContactList;