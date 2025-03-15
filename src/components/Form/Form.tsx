import { Title } from '../Title/Title';
import './Form.scss';

export const Form = () => {
  return (
    <div className="form">
      <div className="form__container _container">
        <div className="form__body">
          <div className="form__info">
            <div className="form__title">
              <Title>Заполните форму заявки</Title>
            </div>
            <div className="form__subtitle">
              Оставьте заявку, мы свяжемся с вами и проконсультируем по любому вопросу.
            </div>
          </div>
          <div className="form__form">
            <form
              action="#"
              method="POST"
              id="form"
              // autoComplete="off"
            >
              <div className="form__item">
                <input type="text" name="name" id="name" className="form__input" placeholder="Ваше имя" />
              </div>

              <div className="form__item">
                <input type="email" name="email" id="email" className="form__input" placeholder="E-mail" />
              </div>

              <div className="form__item">
                <input type="phone" name="phone" id="phone" className="form__input" placeholder="Телефон" />
              </div>

              <div className="form__item">
                <textarea name="message" id="message" className="form__input" placeholder="Текст сообщения"></textarea>
              </div>

              <div className="form__item">
                <div className="form__agreement agrement">
                  <label htmlFor="agreement" className="agreement__label">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="agreement__default-button"
                      required
                      name="agreement"
                    />
                    <span className="agreement__new-button"></span>
                    <span>
                      Я даю согласие на обработку персональных данных в соответствии с{' '}
                      <a href="#">политикой конфиденциальности</a>
                    </span>
                  </label>
                </div>
              </div>

              <div className="form__button-wrapper _button-wrapper">
                <button type="submit" className="form__button _button">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
