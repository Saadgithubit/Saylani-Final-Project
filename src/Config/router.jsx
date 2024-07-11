import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import Dashboard from "../view/Dashboard";
import Signin from "../view/Signin";
import Signup from "../view/Signup";
import Navbar from "../Components/Navbar"
import Profile from "../view/Profile"
import ToDo from "../view/Todo"
import TeachersDashboard from "../Teachers/teachersView/Dashboard";
import { checkAuth, getUserData } from "./mongodb.jsx";
import { removeUser, setUser } from "../Store/userSlice.jsx";
import Classroom from "../view/Classroom/index.jsx";
import TeachersClassroom from "../Teachers/teachersView/Classroom/index";
import Rightdrawer from "../Components/RightDrawer/Rightdrawer.jsx";
import SeeAssignment from "../view/SeeAssignment/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
          // {
          //   path: "/post-assignment",
          //   element: <TeachersAssignment />,
          // },
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
    ]
  }
]);

function MainLayout() {
  const user = useSelector(state => state.userReducer.user);
  const { pathname } = useLocation();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    checkUser()
  }, []);

  async function checkUser() {
    try {
      const res = await checkAuth();

      if (res?._id) {
        if (!user?._id) {
          const userData = await getUserData();

          dispatch(setUser(userData?.userInfo));
        };
      } else {
        if (user?._id) {
          dispatch(removeUser());
        };
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  useEffect(() => {
    checkPaths();
    checkUser();
  }, [pathname, user]);

  async function checkPaths() {
    if (user?._id) {
      setLoader(false);
      if (user?.authType !== "teacher") {
        if (pathname == "/post-assignment") {
          navigate("/");
        };
      };

      if (pathname == "/signin" || pathname == "signup" || pathname == "teachersignin") {
        navigate("/");
      };
    } else {
      setLoader(false);
      // if (pathname == "/post-assignment" || pathname == "/signup" || pathname == "/teachersignin" || pathname == "/") {
      //   navigate("/signin");
      // };
    };
  };

  if (loader) return <p>Loading</p>;

  return (
    <Outlet />
  );
};

function Layout() {
  const drawerWidth = useSelector(state => state.widthReducer.width);

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