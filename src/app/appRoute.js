import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import AddForm from "../features/posts/AddForm";
import EditForm from "../features/posts/EditForm";
import AllCocktails from "../features/cocktails/AllCocktails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      {
        index: true,
        element: <AllCocktails />
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