import css from './Header.module.css';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <div className={css.header}>
      <Navigation />
    </div>
  );
};

export default Header;
