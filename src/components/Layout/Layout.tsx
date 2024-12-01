import { Main } from '../../pages/Main/Main';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
    </div>
  );
}
