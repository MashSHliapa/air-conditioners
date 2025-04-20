import { Title } from '../../components/Title/Title';
import { Data } from '../../components/Data/Data';
import menu1 from '../../assets/icons/menu1.svg';
import menu2 from '../../assets/icons/menu2.svg';
import menu3 from '../../assets/icons/menu3.svg';
import certificate1 from '../../assets/images/certificate1.jpg';
import certificate2 from '../../assets/images/certificate2.jpg';
import './About.scss';

export const About = () => {
  return (
    <div className="about">
      <div className="about__container _container">
        <div className="about__body">
          <div className="about__about">
            <div className="about__info">
              <div className="about__title">
                <Title>О нас</Title>
              </div>
              <p className="about__text">
                Мы - официальный дилер TCL и MDV кондиционеров. <br />
                Наша команда сделает благоприятный климат в вашем помещении под ключ от подбора любого климатического
                оборудования, исходя из ваших потребностей до монтажа. Быстро и качественно поможем Вам определиться с
                выбором. <br />
                Наши бригады работают только специализированным инструментом без пыли и грязи. Мы предоставляем
                официальную гарантию и на оборудование, и на монтажные работы. Благодаря возможности своими силами
                осуществить полный спектр услуг от подбора до доставки и последующего монтажа климатической техники.
                <span>
                  Кондиционер — это уже не роскошь, это необходимость комфорта, которого Вы заслуживаете! Доверьте Ваш
                  комфорт профессионалам, а мы сделаем:
                  <br />
                  БЫСТРО, КАЧЕСТВЕННО, ДОСТУПНО!
                </span>
              </p>
            </div>
            <div className="about__image"></div>
          </div>
          <div className="about_menu menu _endless-bg">
            <div className="menu__row">
              <div className="menu__column">
                <div className="menu__icon">
                  <img src={menu1} alt="menu1" />
                </div>
                <h5 className="menu__text">
                  Широкий ассортимент. Мы являемся официальными дилерами проверенных марок кондиционеров.
                </h5>
              </div>
              <div className="menu__column">
                <div className="menu__icon">
                  <img src={menu2} alt="menu2" />
                </div>
                <h5 className="menu__text">
                  Монтаж <br /> производится <br /> в соответствии <br /> с ГОСТ РБ.
                </h5>
              </div>
              <div className="menu__column">
                <div className="menu__icon">
                  <img src={menu3} alt="menu3" />
                </div>
                <h5 className="menu__text">За ? лет работы клиенты нам доверили установку более ?!?! кондиционеров.</h5>
              </div>
            </div>
          </div>
          <div className="about__certificates certificates">
            <div className="certificates__item">
              <img src={certificate1} alt="certificate1" />
            </div>
            <div className="certificates__item">
              <img src={certificate2} alt="certificate2" />
            </div>
            <div className="certificates__data">
              <Data />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
