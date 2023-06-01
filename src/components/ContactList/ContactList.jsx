import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => {

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {contacts.map(({id, name, number}) => {
        return (
          <li className={styles.item} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button className={styles.button} type="button" onClick={() => onDeleteContact(id)}>
              delete
            </button>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;