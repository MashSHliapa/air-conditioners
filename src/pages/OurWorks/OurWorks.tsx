import { Title } from '../../components/Title/Title';
import { ModeAndSocialMedia } from '../../components/ModeAndSocialMedia/ModeAndSocialMedia';
import photo from '../../images/our_works.jpg';
import './OurWorks.scss';

export const OurWorks = () => {
  return (
    <div className="our-works">
      <div className="our-works__container _container">
        <div className="our-works__body">
          <div className="our-works__title">
            <Title>НАШИ РАБОТЫ</Title>
          </div>
          <div className="our-works__images-box">
            <div className="our-works__image">
              <img src={photo} alt="photo" />
            </div>
            <div className="our-works__image">
              <img src={photo} alt="photo" />
            </div>
            <div className="our-works__image">
              <img src={photo} alt="photo" />
            </div>
            <div className="our-works__image">
              <img src={photo} alt="photo" />
            </div>
            <div className="our-works__image">
              <img src={photo} alt="photo" />
            </div>
            <div className="our-works__image">
              <img src={photo} alt="photo" />
            </div>
          </div>
          <div className="our-works__more-works">
            <div className="our-works__subtitle">Больше наших работ смотрите тут</div>
            <div className="our-works__social-media">
              <ModeAndSocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
