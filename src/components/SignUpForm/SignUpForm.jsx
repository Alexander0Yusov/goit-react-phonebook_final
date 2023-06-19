import { useEffect, useState } from 'react';
import css from './SignUpForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from 'redux/authService/thunks';
import { setError } from 'redux/authService/authSlice';
import { authSelector } from 'redux/stateSelectors';

const SignUpForm = () => {
  const [name, setName] = useState('DemoUser0');
  const [email, setEmail] = useState('DemoUser0@mail.com');
  const [password, setPassword] = useState('DemoUser0');

  const { error } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    error && alert(error);
    dispatch(setError(null));
  }, [error, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      signUpThunk({
        name,
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
          name="name"
          title="Enter Your Name, please!"
          required
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          className={css.input}
          placeholder="Name"
        />
      </label>

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
        {'SignUp'}
      </button>
    </form>
  );
};

export default SignUpForm;
