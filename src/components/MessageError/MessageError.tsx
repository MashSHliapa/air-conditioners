import error from '../../assets/icons/error.svg';
import './Messages.scss';

export function MessageError({ closeForm }: { closeForm: () => void }) {
  const onClickCloseMessage = () => {
    const message = document.querySelector('.message');
    if (message) {
      closeForm();
    }
  };
  return (
    <div className="message _message-fixed">
      <div className="message__body">
        <div className="message__icon message__icon_error">
          <img src={error} alt="success" />
        </div>
        <h2 className="message__text message__text_error">
          УПС!!!
          <br />
          что-то пошло не так
        </h2>
        <div className="message__button _button" onClick={onClickCloseMessage}>
          Закрыть
        </div>
      </div>
    </div>
  );
}
