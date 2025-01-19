import { Title } from '../../components/Title/Title';
import photoLeft from '../../images/kinds_left.jpg';
import photoRight from '../../images/kinds_right.jpg';
import './Kinds.scss';

export const Kinds = () => {
  return (
    <div className="kinds">
      <div className="kinds__container _container">
        <div className="kinds__body">
          <div className="kinds__title">
            <Title>КАКИЕ БЫВАЮТ КОНДИЦИОНЕРЫ</Title>
          </div>
          <div className="kinds__subtitles">
            <h4 className="kinds__subtitle">по сфере использования</h4>
            <h4 className="kinds__subtitle">по принципу работы</h4>
            <h4 className="kinds__subtitle">по типу установки</h4>
          </div>
          <div className="kinds__photos">
            <div className="kinds__photo">
              <img src={photoLeft} alt="photo" />
            </div>
            <div className="kinds__photo">
              <img src={photoRight} alt="photo" />
            </div>
          </div>
          <div className="kinds__row">
            <div className="kinds__column">
              <h5 className="kinds__text-title  _triangle-pointer">Виды по сфере использования</h5>
              <h5 className="kinds__text-subtitle">
                В зависимости от области использования различают промышленные, коммерческие и бытовые кондиционеры.
                Основное их отличие заключается не столько в конструкции, сколько в мощности и максимальной
                обслуживаемой площади.
              </h5>
            </div>

            <div className="kinds__column kinds__column_center">
              <h5 className="kinds__text-title _triangle-pointer">Типы кондиционеров по принципу работы</h5>
              <h5 className="kinds__text-subtitle">
                Можно классифицировать на два типа: Линейные действуют в двух режимах: включения и выключения. <br />{' '}
                Они работают на максимальной мощности пока не нагонит нужную температуру. После этого отключаются и,
                когда температура повысится, включается снова. Инверторные приборы, работают в постоянном режиме с
                плавной регулировкой мощности. Они позволяют поддерживать заданный уровень температуры и одновременно
                экономить до 30% электроэнергии.
              </h5>
            </div>

            <div className="kinds__column">
              <h5 className="kinds__text-title _triangle-pointer">Разновидности кондиционеров по типу установки</h5>
              <h5 className="kinds__text-subtitle">
                Категория разновидностей по вариантам установки климатического оборудования считается самой обширной,
                так как включает в себя огромное число не только разнообразных классических, но универсальных вариантов.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
