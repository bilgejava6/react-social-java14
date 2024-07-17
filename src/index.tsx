import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import RouterPage from './routerpage';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(  
  <Provider store={store}>
    <RouterPage />
  </Provider>
);
