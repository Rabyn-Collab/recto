import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router";



const ItemList = ({ drinks }) => {




  const nav = useNavigate();
  return (
    <Card className="w-96">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Latest Customers
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue"
            className="font-bold"
          >
            View all
          </Typography>
        </div>
        <div className="divide-y divide-gray-200 cursor-pointer">
          {drinks.map(({ strDrink, idDrink, strDrinkThumb }, index) => (
            <div
              onClick={() => nav(`/cocktail-detail/${idDrink}`)}
              key={idDrink}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={strDrinkThumb} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {strDrink}
                  </Typography>


                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                ${900}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default ItemList