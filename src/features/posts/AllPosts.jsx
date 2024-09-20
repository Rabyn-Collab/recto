import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux"

const AllPosts = () => {

  const { posts } = useSelector((state) => state.postSlice);

  console.log(posts);

  return (
    <div>
      {
        posts.map((post) => {
          return <Card key={post.id} className="mt-6 w-96">
            <CardBody>
              <img src={post.image} alt="" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {post.title}
              </Typography>
              <Typography>
                {post.detail}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>;
        })
      }




    </div>
  )
}
export default AllPosts