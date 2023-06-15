import { useSelector } from 'react-redux';
import css from './Login.module.css';
import AuthForm from 'components/AuthForm/AuthForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authSelector } from 'redux/stateSelectors';

const Login = () => {
  const navigate = useNavigate();

  const { token } = useSelector(authSelector);

  useEffect(() => {
    token && navigate('/');
  }, [token, navigate]);

  return (
    <div className={css.login}>
      <h2 className={css.title}>Login</h2>
      <AuthForm />
    </div>
  );
};

export default Login;
