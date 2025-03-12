import { InfoAndFeedback } from '../../components/InfoAndFeedback/InfoAndFeedback';
import { Return } from '../../components/Return/Return';
import { Title } from '../../components/Title/Title';
import './Repair.scss';

export const Repair = () => {
  return (
    <div className="repair" id="repair">
      <div className="repair__container _container">
        <div className="repair__body">
          <div className="repair__return">
            <Return />
          </div>
          <div className="repair__repair-content">
            <div className="repair__description">
              <div className="repair__title">
                <Title>Ремонт</Title>
              </div>
              <ul className="repair__conditions">
                <li className="repair__condition _triangle-pointer _text-indent">
                  Мы занимаемся ремонт холодильного оборудования любой сложности.{' '}
                </li>
                <li className="repair__condition _triangle-pointer _text-indent">
                  Так же производим прокладку коммуникаций во время ремонта и доустановки кондиционера после ремонта.{' '}
                </li>
                <li className="repair__condition _triangle-pointer _text-indent">
                  Наш специалист выезжает на объект.{' '}
                </li>
              </ul>
              <div className="repair__text">
                Ремонт торгового холодильного оборудования в Борисове начинается с полной диагностики холодильного
                шкафа, после чего мастер составляет список работ по устранению неисправности. Самые востребованные
                ремонтные работы: устранение утечки фреона, чистка конденсатора воздушного охлаждения, замена
                вентилятора обдува конденсатора, дозаправка фреоном, настройка электронного контроллера. Обычно, все
                работы по ремонту холодильников, холодильных витрин холодильных и морозильных шкафов проводятся в
                течении одного дня.
              </div>
            </div>
            <div className="repair__image"></div>
          </div>
          <InfoAndFeedback>Нужен ремонт?</InfoAndFeedback>
        </div>
      </div>
    </div>
  );
};
