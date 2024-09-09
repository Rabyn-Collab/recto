import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useApiHooks } from "../hooks/apihooks";

const Detail = () => {

  const { id } = useParams();
  const data = useApiHooks(`https://66d7d72637b1cadd80526aac.mockapi.io/movies/${id}`);


  return (
    <div>
      <h1>Hello jee</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, labore accusantium at quae quam nam exercitationem dolorem maiores cumque fugiat earum, accusamus cupiditate ex facilis. Ad deserunt veritatis voluptatem nisi.</p>



    </div>
  )
}
export default Detail