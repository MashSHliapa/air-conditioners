import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { Title } from '../../components/Title/Title';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { Filters } from '../../components/Filters/Filters';
import { Pagination } from '../../components/Pagination/Pagination';
import { NothingFound } from '../../components/NothingFound/NothingFound';
import { RootState } from '../../redux/store';
import { ActiveFilters, ICatalogCard } from '../../types/interfaces';
import vectorLeft from '../../icons/vector_left.svg';
import vectorRight from '../../icons/vector_right.svg';
import image from '../../images/magnifying_glass.png';
import './Catalog.scss';

export const Catalog = () => {
  const { data: posts, limit } = useSelector((state: RootState) => state.catalog);

  const [currentPage, setCurrentPage] = useState(Number(window.location.pathname.split('/').pop()) || 1);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({});
  const [activeSort, setActiveSort] = useState<string | null>(null);
  const [addFeatures, setAddFeatures] = useState<string[] | never>([]);

  const applyFiltersAndSort = (
    filters: Record<string, unknown>,
    sortType: string | null,
    functionFilter: string[] | null,
  ) => {
    let updatedPosts = posts;

    if (Object.keys(filters).length > 0) {
      updatedPosts = updatedPosts.filter((item) =>
        Object.entries(filters).every(([filterKey, filterValues]) => {
          return Array.isArray(filterValues)
            ? (filterValues as unknown[]).includes(item[filterKey as keyof ICatalogCard])
            : true;
        }),
      );
    }

    if (Array.isArray(functionFilter) && functionFilter?.length > 0) {
      updatedPosts = updatedPosts.filter((item) =>
        functionFilter.every((filterValue: string) => item.add_functions.includes(filterValue)),
      );
    }

    if (sortType) {
      updatedPosts = [...updatedPosts].sort((a, b) => (sortType === 'asc' ? a.price - b.price : b.price - a.price));
    }
    setCurrentPage(1);
    setFilteredPosts(updatedPosts);
  };

  const handleFilterChange = (key: string, value: string | number) => {
    setActiveFilters((prev) => {
      const currentValues = prev[key] || [];
      const newValues = currentValues.includes(value as string)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      const updatedFilters = {
        ...prev,
        [key]: newValues.length > 0 ? newValues : undefined,
      };
      applyFiltersAndSort(updatedFilters, activeSort, addFeatures);

      return updatedFilters;
    });
  };

  const handleSortChange = (sortType: string) => {
    const newSortType = sortType === activeSort ? null : sortType;
    setActiveSort(newSortType);
    applyFiltersAndSort(activeFilters, newSortType, addFeatures);
  };

  const getAddFeatures = (functionName: string) => {
    setAddFeatures((prev) => {
      let updatedFunctions;

      if (prev.includes(functionName)) {
        updatedFunctions = prev.filter((fn) => fn !== functionName);
      } else {
        updatedFunctions = [...prev, functionName];
      }
      applyFiltersAndSort(activeFilters, activeSort, updatedFunctions);
      return updatedFunctions;
    });
  };

  const onResetAllFilters = () => {
    setActiveFilters({});
    setFilteredPosts(posts);
    setActiveSort(null);
    addFeatures.length = 0;
  };

  const lastIndex = currentPage * limit;
  const startIndex = lastIndex - limit;

  const totalPages = Math.ceil(posts.length / limit);
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
    ? filteredPosts.slice(startIndex, lastIndex).map((item) => <CatalogCard key={item.id} post={item} />)
    : null;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="catalog">
      <div className="catalog__container _container">
        {isPageValid ? (
          <div className="catalog__body _body-cards">
            <div className="catalog__title">
              <Title>КАТАЛОГ</Title>
            </div>
            <div className="catalog__content-box _content-box">
              <div className="catalog__filters">
                <Filters
                  activeSort={activeSort}
                  onSortChange={handleSortChange}
                  onFilterChange={handleFilterChange}
                  activeFilters={activeFilters}
                  addFeatures={addFeatures}
                  getAddFeatures={getAddFeatures}
                  onResetAllFilters={onResetAllFilters}
                />
              </div>
              {catalogPage && catalogPage.length > 0 ? (
                <div className="catalog__cards _cards">{catalogPage}</div>
              ) : (
                <div className="catalog__cards cards-not-found">
                  <NothingFound image={image} subtitle="Ничего не найдено" />
                </div>
              )}
            </div>
            {filteredPosts.length > limit && (
              <div className="catalog__pagination-box">
                <div className="catalog__pagination">
                  <Pagination
                    cardsPerPage={limit}
                    totalCards={filteredPosts.length}
                    onPageChange={handlePageChange}
                    pagesCounter={Math.ceil(Number(filteredPosts.length / limit))}
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
                        currentPage === Math.ceil(Number(filteredPosts.length / limit))
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
            )}
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
