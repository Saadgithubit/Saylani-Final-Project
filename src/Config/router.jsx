import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Dashboard from "../view/Dashboard";
import Signin from "../view/Signin";
import Signup from "../view/Signup";
import AppBarSection from "../Components/AppBar"
import Assignment from "../view/Assignment";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/assignment",
        element: <Assignment />,
      },
    ]
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function Layout ()  {
  return (
    <div>
      <AppBarSection />
      <Outlet />
    </div>
  )
}

function Router() {
  return (

    <RouterProvider router={router} />
  )
}

export default Router;