import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/authService/thunks';
import { TiHome } from 'react-icons/ti';
import { FaList } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
// import { FiLogOut } from 'react-icons/fi';
import { GiExitDoor } from 'react-icons/gi';
import { HiUserAdd } from 'react-icons/hi';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.authCombine.user);

  useEffect(() => {
    const home = document.querySelector('[data-navigate="home"]');
    const contacts = document.querySelector('[data-navigate="contacts"]');
    const register = document.querySelector('[data-navigate="register"]');
    const login = document.querySelector('[data-navigate="login"]');
    const currentPage = location.pathname.split('/')[1];

    const resetColor = () => {
      // eslint-disable-next-line
      [home, contacts, register, login].map(item => {
        if (item && item.classList.contains(`${css.isActive}`)) {
          item.classList.remove(`${css.isActive}`);
        }
      });
    };

    // console.log(currentPage || 'home');
    // console.log(localStorage.getItem('phonebook_auth'));
    // localStorage.removeItem('phonebook_auth');

    switch (currentPage) {
      case '':
        resetColor();
        home?.classList.add(`${css.isActive}`);
        break;
      case 'contacts':
        resetColor();
        contacts?.classList.add(`${css.isActive}`);
        break;
      case 'register':
        resetColor();
        register?.classList.add(`${css.isActive}`);
        break;
      case 'login':
        resetColor();
        login?.classList.add(`${css.isActive}`);
        break;
      default:
    }
  }, [location.pathname]);

  return (
    <div className={css.header}>
      <div className={css.logo}>Logo</div>
      <ul className={css.navbar}>
        <li className={css.li} data-navigate="home">
          <Link to="/" className={css.link}>
            <TiHome className={css.iconHome} />
          </Link>
        </li>
        {isLoggedIn && (
          <li className={css.li} data-navigate="contacts">
            <Link to="/contacts" className={css.link}>
              <FaList className={css.iconList} />
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className={css.li} data-navigate="register">
            <Link to="/register" className={css.link}>
              <HiUserAdd className={css.iconAddUser} />
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li className={css.li} data-navigate="login">
            <Link to="/login" className={css.link}>
              <FiLogIn className={css.iconLogin} />
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li className={css.li}>
            <Link
              to="/"
              className={css.link}
              onClick={() => dispatch(logoutThunk())}
            >
              {/* <FiLogOut className={css.iconLogout} /> */}
              <GiExitDoor className={css.iconLogout} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
