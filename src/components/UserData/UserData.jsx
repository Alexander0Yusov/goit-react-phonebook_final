import { authSelector } from 'redux/stateSelectors';
import css from './UserData.module.scss';
import { useSelector } from 'react-redux';

const UserData = () => {
  const { user } = useSelector(authSelector);

  return (
    <div className={css.userData}>
      <p className={css.greeting}>Hi, {user.name}!</p>
      <p className={css.greeting}>{user.email}</p>
    </div>
  );
};

export default UserData;
