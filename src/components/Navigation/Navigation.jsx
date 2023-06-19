import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/authService/thunks';
import { TiHome } from 'react-icons/ti';
import { FaList } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { GiExitDoor } from 'react-icons/gi';
import { HiUserAdd } from 'react-icons/hi';
import { authSelector } from 'redux/stateSelectors';

const Navigation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);

  function setLinkStyle({ isActive }) {
    return isActive ? css.linkActive : css.link;
  }

  return (
    <div className={css.header}>
      <ul className={css.navbar}>
        <li className={css.li} data-navigate="home">
          <NavLink to="/" className={setLinkStyle}>
            <TiHome className={css.iconHome} />
          </NavLink>
        </li>
        {user && (
          <li className={css.li} data-navigate="contacts">
            <NavLink to="/contacts" className={setLinkStyle}>
              <FaList className={css.iconList} />
            </NavLink>
          </li>
        )}
        {!user && (
          <li className={css.li} data-navigate="register">
            <NavLink to="/register" className={setLinkStyle}>
              <HiUserAdd className={css.iconAddUser} />
            </NavLink>
          </li>
        )}
        {!user && (
          <li className={css.li} data-navigate="login">
            <NavLink to="/login" className={setLinkStyle}>
              <FiLogIn className={css.iconLogin} />
            </NavLink>
          </li>
        )}
        {user && (
          <li className={css.li}>
            <NavLink
              to="/"
              className={css.link}
              onClick={() => dispatch(logoutThunk())}
            >
              <GiExitDoor className={css.iconLogout} />
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
