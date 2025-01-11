import { Title } from '../../components/Title/Title';
import background from '../../images/contacts.png';
import './Contacts.scss';

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__container _container">
        <div className="contacts__body">
          <div className="contacts__title">
            <Title>Связаться</Title>
          </div>
          <div className="contacts__subtitle">
            Для оформления заказа <br />
            Вам необходимо связаться с нами
          </div>
        </div>
      </div>
      <div className="contacts__background background _ibg">
        <img src={background} alt="background" />
        <div className="contacts__overlay"></div>
      </div>
    </div>
  );
};
