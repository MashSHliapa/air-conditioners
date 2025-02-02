import { useLocation } from 'react-router-dom';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { Title } from '../../components/Title/Title';
import { Filters } from '../../components/Filters/Filters';
import { NothingFound } from '../../components/NothingFound/NothingFound';
import { ICardItem } from '../../types/interfaces';
import search from '../../images/magnifying_glass.png';
import './SearchResults.scss';

export const SearchResults = () => {
  const location = useLocation();

  const filteredPosts = location.state.posts;

  const posts = filteredPosts.map((item: ICardItem) => <CatalogCard key={item.id} post={item} />);

  return (
    <div className="search-results">
      <div className="search-results__container _container">
        <div className="search-results__body _body-cards">
          <div className="search-results__title _title-start">
            <Title>Результаты поиска</Title>
          </div>
          {posts.length > 0 ? (
            <>
              <div className="search-results__total">По Вашему запросу найдено {filteredPosts.length} товара(ов)</div>
              <div className="search-results__content-box _content-box">
                <Filters />
                <div className="search-results__data">
                  <div className="search-results__cards _cards">{posts}</div>
                </div>
              </div>
            </>
          ) : (
            <div className="search-results__nothing-found">
              <NothingFound
                image={search}
                subtitle="Ничего не нашлось по Вашему запросу"
                text="Попробуйте поискать по-другому или сократить запрос"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
