import { createBrowserRouter } from 'react-router';
import { LofiRootLayout } from './components/LofiRootLayout';
import LofiHomePage from './pages/LofiHomePage';
import LofiAccommodationPage from './pages/services/LofiAccommodationPage';
import LofiEarlyInterventionPage from './pages/services/LofiEarlyInterventionPage';
import LofiOccupationalTherapyPage from './pages/services/LofiOccupationalTherapyPage';
import LofiErgonomicsPage from './pages/services/LofiErgonomicsPage';
import LofiTherapyPage from './pages/services/LofiTherapyPage';
import LofiDisabilityManagementPage from './pages/services/LofiDisabilityManagementPage';
import LofiAboutUsPage from './pages/LofiAboutUsPage';
import LofiContactUsPage from './pages/LofiContactUsPage';
import LofiGetQuotePage from './pages/LofiGetQuotePage';
import LofiJoinUsPage from './pages/LofiJoinUsPage';
import LofiFindRehabClinicPage from './pages/LofiFindRehabClinicPage';
import LofiFindOccHealthClinicPage from './pages/LofiFindOccHealthClinicPage';
import LofiNotFoundPage from './pages/LofiNotFoundPage';

export const lofiRouter = createBrowserRouter([
  {
    path: '/lofi',
    Component: LofiRootLayout,
    children: [
      {
        index: true,
        Component: LofiHomePage,
      },
      {
        path: 'services/accommodation-return-to-work',
        Component: LofiAccommodationPage,
      },
      {
        path: 'services/early-intervention',
        Component: LofiEarlyInterventionPage,
      },
      {
        path: 'services/occupational-therapy',
        Component: LofiOccupationalTherapyPage,
      },
      {
        path: 'services/ergonomics',
        Component: LofiErgonomicsPage,
      },
      {
        path: 'services/therapy',
        Component: LofiTherapyPage,
      },
      {
        path: 'services/disability-management',
        Component: LofiDisabilityManagementPage,
      },
      {
        path: 'about-us',
        Component: LofiAboutUsPage,
      },
      {
        path: 'contact-us',
        Component: LofiContactUsPage,
      },
      {
        path: 'get-quote',
        Component: LofiGetQuotePage,
      },
      {
        path: 'join-us',
        Component: LofiJoinUsPage,
      },
      {
        path: 'find-rehab-clinic',
        Component: LofiFindRehabClinicPage,
      },
      {
        path: 'find-occ-health-clinic',
        Component: LofiFindOccHealthClinicPage,
      },
      {
        path: '*',
        Component: LofiNotFoundPage,
      },
    ],
  },
]);
