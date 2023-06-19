import css from './Register.module.css';
import FormSignUp from 'components/FormSignUp/FormSignUp';

const Register = () => {
  return (
    <div className={css.register}>
      <h2 className={css.title}>SignUp</h2>
      <FormSignUp />
    </div>
  );
};

export default Register;
