import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({filter, onChange}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name='filter'
          value={filter}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter;