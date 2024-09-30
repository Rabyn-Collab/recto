import { useGetAllDrinksQuery, useLazyGetAllDrinksQuery } from "./cocktailApi"

const AllCocktails = () => {

  const { isLoading, isError, isFetching, data } = useGetAllDrinksQuery();

  const [fetchAll, { isLoading: isLoad, data: val, error }] = useLazyGetAllDrinksQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="p-3">

      {
        data && data.drinks.map((cocktail, i) => {
          return <h1 className="shadow-lg p-2 cursor-pointer mb-4" key={i}>{cocktail.strCategory}</h1>
        })
      }

    </div>
  )
}
export default AllCocktails