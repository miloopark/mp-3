import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Employment from './components/Employment';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import References from './components/References';
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/education", element: <Education /> },
  { path: "/employment", element: <Employment /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/projects", element: <Projects /> },
  { path: "/references", element: <References /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);