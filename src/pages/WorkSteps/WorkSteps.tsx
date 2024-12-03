import './WorkSteps.scss';

export const WorkSteps = () => {
  return (
    <div className="workSteps">
      <div className="workSteps__container _container">
        <div className="workSteps__body">
          <div className="workSteps__title">Как мы работаем</div>
          <div className="workSteps__steps">
            <div className="workSteps__step step">
              <h3 className="step__title">ШАГ 1</h3>
              <h4 className="step__subtitle">Получение заявки:</h4>
              <h4 className="step__text">
                {' '}
                Вы обращаетесь в компанию по телефону{' '}
                <span>
                  <a href="tel: +375 25 510 62 77">+375 25 510 62 77</a>.
                </span>{' '}
                Оставляете заявку на покупку и установку кондиционера. Наш специалист уточнит у Вас детали заказа.
              </h4>
            </div>
            <div className="workSteps__step step">
              <h3 className="step__title">ШАГ 2</h3>
              <h4 className="step__subtitle">Консультация специалиста:</h4>
              <h4 className="step__text">
                {' '}
                На этапе заявки наш специалист может проконсультировать Вас по выбору оптимального типа кондиционера его
                мощности расположения в помещении. А так же о деталях монтажа.
              </h4>
            </div>
            <div className="workSteps__step step">
              <h3 className="step__title">ШАГ 3</h3>
              <h4 className="step__subtitle">Выбор и заказ:</h4>
              <h4 className="step__text">
                {' '}
                После выбора модели мы производим заказ кондиционера. Доставка занимает не более 2-3 дней. Оплата
                осуществляется удобным для вас способом: наличными, карта или через ЕРИП. Доставка бесплатная.
              </h4>
            </div>
            <div className="workSteps__step step">
              <h3 className="step__title">ШАГ 4</h3>
              <h4 className="step__subtitle">Замеры:</h4>
              <h4 className="step__text">
                {' '}
                Наш специалист производит замеры для определения места монтажа, расчёта длины труб и кабеля. Это
                занимает около 20 минут. Трубы и кабели входят в стоимость монтажа. После замеров с Вами будет
                согласовано дата и время монтажа.
              </h4>
            </div>
            <div className="workSteps__step step">
              <h3 className="step__title">ШАГ 5</h3>
              <h4 className="step__subtitle">Установка кондиционера:</h4>
              <h4 className="step__text">
                {' '}
                В зависимости от сложности монтаж занимает около 2-3 часов. Уборка после нашей работы не требуется.
                После завершения установки кондиционера специалисты проводят тестирование системы и проверяют её
                работоспособность.
              </h4>
            </div>
            <div className="workSteps__step step">
              <h3 className="step__title">ШАГ 6</h3>
              <h4 className="step__subtitle">Сервис:</h4>
              <h4 className="step__text">
                {' '}
                Мы оказываем услуги по обслуживания кондиционера приобретенного у нас. Сервис производится 1 раз в год,
                в начале сезона. А при круглогодичном использовании 2 раза в год.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
