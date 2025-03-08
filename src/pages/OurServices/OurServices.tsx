import { Title } from '../../components/Title/Title';
import services1 from '../../images/services/services1.jpg';
import services2 from '../../images/services/services2.jpg';
import services3 from '../../images/services/services3.jpg';
import './OurServices.scss';

export const OurServices = () => {
  return (
    <div className="our-services">
      <div className="our-services__container _container">
        <div className="our-services__body">
          <div className="our-services__title">
            <Title>НАШИ УСЛУГИ</Title>
          </div>
          <div className="our-services__gallery">
            <div className="our-services__card">
              <div className="our-services__text">Установка</div>
              <div className="our-services__image">
                <img src={services1} alt="services1" />
              </div>
              <div className="our-services__button-wrapper _button-wrapper">
                <h4 className="our-services__button _button">Подробнее</h4>
              </div>
            </div>
            <div className="our-services__card">
              <div className="our-services__text">Обслуживание</div>
              <div className="our-services__image">
                <img src={services2} alt="services1" />
              </div>
              <div className="our-services__button-wrapper _button-wrapper">
                <h4 className="our-services__button _button">Подробнее</h4>
              </div>
            </div>
            <div className="our-services__card">
              <div className="our-services__text">Ремонт</div>
              <div className="our-services__image our-services__image_3">
                <img src={services3} alt="services1" />
              </div>
              <div className="our-services__button-wrapper _button-wrapper">
                <h4 className="our-services__button _button">Подробнее</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
