import css from './Contacts.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { filterSelector } from 'redux/stateSelectors';

import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Modal from '../../components/Modal/Modal';
import FormAddContact from 'components/FormAddContact/FormAddContact';
import FormEditContact from 'components/FormEditContact/FormEditContact';

export const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const { selectedUser } = useSelector(filterSelector);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className={css.contacts}>
      <Filter onModalOpen={toggleModal} />
      <ContactList toggleModal={toggleModal} />

      {showModal && (
        <Modal onClose={toggleModal}>
          {selectedUser?.action === 'Edit' ? (
            <FormEditContact toggleModal={toggleModal} />
          ) : (
            <FormAddContact toggleModal={toggleModal} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Contacts;
