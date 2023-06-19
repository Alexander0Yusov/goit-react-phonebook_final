import { useSelector } from 'react-redux';
import css from './Login.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authSelector } from 'redux/stateSelectors';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const { token } = useSelector(authSelector);

  useEffect(() => {
    token && navigate('/contacts');
  }, [token, navigate]);

  return (
    <div className={css.login}>
      <h2 className={css.title}>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
