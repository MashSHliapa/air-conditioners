import { NavLink } from 'react-router-dom';
import { Title } from '../../components/Title/Title';
import arrow from '../../icons/return_arrow.svg';
import './Repair.scss';
export const Repair = () => {
  return (
    <div className="repair" id="repair">
      <div className="repair__container _container">
        <div className="repair__body">
          <div className="repair__return return">
            <NavLink to="/services" className="return">
              <div className="return__body">
                <div className="return__arrow">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="return__text">назад</div>
              </div>
            </NavLink>
          </div>
          <div className="repair__repair-content">
            <div className="repair__description">
              <div className="repair__title">
                <Title>Ремонт</Title>
              </div>
              <ul className="repair__conditions">
                <li className="repair__condition _triangle-pointer _text-indent">
                  Мы занимаемся ремонт холодильного оборудования любой сложности.{' '}
                </li>
                <li className="repair__condition _triangle-pointer _text-indent">
                  Так же производим прокладку коммуникаций во время ремонта и доустановки кондиционера после ремонта.{' '}
                </li>
                <li className="repair__condition _triangle-pointer _text-indent">
                  Наш специалист выезжает на объект.{' '}
                </li>
              </ul>
              <div className="repair__text">
                Ремонт торгового холодильного оборудования в Борисове начинается с полной диагностики холодильного
                шкафа, после чего мастер составляет список работ по устранению неисправности. Самые востребованные
                ремонтные работы: устранение утечки фреона, чистка конденсатора воздушного охлаждения, замена
                вентилятора обдува конденсатора, дозаправка фреоном, настройка электронного контроллера. Обычно, все
                работы по ремонту холодильников, холодильных витрин холодильных и морозильных шкафов проводятся в
                течении одного дня.
              </div>
            </div>
            <div className="repair__image"></div>
          </div>
          <div className="repair__order">
            <div className="repair__order-text">
              Нужен ремонт? <br /> Позвоните нам{' '}
              <span className="note">
                <a href="tel:+375255106277">+375 25 510 62 77</a>
              </span>
              ;{' '}
              <span className="note">
                <a href="tel:+375257886106">+375 25 77 86 106</a>
              </span>
              <br /> или оставьте заявку и мы с Вами свяжемся
            </div>
            <div className="repair__button _button-wrapper">
              <div className="repair__button _button">Оставить заявку</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
