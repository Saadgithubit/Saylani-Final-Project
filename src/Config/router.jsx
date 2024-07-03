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
import Profile from "../view/Profile"
import ToDo from "../view/Todo"
import { Box } from "@mui/material";
import { useSelector } from 'react-redux'
import TeachersDashboard from "../Teachers/teachersView/Dashboard";
import TeachersAssignment from "../Teachers/teachersView/Assignment/inedx";


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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/todo",
        element: <ToDo />,
      },
    ]
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/teachersdashboard",
        element: <TeachersDashboard />,
      },
      {
        path: "/teachersassignment",
        element: <TeachersAssignment />,
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
function TeachersLayout() {
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