import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispath = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements
    const name = formElements.name.value
    const number = formElements.number.value

    dispath(addContact(name, number))
    event.target.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.button} type="submit">Add contact</button>
      </form>
  )
}

export default ContactForm;