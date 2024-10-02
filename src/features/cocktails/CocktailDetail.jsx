import { useParams } from "react-router"
import { useGetIdDetailQuery } from "./cocktailApi";

const CocktailDetail = () => {

  const { id } = useParams();
  const { data, error, isLoading } = useGetIdDetailQuery(id);
  console.log(data);


  return (
    <div>

      {data && <CocktaiItem drink={data.drinks[0]} />}


    </div>
  )
}
export default CocktailDetail


const CocktaiItem = ({ drink }) => {

  const lk = 'sdkksdfIngredient';

  console.log(lk.includes('Ingredient'))
  return (
    <div>
      {Object.entries(drink).map(([key, value]) => {
        if (key?.includes('Ingredient')) {
          return <h1 key={key}>{value}</h1>
        } else {
          return null;
        }
      })
      }

    </div>
  )
}
