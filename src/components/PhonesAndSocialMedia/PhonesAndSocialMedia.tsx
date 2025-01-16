import './PhonesAndSocialMedia.scss';
import viber from '../../icons/viber.svg';
import whatsApp from '../../icons/whatsapp.svg';

export const PhonesAndSocialMedia = () => {
  return (
    <div className="phones-links">
      <div className="phones-links__phones-icons">
        <div className="phones-links__phones">
          <div className="phones-links__phone">
            <a href="tel: +375 25 510 62 77">+375 25 510 62 77</a>
          </div>
          <div className="phones-links__phone">
            <a href="tel: +375 25 778 61 06">+375 25 778 61 06</a>
          </div>
        </div>
        <div className="phones-links__icons">
          <div className="phones-links__icon _icon">
            <a href="https://www.viber.com/" target="_blank">
              <img src={viber} alt="viber" />
            </a>
          </div>
          <div className="phones-links__icon _icon">
            <a href="https://www.whatsapp.com/" target="_blank">
              <img src={whatsApp} alt="whatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
