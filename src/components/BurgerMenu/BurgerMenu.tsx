import { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  function handleClickToggleNavbar() {
    setOpenNavbar(!openNavbar);
    document.body.style.overflow = openNavbar ? 'auto' : 'hidden';

    const burgerIcon = document.querySelector('.burger__icon');
    burgerIcon?.classList.toggle('_active');

    const navbarBody = document.querySelector('.navbar__body');
    navbarBody?.classList.toggle('_active');
  }

  useEffect(() => {
    const handleClickCloseNavbar = (event: MouseEvent | React.MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest('.burger__icon') &&
        !(event.target as HTMLElement).closest('.navbar__item_menu')
      ) {
        setOpenNavbar(false);
        document.body.style.overflow = !openNavbar ? 'auto' : 'hidden';
        const burgerIcon = document.querySelector('.burger__icon');
        burgerIcon?.classList.remove('_active');
      }
    };

    document.addEventListener('click', handleClickCloseNavbar);
    return () => document.removeEventListener('click', handleClickCloseNavbar);
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <nav className="burger">
      <div className="burger__icon" onClick={handleClickToggleNavbar}>
        <span></span>
      </div>
      <div className={`nav ${openNavbar ? 'nav__display-block' : 'nav__display-none'}`}>
        <div className="burger__navbar">
          <Navbar />
        </div>
      </div>
    </nav>
  );
};
