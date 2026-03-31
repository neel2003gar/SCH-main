import { RouterProvider } from 'react-router';
import { router } from './routes';

export type Language = 'en' | 'fr';

export default function App() {
  return <RouterProvider router={router} />;
}
