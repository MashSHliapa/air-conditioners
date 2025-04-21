import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schemaValidation';
import { Title } from '../Title/Title';
import { MessageSuccess } from '../MessageSuccess/MessageSuccess';
import { MessageError } from '../MessageError/MessageError';
import { FormDataType } from '../../types/interfaces';
import './Form.scss';
import { Loading } from '../Loading/Loading';

export const Form = () => {
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormDataType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleInputPhoneAfterCountryCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const cursorPosition = event.target.selectionStart;

    if (inputValue.length === 0 || inputValue.length <= 4) {
      setPhone('+375');
    } else if ((cursorPosition as number) <= 4) {
      event.preventDefault();
    } else {
      const newValue = inputValue.slice(0, 4) + inputValue.slice(4).replace(/[^0-9]/g, '');
      setPhone(newValue);
    }
  };

  const handleInputPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputPhoneAfterCountryCode(event);
    register('phone').onChange(event);
  };

  const handleFocusPhone = () => {
    if (phone === '' || phone === '+375') {
      setPhone('+375');
    }
  };

  const handleBlurPhone = () => {
    if (phone === '+375') {
      setPhone('');
    }
  };

  const onSubmitForm = async (data: FormDataType) => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('text', data.text);
      formData.append('agreement', data.agreement ? 'true' : 'false');

      const response = await fetch('http://localhost:3040/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        reset();
        setSuccess(true);
        setPhone('');
      } else {
        setError(true);
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (success || error || loading) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = '';
  }

  return (
    <>
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
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <div className="form__item">
                  <input
                    type="text"
                    id="name"
                    className="form__input"
                    required
                    {...register('name')}
                    placeholder="Ваше имя"
                  />
                  {errors.name && <span className="form__error">{errors.name.message}</span>}
                </div>

                <div className="form__item">
                  <input
                    type="email"
                    id="email"
                    className="form__input"
                    required
                    {...register('email')}
                    placeholder="E-mail"
                  />
                  {errors.email && <span className="form__error">{errors.email.message}</span>}
                </div>

                <div className="form__item">
                  <input
                    type="phone"
                    id="phone"
                    className="form__input"
                    placeholder="Телефон"
                    required
                    {...register('phone')}
                    value={phone}
                    onChange={handleInputPhone}
                    onFocus={handleFocusPhone}
                    onBlur={handleBlurPhone}
                  />
                  {errors.phone && <span className="form__error">{errors.phone.message}</span>}
                </div>

                <div className="form__item">
                  <textarea
                    id="text"
                    className="form__input"
                    placeholder="Текст сообщения"
                    required
                    {...register('text')}
                  ></textarea>
                  {errors.text && <span className="form__error">{errors.text.message}</span>}
                </div>

                <div className="form__item">
                  <div className="form__agreement agrement">
                    <label htmlFor="agreement" className="agreement__label">
                      <input
                        type="checkbox"
                        id="agreement"
                        className="agreement__default-button"
                        required
                        {...register('agreement')}
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
                  <button
                    type="submit"
                    className={isValid && isDirty ? 'form__button _button' : 'form__button form__button_disabled'}
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading>Идет отправка</Loading>}
      {success && <MessageSuccess closeForm={() => setSuccess(false)} />}
      {error && <MessageError closeForm={() => setError(false)} />}
    </>
  );
};
