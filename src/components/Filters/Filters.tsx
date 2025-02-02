import './Filters.scss';

export const Filters = () => {
  return (
    <div className="filters">
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
                35 м<sup>2</sup>
              </li>
              <li className="filters__item">
                50 м<sup>2</sup> и более
              </li>
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
          <li className="filters__filter">
            <div className="filters__subtitle">Функции</div>
            <ul className="filters__list">
              <li className="filters__item">УФ-лампа</li>
              <li className="filters__item">Подсос свежего воздуха</li>
              <li className="filters__item">Ионизатор</li>
              <li className="filters__item">Защита от простуды</li>
              <li className="filters__item">Антибактериальный фильтр</li>
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
            <div className="filters__subtitle">Сортировка по цене</div>
            <ul className="filters__list">
              <li className="filters__item">По возрастанию</li>
              <li className="filters__item">По убыванию</li>
            </ul>
          </li>
        </ul>
        <div className="filters__buttons">
          <div className="filters__buttons-wrapper _button-wrapper">
            <div className="filters__button _button">ПОДОБРАТЬ</div>
          </div>
          <div className="filters__buttons-wrapper _button-wrapper">
            <div className="filters__button-reset">Сбросить все</div>
          </div>
        </div>
      </div>
    </div>
  );
};
