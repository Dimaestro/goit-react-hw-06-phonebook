import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const contacts = {
      name,
      number
    }
    onSubmit(contacts);
    reset();
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
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
            value={number}
            onChange={handleChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={styles.button} type="submit">Add contact</button>
      </form>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;