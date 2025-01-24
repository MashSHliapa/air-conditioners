import { ButtonAndFavorite } from '../../components/ButtonAndFavorite/ButtonAndFavorite';
import photo from '../../images/conditioner_item.png';
import menu1 from '../../icons/availability.svg';
import menu2 from '../../icons/delivery_card.svg';
import menu3 from '../../icons/discount.svg';
import menu4 from '../../icons/price.svg';
import './CardItem.scss';

export const CardItem = () => {
  return (
    <div className="card-item">
      <div className="card-item__container _container">
        <div className="card-item__body">
          <div className="card-item__characteristics characteristics">
            <div className="characteristics__title">TCL Elite TAC-09CHSD/XA71IN</div>

            <div className="characteristics__content-box">
              <h4 className="characteristics__subtitle">Характеристики</h4>
              <ul className="characteristics__list">
                <li className="characteristics__item">
                  <h5 className="characteristics__name">Категория:</h5>
                  <h5 className="characteristics__value">Настенные</h5>
                </li>

                <li className="characteristics__item">
                  <h5 className="characteristics__name">Площадь:</h5>
                  <h5 className="characteristics__value">
                    25 м<sup className="square-meter">2</sup>
                  </h5>
                </li>

                <li className="characteristics__item">
                  <h5 className="characteristics__name">Технология:</h5>
                  <h5 className="characteristics__value">Инверторная</h5>
                </li>
              </ul>
              <div className="characteristics__image">
                <img src={photo} alt="photo" />
              </div>
            </div>
          </div>
          <div className="card-item__description description">
            <h4 className="description__subtitle">Описание</h4>

            <ul className="description__list">
              <li className="description__item description__item_bold">
                Обслуживаемая площадь: 25 м<sup className="square-meter">2</sup>
              </li>
              <li className="description__item">Режим работы: охлаждение и обогрев</li>

              <li className="description__item">Рабочая температура при охлаждении: от -15 до 53 С</li>

              <li className="description__item">Рабочая температура при обогреве: от -20 до +30 С</li>

              <li className="description__item">Шум внутреннего блока: 22-40 дБ</li>

              <li className="description__item">Шум наружного блока: 50 дБ</li>

              <li className="description__item">Ширина внутреннего блока: 698 мм</li>

              <li className="description__item">Высота внутреннего блока: 255 мм</li>

              <li className="description__item">Глубина внутреннего блока: 190 мм</li>
            </ul>

            <div className="description__additionally additionally">
              <h5 className="additionally__subtitle">Дополнительные функции:</h5>
              <ul className="additionally__list">
                <li className="additionally__item">Wi-Fi</li>

                <li className="additionally__item">Пульт дистанционного управления</li>

                <li className="additionally__item">Регулировка воздушного потока</li>

                <li className="additionally__item">Регулировка скорости вращения вентилятара 5 ступ.</li>
                <li className="additionally__item">Таймер включенияя/выключения</li>
                <li className="additionally__item">Авторестарт после проподания питания</li>
                <li className="additionally__item">Турбо-режим</li>
                <li className="additionally__item">Режим "сон"</li>
                <li className="additionally__item">Осушение воздуха</li>
                <li className="additionally__item">Самоочистка</li>
              </ul>
            </div>

            <ul className="description__manufacturer manufacturer">
              <li className="manufacturer__item">Страна производства: Китай</li>

              <li className="manufacturer__item">
                Производитель: ТиСиЭл Оверсиас Маркетинг Лимитед, Аламеда Др. Карлос де Ассумпкао, №263, Эдиф. Чайна
                Сивил Плаза, 5К, Макао, Китай
              </li>

              <li className="manufacturer__item">
                Импортер в РБ: ООО "Биоконд", 220020, г. Минск, ул. Короля, 2 оф. 212
              </li>
            </ul>
            <h5 className="description__guarantee">Гарантия: 36 мес.</h5>
            <div className="description__price">от 1 790 BYN</div>

            <div className="description__button-and-favorite">
              <ButtonAndFavorite />
            </div>
          </div>
        </div>
        <div className="card-item__menu card-menu _endless-bg">
          <div className="card-menu__row">
            <div className="card-menu__column">
              <div className="card-menu__icon">
                <img src={menu1} alt="menu1" />
              </div>
              <h5 className="card-menu__text">Наличие товара уточняйте у менеджера</h5>
            </div>
            <div className="card-menu__column">
              <div className="card-menu__icon">
                <img src={menu2} alt="menu2" />
              </div>
              <h5 className="card-menu__text">
                Доставка <span>бесплатно</span>
              </h5>
            </div>
            <div className="card-menu__column">
              <div className="card-menu__icon">
                <img src={menu3} alt="menu3" />
              </div>
              <h5 className="card-menu__text">
                {' '}
                При покупке кондиционера у нас,{' '}
                <span className="card-menu__text-discount">
                  СКИДКА НА МОНТАЖ <span className="note">15 %</span>
                </span>
              </h5>
            </div>
            <div className="card-menu__column">
              <div className="card-menu__icon">
                <img src={menu4} alt="menu3" />
              </div>
              <h5 className="card-menu__text">
                Стоимость монтажа с учетом скидки -<span className="note"> 300 BYN</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
