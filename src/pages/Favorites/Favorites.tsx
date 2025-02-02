import { useSelector } from 'react-redux';
import { Title } from '../../components/Title/Title';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { NothingFound } from '../../components/NothingFound/NothingFound';
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
        <div className="favorites__body _body-cards">
          <div className="favorites__title _title-start">
            <Title>Избранное</Title>
          </div>
          {favoriteCards.length > 0 ? (
            <div className="favorites__cards">{favoriteCards}</div>
          ) : (
            <NothingFound
              image={image}
              imgActive={heartActive}
              subtitle="В избранном пусто"
              text="Добавляйте товары с помощью"
            />
          )}
        </div>
      </div>
    </div>
  );
};
