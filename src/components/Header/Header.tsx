import logo from '../../images/logo.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
        <div className="header__body">
          <div className="header__top-header top-header"></div>
          <div className="header__bottom-header bottom-header">
          <div className="bottom-header__container _container">
            <div className="bottom-header__body">
              <div className="bottom-header__logo">
                <img src={logo} alt="logo" />
              </div>
              <ul className="bottom-header__list">
                <li className="bottom-header__item">
                  <a href="#" className="bottom-header__link">Каталог</a>
                </li>
                <li className="bottom-header__item">
                  <a href="#" className="bottom-header__link">О нас</a>
                </li>
                <li className="bottom-header__item">
                  <a href="#" className="bottom-header__link">Информация</a>
                </li>
                <li className="bottom-header__item">
                  <a href="#" className="bottom-header__link">Оплата и доставка</a>
                </li>
                <li className="bottom-header__item">
                  <a href="#" className="bottom-header__link">Наши работы</a>
                </li>
                <li className="bottom-header__item">
                  <a href="#" className="bottom-header__link">Контакты</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
    </header>
  )
};
