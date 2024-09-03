import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./components/RootLayout";
import Sam from "./pages/Sam";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about-page",
          element: <About />,
          children: [
            {
              path: 'sam',
              element: <Sam />
            }

          ]
        },
        {
          path: "contact-page",
          element: <Contact />
        }
      ]
    },



  ]);

  return <RouterProvider router={router} />
}
export default App