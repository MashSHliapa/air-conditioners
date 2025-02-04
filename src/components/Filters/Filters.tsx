import { NavLink } from 'react-router-dom';
import './Filters.scss';

export const Filters = ({
  activeFilters,
  addFeatures,
  activeSort,
  onFilterChange,
  onSortChange,
  getAddFeatures,
  onResetAllFilters,
}: {
  activeFilters: { [key: string]: unknown };
  addFeatures: string[] | null;
  activeSort: string | null;
  onFilterChange: (filterKey: string, value: string | number) => void;
  onSortChange: (sortType: string) => void;
  getAddFeatures: (functionName: string) => void;
  onResetAllFilters: () => void;
}) => {
  const availableFunctions = [
    'УФ-лампа',
    'Подсос свежего воздуха',
    'Ионизатор',
    'Защита от простуды',
    'Антибактериальный фильтр',
  ];

  const isActive = (filterKey: string, value: string | number) =>
    Array.isArray(activeFilters[filterKey]) && activeFilters[filterKey].includes(value);

  const filterSquare = [
    { key: 'square', value: 20, label: '20 м2' },
    { key: 'square', value: 25, label: '25 м2' },
    { key: 'square', value: 35, label: '35 м2' },
    { key: 'square', value: 50, label: '50 м2 и более' },
  ];

  const filterBrand = [
    { key: 'brand', value: 'TCL', label: 'TCL' },
    { key: 'brand', value: 'Haeir', label: 'Haeir' },
    { key: 'brand', value: 'Chigo', label: 'Chigo' },
    { key: 'brand', value: 'Ballu', label: 'Ballu' },
    { key: 'brand', value: 'Gree', label: 'Gree' },
    { key: 'brand', value: 'MDV', label: 'MDV' },
  ];

  const filtersTechnology = [
    { key: 'technology', value: 'Инверторная', label: 'Инверторная' },
    { key: 'technology', value: 'on/off', label: 'on/off' },
  ];

  return (
    <div className="filters">
      <div className="filters__body">
        <div className="filters__title">Уточнить поиск</div>
        <ul className="filters__filters-box">
          <li className="filters__filter">
            <div className="filters__subtitle">Площадь помещения</div>
            <ul className="filters__list">
              {filterSquare.map(({ key, value, label }) => (
                <NavLink
                  to={`/catalog/pages/1`}
                  className={`filters__item ${isActive(key, value) ? 'filters__item-active' : ''}`}
                  key={value}
                  onClick={() => onFilterChange(key, value)}
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </li>
          <li className="filters__filter">
            <div className="filters__subtitle">Марка</div>
            <ul className="filters__list">
              {filterBrand.map(({ key, value, label }) => (
                <NavLink
                  to={`/catalog/pages/1`}
                  className={`filters__item ${isActive(key, value) ? 'filters__item-active' : ''}`}
                  key={value}
                  onClick={() => onFilterChange(key, value)}
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </li>
          <li className="filters__filter">
            <div className="filters__subtitle">Функции</div>
            <ul className="filters__list">
              {availableFunctions.map((fn) => (
                <NavLink
                  to={`/catalog/pages/1`}
                  key={fn}
                  className={`filters__item ${addFeatures && addFeatures.includes(fn) ? 'filters__item-active' : ''}`}
                  onClick={() => getAddFeatures(fn)}
                >
                  {fn}
                </NavLink>
              ))}
            </ul>
          </li>
          <li className="filters__filter">
            <div className="filters__subtitle">Технология</div>
            <ul className="filters__list">
              {filtersTechnology.map(({ key, value, label }) => (
                <NavLink
                  to={`/catalog/pages/1`}
                  className={`filters__item ${isActive(key, value) ? 'filters__item-active' : ''}`}
                  key={value}
                  onClick={() => onFilterChange(key, value)}
                >
                  {label}
                </NavLink>
              ))}
            </ul>
          </li>
          <li className="filters__filter">
            <div className="filters__subtitle">Сортировка по цене</div>
            <ul className="filters__list">
              <NavLink
                to="/catalog/pages/1"
                className={`filters__item ${activeSort === 'asc' ? 'filters__item-active' : ''}`}
                onClick={() => onSortChange('asc')}
              >
                По возрастанию
              </NavLink>
              <NavLink
                to="/catalog/pages/1"
                className={`filters__item ${activeSort === 'desc' ? 'filters__item-active' : ''}`}
                onClick={() => onSortChange('desc')}
              >
                По убыванию
              </NavLink>
            </ul>
          </li>
        </ul>
        <div className="filters__buttons">
          <div className="filters__buttons-wrapper _button-wrapper">
            <div className="filters__button _button">СМОТРЕТЬ</div>
          </div>
          <div className="filters__buttons-wrapper _button-wrapper">
            <div className="filters__button-reset" onClick={() => onResetAllFilters()}>
              Сбросить все
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
