import { useEffect, useState } from 'react';
import css from './AuthForm.module.css';
// import { login } from 'redux/authService/operations';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk, signUpThunk } from 'redux/authService/thunks';

const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('across8888@mail.com');
  const [password, setPassword] = useState('examplepwd12345');
  const [action, setAction] = useState('');

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    location.pathname === '/register'
      ? setAction('SignUp')
      : setAction('Login');
  }, [location.pathname]);

  const handleSubmit = e => {
    e.preventDefault();

    if (action === 'SignUp') {
      const user = {
        name,
        email,
        password,
      };
      dispatch(signUpThunk(user));
    }

    if (action === 'Login') {
      const user = {
        email,
        password,
      };
      dispatch(loginThunk(user));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.authForm} autoComplete="off">
      {action === 'SignUp' && (
        <label className={css.formLabel}>
          <input
            type="text"
            name="name"
            title="title text"
            // required
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            className={css.input}
            placeholder="Name"
          />
        </label>
      )}
      <label className={css.formLabel}>
        <input
          type="text"
          name="email"
          title="title text"
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
          title="title text"
          required
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          className={css.input}
          placeholder="password"
        />
      </label>

      <button className={css.button} type="submit">
        {action}
      </button>
    </form>
  );
};

export default AuthForm;
