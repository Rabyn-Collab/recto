import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './components/RootLayout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
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