import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from 'redux/filter/filterSlice';

import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Modal from '../../components/Modal/Modal';
import css from './Contacts.module.css';

export const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(prev => !prev);
    dispatch(setSelectedUser({ name: '', number: '', url: '', action: 'Add' }));
  };

  return (
    <div className={css.contacts}>
      <Filter onModalOpen={toggleModal} />

      <ContactList toggleModal={toggleModal} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <Form toggleModal={toggleModal}></Form>
        </Modal>
      )}
    </div>
  );
};

export default Contacts;
