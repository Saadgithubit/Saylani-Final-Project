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
import Assignment from "../view/Assignment";
import Profile from "../view/Profile"
import ToDo from "../view/Todo"
import TeachersDashboard from "../Teachers/teachersView/Dashboard";
import TeachersAssignment from "../Teachers/teachersView/Assignment/index";
import { checkAuth, getUserData } from "./mongodb.jsx";
import { removeUser, setUser } from "../Store/userSlice.jsx";

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
            path: "/assignments",
            element: <Assignment />,
          },
          {
            path: "/update-profile",
            element: <Profile />,
          },
          {
            path: "/todo",
            element: <ToDo />,
          },
          {
            path: "/teacher",
            element: <TeachersDashboard />,
          },
          {
            path: "/post-assignment",
            element: <TeachersAssignment />,
          },
          // {
          //   path: "/teacherassignment",
          //   element: <TeachersAssignment />,
          // }
        ]
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      // {
      //   path: "/teachersignin",
      //   element: <Signin />,
      // },
      {
        path: "/signup",
        element: <Signup />,
      },
    ]
  }
]);

function MainLayout () {
  const user = useSelector(state => state.userReducer.user);
  const { pathname } = useLocation();
  const [ loader, setLoader ] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
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
      
      if (pathname == "/signin" || pathname == "/signup" || pathname == "/teachersignin") {
        navigate("/");
      };
    } else {
      setLoader(false);
      if (pathname == "/post-assignment" || pathname == "/signup" || pathname == "/teachersignin" || pathname == "/") {
        navigate("/signin");
      };
    };
  };

  if(loader) return <p>Loading</p>;

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
        sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, }}
      >
        <Outlet />
      </Box>
    </div>
  )
};

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
};

function Router() {
  return (

    <RouterProvider router={router} />
  )
};

export default Router;