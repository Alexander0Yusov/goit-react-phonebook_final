import PropTypes from 'prop-types';
import css from './ListItem.module.css';
import { CiSquareRemove } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa';
// import { AiOutlineStar } from 'react-icons/ai';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useState } from 'react';

const ListItem = ({
  id,
  name,
  number,
  url,
  deleteContact,
  toggleModal,
  fillForm,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const listItemClickHandler = e => {
    const clickTag = e.target.tagName;
    if (clickTag === 'LI' || clickTag === 'P') {
      toggleModal();
      fillForm(id, name, number, url);
    }
  };

  return (
    <li className={css.listItem} onClick={listItemClickHandler}>
      <div
        className={css.imageThumb}
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
      >
        {url && (
          <img className={css.photoDemo} src={url} alt="User portrait"></img>
        )}
        {isFavorite ? (
          <MdFavorite className={css.favoriteIcon} />
        ) : (
          <MdFavoriteBorder className={css.favoriteBorderIcon} />
        )}
      </div>

      <div className={css.dataBox}>
        <p className={css.pName}>{name}</p>
        <p className={css.pNumber}>{number}</p>
      </div>

      <button className={css.button} type="button">
        <FaPhone className={css.callIcon} />
      </button>

      {/* <button className={css.button} type="button">
        <AiOutlineStar className={css.starIcon} />
      </button> */}

      <button
        onClick={() => deleteContact(id)}
        className={css.button}
        type="button"
      >
        <CiSquareRemove className={css.removeIcon} />
      </button>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  url: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
