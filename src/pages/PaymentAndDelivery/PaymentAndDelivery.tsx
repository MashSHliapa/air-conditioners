import { Title } from '../../components/Title/Title';
import cash from '../../icons/cash.svg';
import nonCash from '../../icons/non_cash.svg';
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
          <div className="payment-delivery__row">
            <div className="payment-delivery__column">
              <h2 className="payment-delivery__subtitle">Мы принимаем оплату удобными для Вас способами: </h2>
              <div className="payment-delivery__item">
                <div className="payment-delivery__icon">
                  <img src={cash} alt="cash" />
                </div>
                <h4 className="payment-delivery__text">НАЛИЧНЫЙ РАСЧЕТ</h4>
              </div>
              <div className="payment-delivery__item">
                <div className="payment-delivery__icon">
                  <img src={nonCash} alt="cash" />
                </div>
                <h4 className="payment-delivery__text">БЕЗНАЛИЧНЫЙ РАСЧЕТ</h4>
              </div>
            </div>
            <div className="payment-delivery__column">
              <h4 className="payment-delivery__subtitle">Мы осуществляем доставку кондиционера:</h4>
              <div className="payment-delivery__item">
                <div className="payment-delivery__icon">
                  <img src={delivery} alt="cash" />
                </div>
                <h4 className="payment-delivery__text payment-delivery__text_delivery">Доставка бесплатная</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
