import css from './Home.module.scss';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector(state => state.authCombine);

  return (
    <div className={css.home}>
      <h2 className={css.title}>Phonebook</h2>
      {user?.name && <p className={css.greeting}>Hi, {user.name}!</p>}
    </div>
  );
};

export default Home;
