import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './Reducers/Store'
import AppRoutes from './Routes/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)