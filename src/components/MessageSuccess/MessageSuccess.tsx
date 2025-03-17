import success from '../../icons/success.svg';
import '../MessageError/Messages.scss';

export function MessageSuccess({ closeForm }: { closeForm: () => void }) {
  const onClickCloseMessage = () => {
    const message = document.querySelector('.message');
    if (message) {
      closeForm();
    }
  };

  return (
    <div className="message _message-fixed">
      <div className="message__body">
        <div className="message__icon">
          <img src={success} alt="success" />
        </div>
        <h2 className="message__text">
          СПАСИБО!
          <br />
          ВАША ЗАЯВКА ОТПРАВЛЕНА!
        </h2>
        <div className="message__button _button" onClick={onClickCloseMessage}>
          ок
        </div>
      </div>
    </div>
  );
}
