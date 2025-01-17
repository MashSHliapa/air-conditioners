import { Logo } from '../Logo/Logo';
import { ModeAndSocialMedia } from '../ModeAndSocialMedia/ModeAndSocialMedia';
import { PhonesAndSocialMedia } from '../PhonesAndSocialMedia/PhonesAndSocialMedia';
import { Navbar } from '../Navbar/Navbar';
import { Data } from '../Data/Data';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__contacts">
            <div className="footer__logo">
              <Logo />
            </div>
            <ModeAndSocialMedia />
            <PhonesAndSocialMedia />
          </div>
          <div className="footer__navbar">
            <div className="footer__title">Меню:</div>
            <Navbar />
          </div>
          <div className="footer__data">
            <Data />
          </div>
        </div>
      </div>
    </footer>
  );
};
