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
    element: <Home></Home>,
    children: [
      {
        path: "users/",
        element: <Users></Users>
      }
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
