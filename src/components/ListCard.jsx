import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react"

const ListCard = ({ categories }) => {
  return (
    <Card className="w-96">
      <CardBody>

        <div className="divide-y divide-gray-200">
          {categories.map(({ strCategory, strCategoryThumb, strCategoryDescription }, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-start gap-x-6">
                <Avatar size="lg" src={strCategoryThumb} alt={strCategoryThumb} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {strCategory}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {strCategoryDescription.substring(0, 100) + '....'}
                  </Typography>
                </div>
              </div>

            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
export default ListCard


const customers = [
  {
    name: "Tania Andrew",
    email: "tania@gmail.com",
    price: 400,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    email: "john@gmail.com",
    price: 420,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@gmail.com",
    price: 520,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    email: "levi@gmail.com",
    price: 780,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
];