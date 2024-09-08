
import HoriCard from "../components/HoriCard";
import { useApiHooks } from "../hooks/apihooks.js";


const Home = () => {


  const data = useApiHooks('https://66d7d72637b1cadd80526aac.mockapi.io/movies');

  console.log(data);

  return (
    <div className="p-5">


      {data && data.map((movie, i) => {
        return <HoriCard key={i} movie={movie} />

      })}



    </div>
  )
}
export default Home