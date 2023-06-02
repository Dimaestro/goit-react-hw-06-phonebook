import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterName } from 'redux/filterSlice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const hanleChange = (event) => {
    const name = event.target.value;
    dispatch(setFilterName(name));
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name='filter'
          onChange={hanleChange}
        />
      </label>
    </div>
  )
}

export default Filter;