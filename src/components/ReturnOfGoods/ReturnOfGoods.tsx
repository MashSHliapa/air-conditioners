import { useState } from 'react';
import { Title } from '../Title/Title';
import vectorClose from '../../icons/vector_big_close.svg';
import vectorOpen from '../../icons/vector_big_open.svg';
import './ReturnOfGoods.scss';

export const ReturnOfGoods = () => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  const handleClickOpenDescription = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const vectorBtn = isOpenDescription ? vectorOpen : vectorClose;

  return (
    <div className="return-of-goods">
      <div className="return-of-goods__container _container">
        <div className="return-of-goods__body">
          <div className="return-of-goods__header">
            <div className="return-of-goods__title">
              <Title>Возврат товара</Title>
            </div>
            <div className="return-of-goods__vector" onClick={handleClickOpenDescription}>
              <img src={vectorBtn} alt="vector" />
            </div>
          </div>
          {isOpenDescription && (
            <p className="return-of-goods__text">
              <span>
                При оплате банковской платежной карточкой возврат наличными денежными средствами не допускается. Расчеты
                с потребителем при возврате уплаченной за товар денежной суммы, при расторжении договора о выполнении
                работы (оказании услуги) осуществляются в той же форме, в которой производилась оплата товара, работы
                (услуги), если иное не предусмотрено соглашением сторон.
              </span>
              <span>Порядок возврата регулируется правилами платежных систем.</span>
              <span>
                Процедура возврата товара регламентируется Законом Республики Беларусь от 9 января 2002 г. N 90-З «О
                защите прав потребителей».
              </span>
              <span>
                Потребитель вправе отказаться от товара в течение 14 (четырнадцати) дней с момента передачи ему товара;
              </span>
              <span>
                Потребитель вправе в одностороннем порядке отказаться от исполнения договора о выполнении работы
                (оказании услуги) при условии оплаты исполнителю фактически понесенных им расходов, если иное не
                предусмотрено законодательством.
              </span>
              <span>
                Требование потребителя об обмене либо возврате качественного товара подлежит удовлетворению, если товар
                не был в употреблении, сохранены его потребительские свойства и имеются доказательства приобретения его
                у данного продавца.
              </span>
              <span>
                Перечень непродовольственных товаров надлежащего качества, не подлежащих обмену и возврату, утверждается
                Правительством Республики Беларусь.
              </span>
              <span>
                Для возврата денежных средств на банковскую платежную карточку необходимо заполнить «Заявление о
                возврате денежных средств» и отправить его по электронному адресу mrnkndrt@gmail.com
              </span>
              <span>
                Возврат денежных средств будет осуществлен на банковскую платежную карточку в течение 7 (семи)
                календарных дней со дня получения «Заявление о возврате денежных средств» Компанией (если иное не
                предусмотрено банком). Сумма возврата будет равняться сумме покупки.
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
