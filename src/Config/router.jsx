import { createBrowserRouter, RouterProvider, Outlet, useLocation, useNavigate, } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from 'react-redux'
import Dashboard from "../view/Dashboard";
import Signin from "../view/Signin";
import Signup from "../view/Signup";
import Navbar from "../Components/Navbar"
import Profile from "../view/Profile"
import ToDo from "../view/Todo"
import TeachersDashboard from "../Teachers/teachersView/Dashboard";
import Classroom from "../view/Classroom/index.jsx";
import TeachersClassroom from "../Teachers/teachersView/Classroom/index";
import Rightdrawer from "../Components/RightDrawer/Rightdrawer.jsx";
import SeeAssignment from "../view/SeeAssignment/index.jsx";

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
        path: "/classroom",
        element: <Classroom />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/todo",
        element: <ToDo />,
      },
      {
        path: "/seeassignment/:id",
        element: <SeeAssignment />,
      },
      {
        path: "/teacher",
        element: <TeachersDashboard />,
      },
      {
        path: "/teacherclassroom",
        element: <TeachersClassroom />,
      }
    ]
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/teachersignin",
    element: <Signin />,
  },
  {
    path: "/teachersignup",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);


function Layout() {
  const navigate = useNavigate()
  const drawerWidth = useSelector(state => state.widthReducer.width);
  const user = useSelector(state => state.userReducer.user);
  console.log(user);
  if (!user) {
    navigate('/signin')
  }
  return (
    <div>
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, md: `calc(100% - ${drawerWidth} * 2px)` }, ml: { sm: `${drawerWidth}px` } }}
      >
        <Outlet />
      </Box>
      <Rightdrawer />
    </div>
  )
};

function TeachersLayout() {
  const drawerWidth = useSelector(state => state.widthReducer.width)

  return (
    <div>
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, md: `calc(100% - ${drawerWidth} * 2px)` }, ml: { sm: `${drawerWidth}px` } }}
      >
        <Outlet />
      </Box>
    </div>
  )
};

function Router() {
  return (

    <RouterProvider router={router} />
  )
};

export default Router;