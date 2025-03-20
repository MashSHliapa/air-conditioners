import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { Return } from '../../components/Return/Return';
import { Title } from '../../components/Title/Title';
import { InfoAndFeedback } from '../../components/InfoAndFeedback/InfoAndFeedback';
import vectorClose from '../../icons/vector_big_close.svg';
import vectorOpen from '../../icons/vector_big_open.svg';
import image1 from '../../images/services/services1.jpg';
import image2 from '../../images/services/not_ours_item.jpg';
import image3 from '../../images/services/services2.jpg';
import './InstallationAndRemoval.scss';

export const InstallationAndRemoval = () => {
  const [isOpenDescription, setIsOpenDescription] = useState([false, false, false]);
  const handleClickOpenMenu = (index: number) => {
    setIsOpenDescription((prev) => {
      const newPrev = [...prev];
      newPrev.forEach((_, i) => {
        if (i !== index) {
          newPrev[i] = false;
        } else {
          newPrev[i] = !newPrev[i];
        }
      });
      return newPrev;
    });
  };

  return (
    <div className="installation-and-removal">
      <div className="installation-and-removal__container _container">
        <div className="installation-and-removal__body">
          <div className="installation-and-removal__return">
            <Return />
          </div>
          <div className="installation-and-removal__title">
            <Title>Установка/Демонтаж</Title>
          </div>
          <h4 className="installation-and-removal__subtitle">
            Мы производим как монтаж так и демонтаж кондиционеров.
            <br />
            Работы производятся специалистами с большим опытом. Используя качественные материалы. Мы работаем без пыли и
            грязи. Все пыльные работы выполняются с пылесосом. Сверление отверстия выполняется алмазной коронкой. Что
            позволяет что-то там.
            <br />
            Монтаж наружного блока в труднодоступном месте осуществляем с помощью автовышки или промышленного
            альпиниста.{' '}
            <b>
              Эта услуга оплачивается отдельно - от <span className="note"> 200 руб.</span>
            </b>
          </h4>
          <div className="installation-and-removal__gallery">
            <div className="installation-and-removal__card">
              <h4 className="installation-and-removal__card-title">Установка кондиционера купленного у нас</h4>
              <div className="installation-and-removal__card-image">
                <img src={image1} alt="services1" />
              </div>
              <div className="installation-and-removal__card-price-vector">
                <h4 className="installation-and-removal__card-price">от 450 BYN</h4>
                <div className="installation-and-removal__card-vector" onClick={() => handleClickOpenMenu(0)}>
                  <img src={isOpenDescription[0] ? vectorOpen : vectorClose} alt="vector" />
                </div>
              </div>
              {isOpenDescription[0] && (
                <>
                  <p className="installation-and-removal__card-subtitle">
                    Стоимость стандартного монтажа кондиционера, купленного у нас, мощностью до 3.5кВт до 3 метров
                    трубопровода. <b>Окончательная стоимость озвучивается после замера.</b>
                  </p>
                  <div className="installation-and-removal__card-button-wrapper _button-wrapper">
                    <NavLink
                      to="/"
                      className="installation-and-removal__card-button _button"
                      onClick={() => scrollToPage('catalog')}
                    >
                      КАТАЛОГ
                    </NavLink>
                  </div>
                </>
              )}
            </div>
            <div className="installation-and-removal__card">
              <h4 className="installation-and-removal__card-title">Установка кондиционера купленного в другом месте</h4>
              <div className="installation-and-removal__card-image">
                <img src={image2} alt="services1" />
              </div>
              <div className="installation-and-removal__card-price-vector">
                <h4 className="installation-and-removal__card-price">от 650 BYN</h4>
                <div className="installation-and-removal__card-vector" onClick={() => handleClickOpenMenu(1)}>
                  <img src={isOpenDescription[1] ? vectorOpen : vectorClose} alt="vector" />
                </div>
              </div>
              {isOpenDescription[1] && (
                <>
                  <p className="installation-and-removal__card-subtitle">
                    Стоимость стандартного монтажа кондиционера, купленного в другом месте, мощностью до 3.5кВт до 3
                    метров трубопровода.
                    <b> Окончательная стоимость озвучивается после замера.</b>
                  </p>
                </>
              )}
            </div>
            <div className="installation-and-removal__card">
              <h4 className="installation-and-removal__card-title">Демонтаж кондиционера</h4>
              <div className="installation-and-removal__card-image">
                <img src={image3} alt="services1" />
              </div>
              <div className="installation-and-removal__card-price-vector" onClick={() => handleClickOpenMenu(2)}>
                <h4 className="installation-and-removal__card-price">от 450 BYN</h4>
                <div className="installation-and-removal__card-vector">
                  <img src={isOpenDescription[2] ? vectorOpen : vectorClose} alt="vector" />
                </div>
              </div>
              {isOpenDescription[2] && (
                <>
                  <p className="installation-and-removal__card-subtitle">
                    Стоимость стандартного монтажа кондиционера, купленного у нас, мощностью до 3.5кВт до 3 метров
                    трубопровода. <b>Окончательная стоимость озвучивается после замера.</b>
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="installation-and-removal__guarantee">Гарантия на выполненные работы до 5 лет</div>
          <InfoAndFeedback>Остались вопросы?</InfoAndFeedback>
          <NavLink to="/" target="_top" className="installation-and-removal__home">
            на главную
          </NavLink>
        </div>
      </div>
    </div>
  );
};
