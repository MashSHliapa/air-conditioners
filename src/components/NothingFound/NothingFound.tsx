import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { INothingFound } from '../../types/interfaces';
import './NothingFound.scss';

export const NothingFound = (props: INothingFound) => {
  return (
    <div className="nothing-found">
      <div className="nothing-found__image">
        <img src={props.image} alt="image" />
      </div>
      <h4 className="nothing-found__subtitle">{props.subtitle}</h4>
      <div className="nothing-found__announcement">
        <h4 className="nothing-found__text">{props.text}</h4>
        <div className="nothing-found__text-img">
          <img src={props.imgActive} alt="heart" />
        </div>
      </div>
      <div className="nothing-found__button-wrapper _button-wrapper ">
        <NavLink to="/" className="nothing-found__button _button" onClick={() => scrollToPage('catalog')}>
          КАТАЛОГ
        </NavLink>
      </div>
    </div>
  );
};
