import { useLocation } from 'react-router-dom';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { Title } from '../../components/Title/Title';
import { ICardItem } from '../../types/interfaces';
import './SearchResults.scss';

export const SearchResults = () => {
  const location = useLocation();

  const filteredPosts = location.state.posts;

  const posts = filteredPosts.map((item: ICardItem) => <CatalogCard key={item.id} post={item} />);

  return (
    <div className="search-results">
      <div className="search-results__container _container">
        <div className="search-results__body">
          <div className="search-results__title">
            <Title>Результаты поиска</Title>
          </div>
          <div className="search-results__total">По Вашему запросу найдено {filteredPosts.length} товара(ов)</div>
          <div className="search-results__content-box">
            <div className="search-results__cards">{posts}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
