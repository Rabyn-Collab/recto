import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import PageButton from "../components/PageButton";

const Home = () => {

  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  const getData = async () => {
    try {

      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          page: page
        },

        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmMxZTMzZjAxNTc1NWQyN2EyMzE3OTNjNDRlY2ZlZCIsIm5iZiI6MTcyNjAyNTk3OS44NDU1MzMsInN1YiI6IjY0MjI1ODg5MjNiZTQ2MDBmZWJlZDRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.npG9cJYr5l2Acbo5qiTIVaxSo9QkCEqMqahN5tPf20E'
        }
      });


      setData(response.data);
      console.log(response.data);

    } catch (err) {

    }

  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className=" p-4">

      <PageButton data={data} setPage={setPage} page={page} />
      <div className="grid grid-cols-4 gap-5">

        {data && data.results.map((movie) => (
          <div key={movie.id} className="shadow-lg">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}



      </div>

      <PageButton data={data} setPage={setPage} page={page} />
    </div>
  )
}
export default Home