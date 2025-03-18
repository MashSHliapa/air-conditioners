import { Title } from '../Title/Title';
import cash from '../../icons/cash.svg';
import nonCash from '../../icons/non_cash.svg';
import paymentByCard from '../../icons/payment_by_card.svg';
import delivery from '../../icons/delivery.svg';
import './PaymentAndDelivery.scss';

export const PaymentAndDelivery = () => {
  return (
    <div className="payment-delivery">
      <div className="payment-delivery__container _container">
        <div className="payment-delivery__body">
          <div className="payment-delivery__title">
            <Title>Оплата и доставка</Title>
          </div>
          <div className="payment-delivery__info">
            <h2 className="payment-delivery__subtitle">Мы принимаем оплату удобными для Вас способами: </h2>
            <div className="payment-delivery__payment">
              <div className="payment-delivery__item">
                <div className="payment-delivery__icon">
                  <img src={cash} alt="cash" />
                </div>
                <h4 className="payment-delivery__text">НАЛИЧНЫЙ РАСЧЕТ</h4>
              </div>
              <div className="payment-delivery__item">
                <div className="payment-delivery__icon">
                  <img src={paymentByCard} alt="cash" />
                </div>
                <h4 className="payment-delivery__text">Банковской картой через терминал</h4>
              </div>
              <div className="payment-delivery__item">
                <div className="payment-delivery__icon">
                  <img src={nonCash} alt="cash" />
                </div>
                <h4 className="payment-delivery__text">
                  БЕЗНАЛИЧНЫЙ РАСЧЕТ{' '}
                  <span className="payment-delivery__description">
                    (счет будет сформирован и отправлен на Вашу электронную почту)
                  </span>
                </h4>
              </div>
              <div className="payment-delivery__item">
                <div className="payment-delivery__icon">
                  <img src={paymentByCard} alt="cash" />
                </div>
                <h4 className="payment-delivery__text">
                  Рассрочка <span className="payment-delivery__explanation"> на 3 месяца</span>{' '}
                  <span className="payment-delivery__description">
                    (через ВТБ с помощью приложения <span className="note">VTB ibank</span> или через карту Черепаха)
                  </span>
                </h4>
              </div>
            </div>
            <h4 className="payment-delivery__subtitle">Мы осуществляем доставку кондиционера:</h4>
            <div className="payment-delivery__delivery">
              <div className="payment-delivery__item payment-delivery__item_delivery">
                <div className="payment-delivery__icon">
                  <img src={delivery} alt="cash" />
                </div>
                <h4 className="payment-delivery__text">Доставка бесплатная</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
