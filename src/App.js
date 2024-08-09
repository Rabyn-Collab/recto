import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'about-page',
      element: <AboutPage />
    },
    {
      path: 'contact-page',
      element: <ContactPage />
    }
  ]);



  return <RouterProvider router={router} />
}

export default App