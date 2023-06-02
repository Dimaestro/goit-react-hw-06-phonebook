import React from 'react'
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    console.log(contact.id);
    dispatch(deleteContact(contact.id));
  }
  return (
    <div>
      <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button className={styles.button} type="button" onClick={handleDelete}>
              delete
            </button>
    </div>
  )
}

export default Contact;
