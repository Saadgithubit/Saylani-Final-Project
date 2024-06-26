import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "../view/Dashboard";
import Signin from "../view/Signin";
import Signup from "../view/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
      {
        path: "/signin",
        element: <Signin/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
  ]);

  function Router(){
    return (

      <RouterProvider router={router} />
    )
  }

  export default Router;