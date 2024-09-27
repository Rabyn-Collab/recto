import { RouterProvider } from "react-router-dom"
import { router } from "./app/appRoute"
import { useGetPostsQuery } from "./features/todos/todosApi"


const App = () => {

  const { isLoading, data, error, isError } = useGetPostsQuery();


  // const f = () => ({
  //   name: 'ram'
  // });

  // const c = f();

  // console.log(c);

  // const arrs = [{ id: 1, name: 'ram', }, { id: 2, name: 'krishna' }];

  // const n = arrs.map((a) => {
  //   return a.id === 1 ? { name: 'shyam' } : a;
  // });

  // console.log(n);



  return <RouterProvider router={router} />
}
export default App