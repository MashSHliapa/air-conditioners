import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { ModeAndSocialMedia } from '../ModeAndSocialMedia/ModeAndSocialMedia';
import { PhonesAndSocialMedia } from '../PhonesAndSocialMedia/PhonesAndSocialMedia';
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { SearchForm } from '../SearchForm/SearchForm';
import { RootState } from '../../redux/store';
import favorite from '../../assets/icons/favorite.svg';
import './Header.scss';

export const Header = () => {
  const favoriteCards = useSelector((state: RootState) => state.favorites.data);

  const [favoriteCount, setFavoriteCount] = useState(favoriteCards.length);

  useEffect(() => {
    setFavoriteCount(favoriteCards.length);
  }, [favoriteCards]);

  return (
    <header className="header">
      <div className="header__body">
        <div className="header__top-header top-header">
          <div className="top-header__container _container">
            <div className="top-header__body">
              <div className="top-header__part1">
                <ModeAndSocialMedia />
              </div>
              <div className="top-header__part2">
                <div className="top-header__phones-icons">
                  <PhonesAndSocialMedia />
                </div>
                <div className="top-header__search-favorite">
                  <div className="top-header__search">
                    <SearchForm />
                  </div>
                  <NavLink
                    to="/favorites"
                    className="top-header__favorite"
                    onClick={() => {
                      scrollToPage('favorites');
                    }}
                  >
                    <img src={favorite} alt="favorite" />
                    <span className="top-header__favorite-count">{favoriteCount}</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom-header bottom-header">
          <div className="bottom-header__container _container">
            <div className="bottom-header__body">
              <div className="bottom-header__logo">
                <Logo />
              </div>
              <div className="bottom-header__navbar">
                <Navbar />
              </div>
              <div className="bottom-header__burger">
                <BurgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
