import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import HoriCard from "../components/HoriCard";

const Home = () => {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://66d7d72637b1cadd80526aac.mockapi.io/movies');
      setData(response.data);
    } catch (err) {

    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="p-5">


      {data && data.map((movie, i) => {
        return <HoriCard key={i} movie={movie} />

      })}



    </div>
  )
}
export default Home