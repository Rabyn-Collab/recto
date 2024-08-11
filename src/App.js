import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
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
      ]
    },



  ]);



  return <RouterProvider router={router} />
}

export default App