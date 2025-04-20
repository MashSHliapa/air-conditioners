import { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import { RootState } from '../../redux/store';
import search from '../../assets/icons/search.svg';
import './SearchForm.scss';

export const SearchForm = () => {
  const [query, setQuery] = useState('');

  const { data: posts } = useSelector((state: RootState) => state.catalog);
  const navigate = useNavigate();

  const getPostsWitnQuery = () => {
    return posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  };

  const handleInputQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) return;
    const filteredPosts = getPostsWitnQuery();
    navigate(`/search`, { state: { posts: filteredPosts } });
    scrollToPage('search-results');
    setQuery('');
  };

  return (
    <div className="search-form">
      <form action="#" className="search-form__item" onSubmit={handleSubmitForm}>
        <input
          type="text"
          data-value="Ошибка"
          className="search-form__input"
          value={query}
          onChange={handleInputQuery}
        ></input>
        <button type="submit" className="search-form__button">
          <img src={search} alt="search" />
        </button>
      </form>
    </div>
  );
};
