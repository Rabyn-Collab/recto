import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { categoryUrl, getItems } from "../app_data/api_urls";
import ListCard from "../components/ListCard";
import { useParams } from "react-router";


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
    <div className="p-4">









    </div>
  )
}
export default ItemsPages