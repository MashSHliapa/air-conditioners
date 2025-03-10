import { NavLink } from 'react-router-dom';
import arrow from '../../icons/return_arrow.svg';
import './Return.scss';

export const Return = () => {
  return (
    <NavLink to="/services" className="return">
      <div className="return__body">
        <div className="return__arrow">
          <img src={arrow} alt="arrow" />
        </div>
        <div className="return__text">назад</div>
      </div>
    </NavLink>
  );
};
