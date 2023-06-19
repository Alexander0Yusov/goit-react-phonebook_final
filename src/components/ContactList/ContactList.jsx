import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';

import ListItem from 'components/ListItem/ListItem';
import { contactsSelector, filterSelector } from 'redux/stateSelectors';
import { getContactsThunk } from 'redux/contactsService/thunks';

const ContactList = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useSelector(contactsSelector);
  const { filter } = useSelector(filterSelector);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterByName = () => {
    const lowName = filter?.toLowerCase();
    return contacts
      ?.filter(item => item.name?.toLowerCase().includes(lowName))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  return (
    <div className={css.contactList}>
      <ul className={css.contactListUl}>
        {filterByName()?.map(({ id, name, number }) => {
          const [number_, url_, isFavorite_] = number.split('|-|');
          return (
            <ListItem
              key={id}
              id={id}
              name={name}
              number={number_}
              url={url_}
              isFavorite={isFavorite_}
              toggleModal={toggleModal}
            />
          );
        })}
      </ul>

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
