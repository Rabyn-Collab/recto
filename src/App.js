import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import ItemsPages from './pages/ItemsPages';
import ItemDetail from './pages/ItemDetail';
//
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
          path: 'item/:category',
          element: <ItemsPages />
        },
        {
          path: 'item-detail/:id',
          element: <ItemDetail />
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