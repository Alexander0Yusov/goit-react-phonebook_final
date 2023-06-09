import { useState } from 'react';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';

import css from './App.module.css';

export const App = () => {
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
    <div
      className={css.Wrap}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        // overflow: 'auto',
      }}
    >
      <Section>
        <h2 className={css.title}>Phonebook</h2>
        <Filter onModalOpen={toggleModal} />
        <Contacts toggleModal={toggleModal} fillForm={fillForm} />
      </Section>
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

// идеи тел. книги:
// расположение списка - строгое в ячейках таблицы
// кнопки удалить/вызвать появится при выделении строки
// строки разных оттенков
// при фокусе есть обводка, стрелками вверх-вниз смена строки, кнопки del/enter удаляют и начинают звонок
// перед началом звонка - модалка "вы уверены что хотите звонить?"
// при удалении - модалка "вы уверены что хотите удалить?"
// модалка с выбором эмоджи или загрузить фото
// проверка на существующий номер, для этого последние 9 цифр сравнить, для этого убрать пробелы и тире
// alert заменить на React-Toastify
// верстка адаптивная, на широком экране позади фон как в телеграмм, в два столбца
// применить Formik & Yup, react-icons, date-fns
// темизация(цветность) emotion 'dark/light'
// кастомный хук по типу hook useLocalStorage video_1 1:06
// при загрузке можно кнопки disable=true
// стилизация прокрутки

// ошибка в юзэффекте не дает норм деплой
