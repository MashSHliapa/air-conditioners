import { About } from '../../pages/About/About';
import { Contacts } from '../../pages/Contacts/Contacts';
import { ContactsBoxes } from '../../pages/ContactsBoxes/ContactsBoxes';
import { HowToChoose } from '../../pages/HowToChoose/HowToChoose';
import { Kinds } from '../../pages/Kinds/Kinds';
import { Main } from '../../pages/Main/Main';
import { OurWorks } from '../../pages/OurWorks/OurWorks';
import { PaymentAndDelivery } from '../../pages/PaymentAndDelivery/PaymentAndDelivery';
import { WorkSteps } from '../../pages/WorkSteps/WorkSteps';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Layout.scss';

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <HowToChoose />
      <PaymentAndDelivery />
      <WorkSteps />
      <Contacts />
      <ContactsBoxes />
      <Kinds />
      <About />
      <OurWorks />
      <Footer />
    </div>
  );
}
