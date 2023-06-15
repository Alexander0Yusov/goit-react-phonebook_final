import UserData from 'components/UserData/UserData';
import css from './Home.module.scss';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/stateSelectors';

const Home = () => {
  const { user } = useSelector(authSelector);

  return (
    <div className={css.home}>
      <h2 className={css.title}>Phonebook</h2>
      {user && <UserData />}
    </div>
  );
};

export default Home;
