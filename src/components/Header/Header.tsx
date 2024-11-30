import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navbar } from '../Navbar/Navbar';
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
              <div className="bottom-header__navbar">
                <Navbar />
              </div>
              <div className="bottom-header__burger">
                <BurgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
