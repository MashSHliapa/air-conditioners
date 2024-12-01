import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navbar } from '../Navbar/Navbar';
import logo from '../../images/logo.svg';
import instagram from '../../icons/instagram.svg';
import youtube from '../../icons/youtube.svg';
import viber from '../../icons/viber.svg';
import whatsApp from '../../icons/whatsapp.svg';
import favorite from '../../icons/favorite.svg';
import search from '../../icons/search.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__top-header top-header">
          <div className="top-header__container _container">
            <div className="top-header__body">
              <div className="top-header__part1">
                <div className="top-header__mode">Режим работы: ежедневно с 8:00 до 22:00</div>
                <div className="top-header__icons">
                  <div className="top-header__icon _icon">
                    <a href="https://www.instagram.com/" target="_blank">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </div>
                  <div className="top-header__icon _icon">
                    <a href="https://www.youtube.com/" target="_blank">
                      <img src={youtube} alt="youtube" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="top-header__part2">
                <div className="top-header__phones-icons">
                  <div className="top-header__phones">
                    <div className="top-header__phone">
                      <a href="tel: +375 25 510 62 77">+375 25 510 62 77</a>
                    </div>
                    <div className="top-header__phone">
                      <a href="tel: +375 25 778 61 06">+375 25 778 61 06</a>
                    </div>
                  </div>
                  <div className="top-header__icons">
                    <div className="top-header__icon _icon">
                      <a href="https://www.viber.com/" target="_blank">
                        <img src={viber} alt="viber" />
                      </a>
                    </div>
                    <div className="top-header__icon _icon">
                      <a href="https://www.whatsapp.com/" target="_blank">
                        <img src={whatsApp} alt="whatsApp" />
                      </a>
                    </div>
                  </div>
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
