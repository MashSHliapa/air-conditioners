import { Contacts } from '../../pages/Contacts/Contacts';
import { ContactsBoxes } from '../../pages/ContactsBoxes/ContactsBoxes';
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
    </div>
  );
}
