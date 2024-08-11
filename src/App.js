import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Sample1 from './pages/Sample1';
import Sample2 from './pages/Sample2';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: 'sample1',
          element: <Sample1 />
        },
        {
          path: 'sample2',
          element: <Sample2 />
        }
      ]
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