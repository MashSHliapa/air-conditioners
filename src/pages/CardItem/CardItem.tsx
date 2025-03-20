import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ButtonAndFavorite } from '../../components/ButtonAndFavorite/ButtonAndFavorite';
import { RootState } from '../../redux/store';
import { ICardItem } from '../../types/interfaces';
import menu1 from '../../icons/availability.svg';
import menu2 from '../../icons/delivery_card.svg';
import menu3 from '../../icons/discount.svg';
import menu4 from '../../icons/price.svg';
import './CardItem.scss';

export const CardItem = () => {
  const posts = useSelector((state: RootState) => state.catalog.data);

  const { postId } = useParams<string>();

  const selectCard = posts.find((item: ICardItem) => item.id == (postId as unknown as number));

  if (!selectCard) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card-item">
      <div className="card-item__container _container">
        <div className="card-item__body">
          <div className="card-item__characteristics characteristics">
            <div className="characteristics__title">{selectCard.title}</div>

            <div className="characteristics__content-box">
              <h4 className="characteristics__subtitle">Характеристики</h4>
              <ul className="characteristics__list">
                <li className="characteristics__item">
                  <h5 className="characteristics__name">Категория:</h5>
                  <h5 className="characteristics__value">{selectCard.category}</h5>
                </li>

                <li className="characteristics__item">
                  <h5 className="characteristics__name">Площадь:</h5>
                  <h5 className="characteristics__value">
                    {selectCard.square} м<sup className="square-meter">2</sup>
                  </h5>
                </li>

                <li className="characteristics__item">
                  <h5 className="characteristics__name">Технология:</h5>
                  <h5 className="characteristics__value">{selectCard.technology}</h5>
                </li>
              </ul>
              <div className="characteristics__image">
                <img src={selectCard.image_item} alt="photo" />
              </div>
            </div>
          </div>
          <div className="card-item__description description">
            <h4 className="description__subtitle">Описание</h4>

            <ul className="description__list">
              <li className="description__item description__item_bold">
                Обслуживаемая площадь: {selectCard.serviced_area} м<sup className="square-meter">2</sup>
              </li>
              <li className="description__item">Режим работы: {selectCard.mode}</li>

              <li className="description__item">
                Рабочая температура при охлаждении:{selectCard.cooling_temperature} С
              </li>

              <li className="description__item">
                Рабочая температура при обогреве: от {selectCard.heating_temperature} С
              </li>

              <li className="description__item">Шум внутреннего блока: {selectCard.indoor_unit_noise} дБ</li>

              <li className="description__item">Шум наружного блока: {selectCard.outdoor_unit_noise} дБ</li>

              <li className="description__item">Ширина внутреннего блока: {selectCard.indoor_unit_width} мм</li>

              <li className="description__item">Высота внутреннего блока: {selectCard.outdoor_unit_width} мм</li>

              <li className="description__item">Глубина внутреннего блока: {selectCard.outdoor_unit_depth} мм</li>
            </ul>

            <div className="description__additionally additionally">
              <h5 className="additionally__subtitle">Дополнительные функции:</h5>
              <ul className="additionally__list">
                {selectCard.add_functions.map((item, index) => (
                  <li className="additionally__item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="description__manufacturer manufacturer">
              <li className="manufacturer__item">Страна производства: {selectCard.made_in}</li>

              <li className="manufacturer__item">Производитель: {selectCard.manufacturer}</li>

              <li className="manufacturer__item">Импортер в РБ: {selectCard.importer}</li>
            </ul>
            <h5 className="description__guarantee">Гарантия: {selectCard.guarantee} мес.</h5>
            <div className="description__price">от {selectCard.price} BYN</div>

            <div className="description__button-and-favorite">
              <ButtonAndFavorite title="ЗАКАЗАТЬ" linkTo={`/contacts`} scrollTo="form" card={selectCard} />
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
