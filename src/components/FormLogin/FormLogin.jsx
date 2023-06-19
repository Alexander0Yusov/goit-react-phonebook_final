import css from './FormLogin.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/authService/thunks';
import { setError } from 'redux/authService/authSlice';
import { authSelector } from 'redux/stateSelectors';

const FormLogin = () => {
  const [email, setEmail] = useState(''); // DemoUser0@mail.com
  const [password, setPassword] = useState(''); // DemoUser0

  const { error } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    error && alert(error);
    dispatch(setError(null));
  }, [error, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginThunk({
        email,
        password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={css.authForm} autoComplete="off">
      <label className={css.formLabel}>
        <input
          type="text"
          name="email"
          title="Enter email, please!"
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          className={css.input}
          placeholder="email"
        />
      </label>
      <label className={css.formLabel}>
        <input
          type="tel"
          name="password"
          title="Enter password, please!"
          required
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          className={css.input}
          placeholder="password"
        />
      </label>

      <button className={css.authButton} type="submit">
        {'Login'}
      </button>
    </form>
  );
};

export default FormLogin;
