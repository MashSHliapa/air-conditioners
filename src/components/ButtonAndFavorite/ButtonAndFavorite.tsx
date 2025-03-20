import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { addConditionerToFavorite, removeConditionerFromFavorite } from '../../redux/favoritesSlice';
import { RootState } from '../../redux/store';
import { ICardItem } from '../../types/interfaces';
import './ButtonAndFavorite.scss';

export const ButtonAndFavorite = ({
  title,
  linkTo,
  scrollTo,
  card,
}: {
  title: string;
  linkTo?: string;
  scrollTo?: string;
  card: { id: number };
}) => {
  const dispatch = useDispatch();

  const isChecked: boolean = useSelector((state: RootState) => {
    return state.favorites.data.some((item: ICardItem) => item.id === card.id);
  });

  const handleClickToogleFavorite = () => {
    if (isChecked) {
      dispatch(removeConditionerFromFavorite(card));
    } else {
      dispatch(addConditionerToFavorite(card));
    }
  };

  return (
    <div className="button-and-favorite">
      <div className="button-and-favorite__button-wrapper _button-wrapper">
        {linkTo && (
          <Link to={linkTo} className="button-and-favorite__button _button" onClick={() => scrollToPage(scrollTo)}>
            {title}
          </Link>
        )}
      </div>
      <div
        className={`button-and-favorite__heart ${
          isChecked ? 'button-and-favorite__heart-active' : 'button-and-favorite__heart'
        }`}
        onClick={handleClickToogleFavorite}
      >
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.1" y="0.369043" width="24.8" height="24.8" rx="1.9" stroke="#636466" strokeWidth="0.2" />
          <path
            d="M19.552 7.32381C18.6981 6.42678 17.5703 5.88324 16.372 5.79127C15.1738 5.69931 13.9841 6.06498 13.0175 6.82229C11.9986 6.01785 10.7304 5.65308 9.46834 5.80144C8.20624 5.94979 7.04396 6.60024 6.21557 7.62182C5.38718 8.64339 4.95421 9.9602 5.00384 11.3071C5.05347 12.6539 5.58202 13.9308 6.48306 14.8806L11.2878 20.0233C11.7382 20.5008 12.3488 20.769 12.9855 20.769C13.6221 20.769 14.2327 20.5008 14.6832 20.0233L19.4879 14.8806C19.9611 14.3898 20.3383 13.8046 20.5977 13.1586C20.8572 12.5126 20.9938 11.8186 20.9998 11.1163C21.0058 10.4141 20.8809 9.71754 20.6324 9.06669C20.384 8.41584 20.0168 7.82354 19.552 7.32381ZM18.4228 13.665L13.6181 18.7652C13.5437 18.8449 13.4551 18.9081 13.3575 18.9513C13.2599 18.9944 13.1553 19.0167 13.0495 19.0167C12.9438 19.0167 12.8392 18.9944 12.7416 18.9513C12.644 18.9081 12.5554 18.8449 12.481 18.7652L7.67624 13.665C7.04822 12.9836 6.69656 12.0682 6.69656 11.1149C6.69656 10.1617 7.04822 9.24628 7.67624 8.56485C8.31619 7.89417 9.1793 7.5181 10.0786 7.5181C10.9779 7.5181 11.841 7.89417 12.481 8.56485C12.5554 8.64453 12.644 8.70776 12.7416 8.75092C12.8392 8.79407 12.9438 8.81629 13.0495 8.81629C13.1553 8.81629 13.2599 8.79407 13.3575 8.75092C13.4551 8.70776 13.5437 8.64453 13.6181 8.56485C14.2754 8.00969 15.1021 7.73074 15.9407 7.7812C16.7794 7.83167 17.5711 8.20802 18.1651 8.83848C18.759 9.46894 19.1136 10.3094 19.1611 11.1996C19.2086 12.0898 18.9458 12.9674 18.4228 13.665Z"
            fill="#E9E9E9"
          />
        </svg>
      </div>
    </div>
  );
};
