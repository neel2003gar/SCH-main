import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import HomePage from './pages/HomePage';
import AccommodationPage from './pages/services/AccommodationPage';
import EarlyInterventionPage from './pages/services/EarlyInterventionPage';
import OccupationalTherapyPage from './pages/services/OccupationalTherapyPage';
import ErgonomicsPage from './pages/services/ErgonomicsPage';
import TherapyPage from './pages/services/TherapyPage';
import DisabilityManagementPage from './pages/services/DisabilityManagementPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import GetQuotePage from './pages/GetQuotePage';
import JoinUsPage from './pages/JoinUsPage';
import FindRehabClinicPage from './pages/FindRehabClinicPage';
import FindOccHealthClinicPage from './pages/FindOccHealthClinicPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'services/accommodation-return-to-work',
        Component: AccommodationPage,
      },
      {
        path: 'services/early-intervention',
        Component: EarlyInterventionPage,
      },
      {
        path: 'services/occupational-therapy',
        Component: OccupationalTherapyPage,
      },
      {
        path: 'services/ergonomics',
        Component: ErgonomicsPage,
      },
      {
        path: 'services/therapy',
        Component: TherapyPage,
      },
      {
        path: 'services/disability-management',
        Component: DisabilityManagementPage,
      },
      {
        path: 'about-us',
        Component: AboutUsPage,
      },
      {
        path: 'contact-us',
        Component: ContactUsPage,
      },
      {
        path: 'get-quote',
        Component: GetQuotePage,
      },
      {
        path: 'join-us',
        Component: JoinUsPage,
      },
      {
        path: 'find-rehab-clinic',
        Component: FindRehabClinicPage,
      },
      {
        path: 'find-occ-health-clinic',
        Component: FindOccHealthClinicPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
], { basename: '/SCH-main' });