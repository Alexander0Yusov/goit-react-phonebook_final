import css from './Login.module.css';
import FormLogin from 'components/FormLogin/FormLogin';

const Login = () => {
  return (
    <div className={css.login}>
      <h2 className={css.title}>Login</h2>
      <FormLogin />
    </div>
  );
};

export default Login;
