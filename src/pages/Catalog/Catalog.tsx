import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Title } from '../../components/Title/Title';
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import './Catalog.scss';

export const Catalog = () => {
  const posts = useSelector((state: RootState) => state.catalog.data);

  const catalog = posts.map((item) => <CatalogCard key={item.id} post={item} />);

  return (
    <div className="catalog">
      <div className="catalog__container _container">
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
            <div className="catalog__cards">{catalog}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
