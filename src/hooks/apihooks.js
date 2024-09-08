import axios from "axios";
import { useEffect, useState } from "react";

export const useApiHooks = (url) => {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {

    }
  }

  useEffect(() => {
    getData();
  }, []);

  return data;


}
