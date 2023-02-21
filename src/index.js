import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './Reducers/Store'
import AppRoutes from './Routes/AppRoutes'
import "./Assets/scss/global.scss";
import { ThemeProvider } from '@ui5/webcomponents-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </ThemeProvider>
)