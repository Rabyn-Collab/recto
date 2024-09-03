import { useState } from "react"

const Home = () => {

  const [count, setCount] = useState(0);



  const handleClick = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <div>

      <button onClick={handleClick}>hello jee</button>


    </div>
  )
}
export default Home