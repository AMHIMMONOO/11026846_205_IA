import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProgramsPage from './Components/ProgramsPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import FacultyPage from './Components/FacultyPage';
import AboutPage from './Components/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Programs",
    element: <ProgramsPage/>,
  },
  {
    path: "Faculty",
    element: <FacultyPage/>,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
