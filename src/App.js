import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import PlanetInfos, {loader} from "./components/PlanetInfos/PlanetInfos";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path:':planetName',
        element: <PlanetInfos/>,
        loader: loader
      }
    ]
  }
])

const App = () => {
  return  <RouterProvider router={ router }/>;;
}

export default App;
