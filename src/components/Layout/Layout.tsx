import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Outlet />
      <Footer />
    </div>
  );
}
