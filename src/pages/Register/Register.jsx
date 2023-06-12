import css from './Register.module.css';
import AuthForm from 'components/AuthForm/AuthForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Register = () => {
  const navigate = useNavigate();

  const isAuth = useSelector(state => state.authCombine.token);

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return (
    <div className={css.register}>
      <h2 className={css.title}>SignUp</h2>
      <AuthForm />
    </div>
  );
};

export default Register;
