import { Input, Typography } from "@material-tailwind/react"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState('avatar');
  const [data, setData] = useState([]);
  const sig = new AbortController();


  const getData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie',
        {
          signal: sig.signal,
          headers: {
            Authorization: 'Bearer'
          },
          params: {
            query: query
          }
        });
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData(``);

    return () => {
      sig.abort();
    }
  }, [query]);

  console.log(data);


  return (
    <div className="p-5 max-w-36">


      <Input onChange={(e) => setQuery(e.target.value)} label="search movie" />

      <Typography>{query}</Typography>


    </div>
  )
}
export default Home