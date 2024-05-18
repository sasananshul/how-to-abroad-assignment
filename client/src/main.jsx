import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './Error.jsx';
import Home from './components/Home.jsx';
import Courses from './components/Courses.jsx';
import Login from './components/Login.jsx';
import Portal from './components/Portal.jsx';

// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorPage />} element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/login' element={<Login />} />
      <Route path='/portal' element={<Portal />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
)
