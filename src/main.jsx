import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Components/Login/Login.tsx';
import SignUp from './Components/SignUp/SignUp.tsx';
import Home from './Pages/Home/Home.tsx';
import Users from './Pages/Users/Users.tsx';

import { Provider } from 'react-redux';
import store from './redux/store.ts';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.tsx';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.tsx';

const router = createBrowserRouter([
  {
    path: "login/",
    element: <Login></Login>
  },
  {
    path: "signup/",
    element: <SignUp></SignUp>
  },
  {
    path: "/",
    element: <PrivateRoute><Home></Home></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "users/",
        element: <PrivateRoute><Users></Users></PrivateRoute>
      },
      {
        path: "dashboard/",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
