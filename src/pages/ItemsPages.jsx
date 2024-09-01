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
      const response = await axios.get(getItems, {
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


  console.log(data);



  return (
    <div className="p-4 grid grid-cols-4 gap-2">


      {/* <div className="h-[400px] w-[400px] bg-[url('https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8')]">

      </div> */}

      {data && data.meals.map((meal) => {
        return <BackCard key={meal.idMeal} meal={meal} />;
      })}






    </div>
  )
}
export default ItemsPages