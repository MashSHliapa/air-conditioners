import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { Title } from '../../components/Title/Title';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { Pagination } from '../../components/Pagination/Pagination';
import { RootState } from '../../redux/store';
import vectorLeft from '../../icons/vector_left.svg';
import vectorRight from '../../icons/vector_right.svg';
import './Catalog.scss';

export const Catalog = () => {
  const { data: posts, limit } = useSelector((state: RootState) => state.catalog);

  const [currentPage, setCurrentPage] = useState(Number(window.location.pathname.split('/').pop()) || 1);

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;

  const totalPages = Math.ceil(posts.length / limit);
  console.log(totalPages);
  const isPageValid = currentPage <= totalPages;

  const handleClickPrevBtn = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      scrollToPage('catalog');
      handlePageChange(newPage);
    }
  };

  const handleClickNextBtn = () => {
    setCurrentPage(currentPage + 1);
    scrollToPage('catalog');
  };

  const catalogPage = isPageValid
    ? posts.slice(startIndex, lastIndex).map((item) => <CatalogCard key={item.id} post={item} />)
    : null;
  const handlePageChange = (newPage: number) => {
    console.log('handlePageChange', newPage);
    setCurrentPage(newPage);
  };

  return (
    <div className="catalog">
      <div className="catalog__container _container">
        {isPageValid ? (
          <div className="catalog__body">
            <div className="catalog__title">
              <Title>КАТАЛОГ</Title>
            </div>
            <div className="catalog__content-box">
              <div className="catalog__filters filters">
                <div className="filters__body">
                  <div className="filters__title">Уточнить поиск</div>
                  <ul className="filters__filters-box">
                    <li className="filters__filter">
                      <div className="filters__subtitle">Площадь помещения</div>
                      <ul className="filters__list">
                        <li className="filters__item">
                          20 м<sup>2</sup>
                        </li>
                        <li className="filters__item">
                          25 м<sup>2</sup>
                        </li>
                        <li className="filters__item">
                          30 м<sup>2</sup>
                        </li>
                        <li className="filters__item">
                          35 м<sup>2</sup>
                        </li>
                        <li className="filters__item">
                          40 м<sup>2</sup>
                        </li>
                        <li className="filters__item">
                          50 м<sup>2</sup>
                        </li>
                        <li className="filters__item">
                          более 50 м<sup>2</sup>
                        </li>
                      </ul>
                    </li>
                    <li className="filters__filter">
                      <div className="filters__subtitle">Технология</div>
                      <ul className="filters__list">
                        <li className="filters__item">Инверторная</li>
                        <li className="filters__item">on/off</li>
                      </ul>
                    </li>
                    <li className="filters__filter">
                      <div className="filters__subtitle">Категория</div>
                      <ul className="filters__list">
                        <li className="filters__item">Настенные</li>
                        <li className="filters__item">Мобильные</li>
                      </ul>
                    </li>
                    <li className="filters__filter">
                      <div className="filters__subtitle">Марка</div>
                      <ul className="filters__list">
                        <li className="filters__item">TCL</li>
                        <li className="filters__item">Haeir</li>
                        <li className="filters__item">Chigo</li>
                        <li className="filters__item">Ballu</li>
                        <li className="filters__item">Gree</li>
                        <li className="filters__item">MDV</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="filters__button-wrapper _button-wrapper ">
                    <div className="filters__button _button">ПОДОБРАТЬ</div>
                  </div>
                </div>
              </div>
              <div className="catalog__cards">{catalogPage}</div>
            </div>
            <div className="catalog__pagination-box">
              <div className="catalog__pagination">
                <Pagination
                  cardsPerPage={limit}
                  totalCards={posts.length}
                  onPageChange={handlePageChange}
                  pagesCounter={Math.ceil(Number(posts.length / limit))}
                  page={currentPage}
                />
                <button type="button" onClick={handleClickPrevBtn}>
                  <NavLink
                    className={
                      currentPage === 1
                        ? 'catalog__button-prev catalog__button-prev-invisible'
                        : 'catalog__button-prev _button'
                    }
                    to={`/catalog/pages/${currentPage - 1}`}
                  >
                    <img src={vectorLeft} alt="vectorLeft" className="catalog__vector" />
                  </NavLink>
                </button>
                <button type="button" onClick={handleClickNextBtn}>
                  <NavLink
                    className={
                      currentPage === Math.ceil(Number(posts.length / limit))
                        ? 'catalog__button-next catalog__button-next-invisible'
                        : 'catalog__button-next _button'
                    }
                    to={`/catalog/pages/${currentPage + 1}`}
                  >
                    <img src={vectorRight} alt="vectorRight" className="catalog__vector" />
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="catalog__error">
            <div className="catalog__error-text">Такой страницы не существует</div>
          </div>
        )}
      </div>
    </div>
  );
};
