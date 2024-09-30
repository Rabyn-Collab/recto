import { useGetAllDrinksQuery, useLazyGetAllDrinksQuery } from "./cocktailApi"

const AllCocktails = () => {

  const { isLoading, isError, isFetching, data } = useGetAllDrinksQuery();






  return (
    <div>

    </div>
  )
}
export default AllCocktails