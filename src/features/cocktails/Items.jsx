import { useParams } from "react-router"
import { useGetDrinksByCategoryQuery } from "./cocktailApi";
import ItemList from "./ItemList";

const Items = () => {

  const { category } = useParams();


  const { data, isLoading, error } = useGetDrinksByCategoryQuery(category.replace('-', '/'));

  console.log(data);



  return (
    <div>

      {data && <ItemList drinks={data.drinks} />}



    </div>
  )
}
export default Items