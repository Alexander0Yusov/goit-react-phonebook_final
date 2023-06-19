import css from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from 'redux/stateSelectors';
import SignUpForm from 'components/SignUpForm/SignUpForm';

const Register = () => {
  const navigate = useNavigate();

  const { token } = useSelector(authSelector);

  useEffect(() => {
    token && navigate('/contacts');
  }, [token, navigate]);

  return (
    <div className={css.register}>
      <h2 className={css.title}>SignUp</h2>
      <SignUpForm />
    </div>
  );
};

export default Register;
