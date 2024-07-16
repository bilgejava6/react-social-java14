import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = 
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  </BrowserRouter>
</Provider>

root.render(router);
