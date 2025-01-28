import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Title } from '../../components/Title/Title';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { RootState } from '../../redux/store';
import { ICardItem } from '../../types/interfaces';
import image from '../../images/favorites_heart.png';
import heartActive from '../../icons/favorite_active.svg';
import './Favorites.scss';

export const Favorites = () => {
  const { data: cards } = useSelector((state: RootState) => state.favorites);

  const favoriteCards = cards.map((item: ICardItem) => <CatalogCard key={item.id} post={item} />);

  return (
    <div className="favorites">
      <div className="favorites__container _container">
        <div className="favorites__body">
          <div className="favorites__title">
            <Title>Избранное</Title>
          </div>
          {favoriteCards.length > 0 ? (
            <div className="favorites__favorites-cards">{favoriteCards}</div>
          ) : (
            <div className="favorites__content-box">
              <div className="favorites__image">
                <img src={image} alt="image" />
              </div>
              <h4 className="favorites__subtitle">В избранном пусто</h4>
              <div className="favorites__announcement">
                <h4 className="favorites__text">Добавляйте товары с помощью</h4>
                <div className="favorites__text-img">
                  <img src={heartActive} alt="heart" />
                </div>
              </div>
              <div className="favorites__button-wrapper _button-wrapper ">
                <NavLink to="/" className="favorites__button _button">
                  КАТАЛОГ
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
