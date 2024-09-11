import { Button } from "@material-tailwind/react"

const PageButton = ({ data, page, setPage }) => {
  return (
    <div>

      {data && <div className="pages flex justify-center my-4 items-center">
        <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</Button>
        <h1 className="mx-7 text-lg font-bold">{data && data.page}</h1>



        <Button onClick={() => setPage(page + 1)}>Next</Button>


      </div>}
    </div>
  )
}
export default PageButton