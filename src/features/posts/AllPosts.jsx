import { useSelector } from "react-redux"

const AllPosts = () => {

  const { posts } = useSelector((state) => state.postSlice);

  console.log(posts);

  return (
    <div>



    </div>
  )
}
export default AllPosts