import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { categoryUrl, getItems } from "../app_data/api_urls";
import ListCard from "../components/ListCard";
import { useParams } from "react-router";
import BackCard from "../components/BackCard";


const ItemsPages = () => {


  const { category } = useParams();

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
        }
      });
      setData(response.data);
    } catch (err) {

    }

  }





  useEffect(() => {
    getData();

  }, []);




  return (
    <div className="p-4 grid grid-cols-4 gap-2">


      {data && data.meals.map((meal) => {
        return <BackCard key={meal.idMeal} meal={meal} />;
      })}






    </div>
  )
}
export default ItemsPages