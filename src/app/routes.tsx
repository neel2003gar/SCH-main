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

// Lofi wireframe imports
import { LofiRootLayout } from '../lofi/components/LofiRootLayout';
import LofiHomePage from '../lofi/pages/LofiHomePage';
import LofiAccommodationPage from '../lofi/pages/services/LofiAccommodationPage';
import LofiEarlyInterventionPage from '../lofi/pages/services/LofiEarlyInterventionPage';
import LofiOccupationalTherapyPage from '../lofi/pages/services/LofiOccupationalTherapyPage';
import LofiErgonomicsPage from '../lofi/pages/services/LofiErgonomicsPage';
import LofiTherapyPage from '../lofi/pages/services/LofiTherapyPage';
import LofiDisabilityManagementPage from '../lofi/pages/services/LofiDisabilityManagementPage';
import LofiAboutUsPage from '../lofi/pages/LofiAboutUsPage';
import LofiContactUsPage from '../lofi/pages/LofiContactUsPage';
import LofiGetQuotePage from '../lofi/pages/LofiGetQuotePage';
import LofiJoinUsPage from '../lofi/pages/LofiJoinUsPage';
import LofiFindRehabClinicPage from '../lofi/pages/LofiFindRehabClinicPage';
import LofiFindOccHealthClinicPage from '../lofi/pages/LofiFindOccHealthClinicPage';
import LofiNotFoundPage from '../lofi/pages/LofiNotFoundPage';

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
  // Lofi wireframe routes
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