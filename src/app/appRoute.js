import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import AllPosts from "../features/posts/AllPosts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        index: true,
        element: <AllPosts />

      }


    ]
  },



]);