import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { Discount } from '../Discount/Discount';
import background from '../../images/main_photo.jpg';
import './Main.scss';

export const Main = () => {
  return (
    <main className="main">
      <div className="main__container _container">
        <div className="main__body">
          <div className="main__info">
            <h1 className="main__title">Кондиционеры</h1>
            <ul className="main__menu-list">
              <li className="main__menu-item">продажа</li>
              <li className="main__menu-item">монтаж</li>
              <li className="main__menu-item">сервис</li>
            </ul>
            <div className="main__button-wrapper">
              <NavLink to="/" className="main__button _button" onClick={() => scrollToPage('catalog')}>
                Каталог
              </NavLink>
            </div>
          </div>
          <div className="main__discount">
            <Discount />
          </div>
          <div className="main__background background _ibg">
            <img src={background} alt="background" />
          </div>
        </div>
      </div>
    </main>
  );
};
