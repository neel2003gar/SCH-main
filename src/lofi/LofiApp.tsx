import { RouterProvider } from 'react-router';
import { lofiRouter } from './lofi-routes';

function LofiApp() {
  return <RouterProvider router={lofiRouter} />;
}

export default LofiApp;
