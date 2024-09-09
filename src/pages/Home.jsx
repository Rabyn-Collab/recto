
import HoriCard from "../components/HoriCard";
import { useApiHooks } from "../hooks/apihooks.js";


const Home = () => {

  const data = useApiHooks('https://66d7d72637b1cadd80526aac.mockapi.io/movies');


  const user = {
    name: 'Rabin',
    age: 20,
    address: {
      city: 'kolkata',
      country: 'India',
      v: ['j', 'i']
    },
    habits: ['eat', 'sleep', 'code']
  };

  const persons = ['ram', 'shyam'];
  const [m, n] = persons;

  const { address: { city, v: [a, i] } } = user;
  console.log(m);



  return (
    <div className="p-5">

      <h1>
        {m}
      </h1>
      {data && data.map((movie, i) => {
        return <HoriCard key={i} movie={movie} />

      })}



    </div>
  )
}
export default Home