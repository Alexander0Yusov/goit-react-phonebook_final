import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { getUserThunk } from 'redux/authService/thunks';

import SharedLayout from 'pages/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import { authSelector } from 'redux/stateSelectors';
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelector);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

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
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn && <Route path="/contacts" element={<Contacts />} />}
          <Route path="*" element={<h4>Page not found</h4>} />
        </Route>
      </Routes>
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
// реакт квери на мокапи
// заюзать Chakra UI або Material UI - по дизайну.

// список перевести на хероку - новые санки по контактам. !!
