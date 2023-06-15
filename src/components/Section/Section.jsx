import css from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
