import { useEffect, useState } from 'react';
import vectorOpen from '../../icons/vector_open.svg';
import vectorClose from '../../icons/vector_close.svg';
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
            <a href="#" className="navbar__link">
              Каталог
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              О нас
            </a>
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
                    <a href="#" className="info-menu__link">
                      Как мы работаем
                    </a>
                  </li>
                  <li className="info-menu__item">
                    <a href="#" className="info-menu__link">
                      Какие бывают кондиционеры
                    </a>
                  </li>
                  <li className="info-menu__item">
                    <a href="#" className="info-menu__link">
                      Как выбрать кондиционер
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Оплата и доставка
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Наши работы
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
