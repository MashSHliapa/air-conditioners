import { ModeAndSocialMedia } from '../ModeAndSocialMedia/ModeAndSocialMedia';
import { PhonesAndSocialMedia } from '../PhonesAndSocialMedia/PhonesAndSocialMedia';
import { Navbar } from '../Navbar/Navbar';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import search from '../../icons/search.svg';
import favorite from '../../icons/favorite.svg';
import logo from '../../images/logo.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__top-header top-header">
          <div className="top-header__container _container">
            <div className="top-header__body">
              <div className="top-header__part1">
                <ModeAndSocialMedia />
              </div>
              <div className="top-header__part2">
                <div className="top-header__phones-icons">
                  <PhonesAndSocialMedia />
                </div>
                <div className="top-header__search-favorite">
                  <div className="top-header__search">
                    <div className="top-header__search-form search-form">
                      <form action="#" className="search-form__item">
                        <input type="text" data-value="Ошибка" className="search-form__input"></input>
                        <button type="submit" className="search-form__button">
                          <img src={search} alt="search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="top-header__favorite">
                    <img src={favorite} alt="favorite" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
