import { useState } from 'react';

import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Modal from '../../components/Modal/Modal';

import css from './Contacts.module.css';

export const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const [userIdModal, setUserIdModal] = useState('');
  const [userNameModal, setUserNameModal] = useState('');
  const [userNumberModal, setUserNumberModal] = useState('');
  const [userUrlModal, setUserUrlModal] = useState('');
  const [actionModal, setActionModal] = useState('Add');

  const fillForm = (id, name, number, url) => {
    setUserIdModal(id);
    setUserNameModal(name);
    setUserNumberModal(number);
    setUserUrlModal(url);
    setActionModal('Edit');
  };

  const resetForm = () => {
    setUserNameModal('');
    setUserNumberModal('');
    setUserUrlModal('');
    setActionModal('Add');
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
    resetForm();
  };

  return (
    <div className={css.contacts}>
      <Filter onModalOpen={toggleModal} />

      <ContactList toggleModal={toggleModal} fillForm={fillForm} />

      {showModal && (
        <Modal onClose={toggleModal}>
          <Form
            toggleModal={toggleModal}
            id={userIdModal}
            nameIni={userNameModal}
            numberIni={userNumberModal}
            urlIni={userUrlModal}
            actionModal={actionModal}
          ></Form>
        </Modal>
      )}
    </div>
  );
};

export default Contacts;
