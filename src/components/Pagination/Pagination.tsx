import { NavLink } from 'react-router-dom';
import { scrollToPage } from '../../helpers/scrollToPage';
import './Pagination.scss';

export const Pagination = ({
  onPageChange,
  page,
  pagesCounter,
}: {
  cardsPerPage: number;
  totalCards: number;
  onPageChange: (pageNumber: number) => void;
  page: number;
  pagesCounter: number;
}) => {
  const pageNumbers = [];

  const maxVisiblePages = 5;
  let startPage = Math.max(page - Math.floor(maxVisiblePages / 2), 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, pagesCounter);

  if (endPage - startPage < maxVisiblePages - 1) {
    if (startPage === 1) {
      endPage = Math.min(maxVisiblePages, pagesCounter);
    } else if (endPage === pagesCounter) {
      startPage = Math.max(1, pagesCounter - maxVisiblePages + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination__list">
          {pageNumbers.map((number) => (
            <li className="pagination__item" key={number} onClick={() => scrollToPage('catalog')}>
              <NavLink
                to={`/catalog/pages/${number}`}
                className={({ isActive }) =>
                  isActive ? 'pagination__link pagination__link-active' : 'pagination__link'
                }
                onClick={() => onPageChange(number)}
              >
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
