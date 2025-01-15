import { About } from '../../pages/About/About';
import { Contacts } from '../../pages/Contacts/Contacts';
import { ContactsBoxes } from '../../pages/ContactsBoxes/ContactsBoxes';
import { Kinds } from '../../pages/Kinds/Kinds';
import { Main } from '../../pages/Main/Main';
import { PaymentAndDelivery } from '../../pages/PaymentAndDelivery/PaymentAndDelivery';
import { WorkSteps } from '../../pages/WorkSteps/WorkSteps';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <PaymentAndDelivery />
      <WorkSteps />
      <Contacts />
      <ContactsBoxes />
      <Kinds />
      <About />
    </div>
  );
}
