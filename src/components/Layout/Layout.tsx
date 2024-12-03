import { Main } from '../../pages/Main/Main';
import { WorkSteps } from '../../pages/WorkSteps/WorkSteps';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <WorkSteps />
    </div>
  );
}
