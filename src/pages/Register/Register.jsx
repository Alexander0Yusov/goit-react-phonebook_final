import css from './Register.module.css';
import AuthForm from 'components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from 'redux/stateSelectors';

const Register = () => {
  const navigate = useNavigate();

  const { token } = useSelector(authSelector);

  useEffect(() => {
    token && navigate('/');
  }, [token, navigate]);

  return (
    <div className={css.register}>
      <h2 className={css.title}>SignUp</h2>
      <AuthForm />
    </div>
  );
};

export default Register;
