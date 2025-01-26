import { ICatalogCard } from '../../types/interfaces';
import { ButtonAndFavorite } from '../ButtonAndFavorite/ButtonAndFavorite';
import './CatalogCard.scss';
export const CatalogCard = (props: { post: ICatalogCard }) => {
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__image">
          <img src={props.post.image} alt="img" />
        </div>
        <div className="card__title">{props.post.title}</div>
        <div className="card__price">{props.post.price}</div>
      </div>
      <div className="card__button-and-favorite">
        <ButtonAndFavorite title="ПОДРОБНЕЕ" linkTo={`/selected/${props.post.id}`} />
      </div>
    </div>
  );
};
