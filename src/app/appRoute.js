import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import AllPosts from "../features/posts/AllPosts";
import AddForm from "../features/posts/AddForm";
import EditForm from "../features/posts/EditForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        index: true,
        element: <AllPosts />
      },
      {
        path: 'add-form',
        element: <AddForm />
      },
      {
        path: 'edit-form/:id',
        element: <EditForm />
      }


    ]
  },



]);