import css from './Form.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  postContactThunk,
  patchContactThunk,
} from 'redux/contactsService/thunks';
import { contactsSelector, filterSelector } from 'redux/stateSelectors';
import { FAVORITE } from 'components/ListItem/ListItem';

const Form = ({ toggleModal }) => {
  const { contacts } = useSelector(contactsSelector);
  const {
    selectedUser: {
      id,
      name: nameIni,
      number: numberIni,
      url: urlIni,
      isFavorite,
      action: actionModal,
    },
  } = useSelector(filterSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState(nameIni);
  const [number, setNumber] = useState(numberIni);
  const [url, setUrl] = useState(urlIni);

  const isIncludingName = (name, array) => {
    const lowName = name.toLowerCase();
    return array.find(({ name }) => name.toLowerCase() === lowName);
  };

  const addUser = newItem => {
    const decisionForAdd = isIncludingName(newItem.name, contacts);
    if (decisionForAdd) {
      alert(`${decisionForAdd.name} is already in contacts !`);
      return;
    }
    dispatch(postContactThunk(newItem));
  };

  const editUser = newItem => {
    dispatch(patchContactThunk(newItem));
  };

  const handlerSubmit = e => {
    e.preventDefault();
    actionModal === 'Add' &&
      addUser({ name, number: `${number}|-|${url}|-|${FAVORITE.NotFavorite}` });
    actionModal === 'Edit' &&
      editUser({ id, name, number: `${number}|-|${url}|-|${isFavorite}` });

    toggleModal();
  };

  const handlerChangeName = e => {
    setName(e.currentTarget.value);
  };

  const handlerChangeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handlerChangeFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUrl(reader.result);
    };
  };

  return (
    <form onSubmit={handlerSubmit} className={css.form} autoComplete="off">
      <span className={css.iconSpan}>
        {url ? (
          <img className={css.photo} src={url} alt="User portrait"></img>
        ) : (
          <FiUser />
        )}
      </span>
      <label className={css.formLabel}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handlerChangeName}
          className={css.input}
          placeholder="Name"
        />
      </label>
      <label className={css.formLabel}>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handlerChangeNumber}
          className={css.input}
          placeholder="Number"
        />
      </label>
      <label className={css.imageLabel}>
        <MdOutlineAddAPhoto className={css.icon} />
        <input
          type="file"
          name="image"
          accept="image/*,.png,.jpg,.gif,.web"
          className={css.imageInput}
          onChange={handlerChangeFile}
        />
        <span className={css.imageWarningSpan}>max 70KB</span>
      </label>

      <button className={css.button} type="submit">
        {actionModal}
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
