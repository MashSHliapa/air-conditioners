import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Catalog } from './pages/Catalog/Catalog';
import { HowToChoose } from './pages/HowToChoose/HowToChoose';
import { PaymentAndDelivery } from './components/PaymentAndDelivery/PaymentAndDelivery';
import { WorkSteps } from './pages/WorkSteps/WorkSteps';
import { Contacts } from './pages/Contacts/Contacts';
import { About } from './pages/About/About';
import { OurWorks } from './pages/OurWorks/OurWorks';
import { Kinds } from './pages/Kinds/Kinds';
import { CardItem } from './pages/CardItem/CardItem';
import { Favorites } from './pages/Favorites/Favorites';
import { SearchResults } from './pages/SearchResults/SearchResults';
import { OurServices } from './pages/OurServices/OurServices';
import { Repair } from './pages/Repair/Repair';
import { InstallationAndRemoval } from './pages/InstallationAndRemoval/InstallationAndRemoval';
import { Maintenance } from './pages/Maintenance/Maintenance';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/catalog/pages/1" replace={true} />,
      },
      {
        path: '/catalog/pages/:pageNumber',
        element: <Catalog />,
      },
      {
        path: '/selected/:postId',
        element: <CardItem />,
      },
      {
        path: '/search',
        element: <SearchResults />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/how-to-choose',
        element: <HowToChoose />,
      },
      {
        path: '/payment-and-delivery',
        element: <PaymentAndDelivery />,
      },
      {
        path: '/work-steps',
        element: <WorkSteps />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/works',
        element: <OurWorks />,
      },
      {
        path: '/services',
        element: <OurServices />,
      },
      {
        path: '/installation-and-removal',
        element: <InstallationAndRemoval />,
      },
      {
        path: '/maintenance',
        element: <Maintenance />,
      },
      {
        path: '/repair',
        element: <Repair />,
      },
      {
        path: '/kinds',
        element: <Kinds />,
      },
    ],
  },
]);
