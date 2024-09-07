import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Routes from './Router/Routes.jsx'
import { Provider } from 'react-redux';
import store from './redux/store.ts';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>,
  </Provider>
)
