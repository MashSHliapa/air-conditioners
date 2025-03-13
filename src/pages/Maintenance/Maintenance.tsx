import { Return } from '../../components/Return/Return';
import { Title } from '../../components/Title/Title';
import { InfoAndFeedback } from '../../components/InfoAndFeedback/InfoAndFeedback';
import image1 from '../../images/services/services1.jpg';
import image2 from '../../images/services/maintenance.jpg';
import instagram from '../../icons/instagram.svg';
import menu1 from '../../icons/services_icon1.svg';
import menu2 from '../../icons/services_icon2.svg';
import menu3 from '../../icons/services_icon3.svg';
import './Maintenance.scss';

export const Maintenance = () => {
  return (
    <div className="maintenance">
      <div className="maintenance__container _container">
        <div className="maintenance__body">
          <div className="maintenance__return">
            <Return />
          </div>
          <div className="maintenance__title">
            <Title>Сервисное обслуживание</Title>
          </div>
          <div className="maintenance__cards">
            <div className="maintenance__card1">
              <h4 className="maintenance__card-title">Сервисное обслуживание кондиционеров</h4>
              <div className="maintenance__card1-row">
                <div className="maintenance__image-box">
                  <div className="maintenance__image1">
                    <img src={image1} alt="image1" />
                  </div>
                  <h4 className="maintenance__price">от 75 BYN</h4>
                </div>
                <p className="maintenance__card-text">
                  Сервисное обслуживание кондиционера рекомендуется проводить 1 раз в год, при его сезонном
                  использовании, или 2 раза в год, при использовании в течение всего года.
                  <br /> Мы работаем чисто и аккуратно. Во время чистки внутреннего блока используем специальный чехол,
                  чтобы не повредить стенам и мебели.
                  <br /> Во время обслуживания удаляется не только пыль и жировой налет, но проводится обработка
                  специализированными средства, обладающими противогрибковым и бактериостатическим действием.
                  Стандартная цена обслуживания кондиционера 75 бел.руб., но она может увеличится в зависимости от
                  загрязнения. <br />
                  Для организаций, заказывающих обслуживание 3 и более кондиционеров, скидка от 15%.
                </p>
              </div>
            </div>
            <div className="maintenance__card2">
              <h4 className="maintenance__card-title">Сервисное обслуживание холодильного оборудования</h4>
              <p className="maintenance__card-text maintenance__card-text_2">
                Осуществляем сервисное обслуживание холодильного оборудования любой сложности.
              </p>
              <div className="maintenance__image2">
                <img src={image2} alt="image2" />
              </div>
              <p className="maintenance__subtitle">Больше наших работ смотрите тут</p>
              <div className="maintenance__instagram _icon">
                <a href="https://instagram.com/artdesign_81?igshid=MmVlMjlkMTBhMg==" target="_blank">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="maintenance__menu menu _endless-bg">
            <div className="menu__question">Почему выбирают нас?</div>
            <div className="menu__row">
              <div className="menu__column">
                <div className="menu__icon">
                  <img src={menu1} alt="menu1" />
                </div>
                <h5 className="menu__text">
                  Работаем чисто и аккуратно. Используем защитный чехол для чистки внутреннего блока.
                </h5>
              </div>
              <div className="menu__column">
                <div className="menu__icon">
                  <img src={menu2} alt="menu2" />
                </div>
                <h5 className="menu__text">Обработка противогрибковыми и бактериостатическими средствами.</h5>
              </div>
              <div className="menu__column">
                <div className="menu__icon">
                  <img src={menu3} alt="menu3" />
                </div>
                <h5 className="menu__text">Скидки для предприятий, при обслуживании 3 и больше кондиционеров.</h5>
              </div>
            </div>
          </div>
          <InfoAndFeedback>Пара обслужить кондиционер?</InfoAndFeedback>
        </div>
      </div>
    </div>
  );
};
