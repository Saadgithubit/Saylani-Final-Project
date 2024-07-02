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
import { Box } from "@mui/material";
import { useSelector } from 'react-redux'


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

function Layout() {
  const drawerWidth = useSelector(state => state.widthReducer.width)

  return (
    <div>
      <AppBarSection />
      <Box
        component="main"
        sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, }}
      >
        <Outlet />
      </Box>
    </div>
  )
}

function Router() {
  return (

    <RouterProvider router={router} />
  )
}

export default Router;