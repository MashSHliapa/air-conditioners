import instagram from '../../assets/icons/instagram.svg';
import youtube from '../../assets/icons/youtube.svg';
import './ModeAndSocialMedia.scss';

export const ModeAndSocialMedia = () => {
  return (
    <div className="mode-links">
      <div className="mode-links__mode">
        Режим работы: ежедневно <span>с 8:00 до 22:00</span>
      </div>
      <div className="mode-links__icons">
        <div className="mode-links__icon _icon">
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="mode-links__icon _icon">
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};
