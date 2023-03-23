import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScreenOne from './pages/ScreenOne';
import ScreenTwo from './pages/ScreenTwo';

const App = function () {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '',
          element: <ScreenOne />,
        },
        {
          path: 'screenTwo',
          element: <ScreenTwo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
