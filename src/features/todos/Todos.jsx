import { useGetTodosQuery } from "./todosApi"

const Todos = () => {

  const { isLoading, isError, error, data, isFetching } = useGetTodosQuery();

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  console.log(data);
  return (
    <div>

      {data && data.todos.map(({ todo, id }) => {
        return <h1 key={id}>{todo}</h1>
      })}






    </div>
  )
}
export default Todos