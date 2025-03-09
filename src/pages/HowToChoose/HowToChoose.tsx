import { Title } from '../../components/Title/Title';
import { Discount } from '../../components/Discount/Discount';
import './HowToChoose.scss';

export const HowToChoose = () => {
  return (
    <div className="how-to-choose">
      <div className="how-to-choose__container _container">
        <div className="how-to-choose__body">
          <div className="how-to-choose__image"></div>
          <div className="how-to-choose__content-box">
            <div className="how-to-choose__title">
              <Title>КАК ВЫБРАТЬ КОНДИЦИОНЕР</Title>
            </div>

            <h5 className="how-to-choose__text">
              При выборе кондиционера есть много тонкостей, на которые стоит обратить внимание. Для начала определитесь,
              для чего Вам нужен кондиционер: только для охлаждения в жару или еще и для обогрева в межсезонье.
            </h5>
            <div className="how-to-choose__image-mobile1"></div>

            <div className="how-to-choose__important-info">
              <div className="how-to-choose__subtitle">ВАЖНО ЗНАТЬ!</div>
              <div className="how-to-choose__separator"></div>
            </div>

            <h5 className="how-to-choose__text">
              Не все кондиционеры можно включать при низких температурах. Диапазон температуры на улице, при которой
              может работать кондиционер, указаны в характеристиках к определенной модели и может сильно отличаться от
              других.
            </h5>
            <ul className="how-to-choose__conditions">
              <li className="how-to-choose__condition _triangle-pointer _text-indent">
                Следующий шаг определить на сколько чувствительная должна быть техника:
                <ul className="how-to-choose__conditions-row">
                  <li className="how-to-choose__conditions-column">
                    Инверторные кондиционеры могут регулировать температуру с высокой точностью. Хотя они стоят дороже,
                    но используются чаще.
                  </li>
                  <li className="how-to-choose__conditions-column">
                    Кондиционеры on/off допускают колебание температур в пределах 2 С от заданной температуры, если для
                    жильцов дома это не является существенным, то разница в цене Вас приятно удивит.
                  </li>
                </ul>
              </li>
              <li className="how-to-choose__condition _triangle-pointer _text-indent">
                Нужно решить на сколько важна для Вас громкость работы кондиционера. Инверторные кондиционеры работают
                тише. Еще одним плюсом этих кондиционеров, по сравнению с кондиционерами on/off, является меньшее
                энергопотребление.
              </li>
              <li className="how-to-choose__condition _triangle-pointer _text-indent">
                Есть еще много дополнительных функций, таких как Wi-Fi (по дороге с работы можно задать нужную
                температуру в доме к вашему приезду), различные фильтры очистки и воздуха.
              </li>
              <li className="how-to-choose__condition _triangle-pointer _text-indent">
                Когда с этими параметрами определились, нужно рассчитать мощность кондиционера, она зависит от площади
                помещения, которое будет охлаждаться или обогреваться. Если в помещении много окон на солнечной стороне,
                или квартира находится на верхнем этаже и крыша сильно прогревается, то лучше взять кондиционер чуть
                большей мощности.
              </li>
            </ul>
            <div className="how-to-choose__image-mobile2"></div>
          </div>
        </div>

        <div className="how-to-choose__discount-condition discount-condition">
          <div className="discount-condition__body">
            <div className="discount-condition__discount">
              <Discount />
            </div>
            <div className="discount-condition__text">
              Когда модель кондиционера выбрана, мы заказываем ее у поставщика. Мы работаем только с проверенными
              поставщиками и даем гарантию на кондиционеры и монтаж до 5 лет. Обычно время доставки к Вашему дому не
              более 2-3 дней. <br /> В день доставки проводим замер, чтобы определить необходимую длину труб и кабеля,
              это занимает около 20-30 минут и договариваемся о времени монтажа. Сам монтаж в зависимости от сложности
              занимает 2-3 часа. В нашей команде есть промышленный альпинист, поэтому мы выполняем монтаж любой
              сложности. Работаем быстро и чисто, после нашего монтажа Вам не нужно делать уборку, просто садитесь на
              диван и наслаждаетесь.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
