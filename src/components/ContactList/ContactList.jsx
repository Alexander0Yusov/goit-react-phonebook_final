import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import {
  getContactsDBThunk,
  deleteContactDBThunk,
} from 'redux/contactsDB/thunks';
import css from './ContactList.module.css';
import ListItem from 'components/ListItem/ListItem';
import { contactsSelector, filterSelector } from 'redux/stateSelectors';

const ContactList = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const { contacts, error, isLoading } = useSelector(contactsSelector);
  const { filter } = useSelector(filterSelector);

  useEffect(() => {
    dispatch(getContactsDBThunk());
  }, [dispatch]);

  const filterByName = () => {
    const lowName = filter?.toLowerCase();
    return contacts
      .filter(item => item.name?.toLowerCase().includes(lowName))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const deleteHandler = id => {
    dispatch(deleteContactDBThunk(id));
  };

  return (
    <div className={css.contactList}>
      <ul className={css.contactListUl}>
        {filterByName().map(({ id, name, number, url }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            number={number}
            url={url}
            deleteContact={deleteHandler}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
      {error && <h4>{error}</h4>}
      {isLoading && (
        <p>
          {
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          }
        </p>
      )}
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
