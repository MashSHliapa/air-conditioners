import phone from '../../icons/phone.svg';
import message from '../../icons/message.svg';
import viber from '../../icons/viber.svg';
import instagram from '../../icons/instagram.svg';
import whatsapp from '../../icons/whatsApp.svg';
import youtube from '../../icons/youtube.svg';
import './ContactsBoxes.scss';

export const ContactsBoxes = () => {
  return (
    <div className="contacts-boxes">
      <div className="contacts-boxes__container _container">
        <div className="contacts-boxes__body">

        <div className="contacts-boxes__row">
          <div className="contacts-boxes__column">
            <div className="contacts-boxes__icon">
              <img src={phone} alt="phone" />
            </div>
            <div className="contacts-boxes__text">Оформить заказ и получить консультацию можно связавшись с нами по телефонам</div>
            <div className="contacts-boxes__phones">
              <div className="contacts-boxes__phone">
                <a href="tel:+375 25 77 86 106">+375 25 77 86 106 Life</a>
              </div>
              <div className="contacts-boxes__phone">
                <a href="tel:+375 25 51 06 277">+375 25 510 62 77 A1</a>
              </div>
            </div>
          </div>

          <div className="contacts-boxes__column">
            <div className="contacts-boxes__icon">
              <img src={message} alt="message" />
            </div>
            <div className="contacts-boxes__text">Также с нами можно связаться по средствам мессенджеров</div>
            <div className="contacts-boxes__socials">
              <div className="contacts-boxes__viber _icon">
                <a href="https://vk.com/designalenalev" target="_blank">
                  <img src={viber} alt="vk" />
                </a>
              </div>
              <div className="contacts-boxes__whatsapp _icon">
                <a href="https://vk.com/designalenalev" target="_blank">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </div>
              <div className="contacts-boxes__instagram _icon">
                <a href="https://instagram.com/artdesign_81?igshid=MmVlMjlkMTBhMg==" target="_blank">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
              <div className="contacts-boxes__youtube _icon">
                <a href="https://vk.com/designalenalev" target="_blank">
                  <img src={youtube} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
  )
}
