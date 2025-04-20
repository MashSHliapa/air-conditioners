import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import vectorOpen from '../../assets/icons/vector_open.svg';
import vectorClose from '../../assets/icons/vector_close.svg';
import './Navbar.scss';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleClickOpenMenu() {
    setOpenMenu((prevState) => !prevState);
  }

  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent | React.MouseEvent) => {
      if (!(event.target as HTMLFormElement).closest('.navbar__item_menu')) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutsideMenu);
    return () => document.removeEventListener('click', handleClickOutsideMenu);
  }, []);

  const vector = openMenu ? vectorClose : vectorOpen;

  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/catalog/pages/1" className="navbar__link" onClick={() => scrollToPage('catalog')}>
              Каталог
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/services" className="navbar__link" onClick={() => scrollToPage('our-services')}>
              Услуги
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about" className="navbar__link" onClick={() => scrollToPage('about')}>
              О нас
            </NavLink>
          </li>
          <li className="navbar__item navbar__item_menu">
            <div className="navbar__button">
              <div className="navbar__link" onClick={handleClickOpenMenu}>
                Информация
              </div>
              <div className="navbar__vector">
                <img src={vector} alt="vector" />
              </div>
            </div>
            {openMenu && (
              <div className="navbar__info-menu info-menu">
                <ul className="info-menu__list">
                  <li className="info-menu__item">
                    <NavLink
                      to="/work-steps"
                      className="info-menu__link"
                      onClick={() => {
                        scrollToPage('workSteps');
                        setOpenMenu(false);
                      }}
                    >
                      Как мы работаем
                    </NavLink>
                  </li>
                  <li className="info-menu__item">
                    <NavLink
                      to="/kinds"
                      className="info-menu__link"
                      onClick={() => {
                        scrollToPage('kinds');
                        setOpenMenu(false);
                      }}
                    >
                      Какие бывают кондиционеры
                    </NavLink>
                  </li>
                  <li className="info-menu__item">
                    <NavLink
                      to="/how-to-choose"
                      className="info-menu__link"
                      onClick={() => {
                        scrollToPage('how-to-choose');
                        setOpenMenu(false);
                      }}
                    >
                      Как выбрать кондиционер
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="navbar__item">
            <NavLink
              to="/payment-and-delivery"
              className="navbar__link"
              onClick={() => scrollToPage('payment-delivery')}
            >
              Оплата и доставка
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contacts" className="navbar__link" onClick={() => scrollToPage('contacts')}>
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
