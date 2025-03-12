import './InfoAndFeedback.scss';
export const InfoAndFeedback = (props: { children?: React.ReactNode }) => {
  return (
    <div className="info-and-feedback">
      <div className="info-and-feedback__text">
        {props.children} <br /> Позвоните нам{' '}
        <span className="note">
          <a href="tel:+375255106277">+375 25 510 62 77</a>
        </span>
        ;{' '}
        <span className="note">
          <a href="tel:+375257886106">+375 25 77 86 106</a>
        </span>
        <br /> или оставьте заявку и мы с Вами свяжемся
      </div>
      <div className="info-and-feedback__button-wrapper _button-wrapper">
        <div className="info-and-feedback__button _button">Оставить заявку</div>
      </div>
    </div>
  );
};
