import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";

const App = function () {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Screen1 />,
        },
        {
          path: "screenTwo",
          element: <Screen2 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
