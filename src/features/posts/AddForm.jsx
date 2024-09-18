import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { useFormik } from "formik"
import { checkData, radioData } from "../shared/data";

const AddForm = () => {

  const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      detail: '',
      program: '',
      genres: [],
      country: ''
    },
    onSubmit: (val) => {
      console.log(val);
    }

  });

  return (
    <div className="p-7 max-w-[300px]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          onChange={handleChange}
          value={values.title}
          label="Title"
        />

        <div className="flex gap-10">
          {radioData.map((val, i) => {
            return <Radio
              key={i}
              name="program"
              onChange={handleChange}
              value={val.value}
              label={val.label}
              color={val.color} />
          })}
        </div>

        <div className="flex w-max gap-4">
          {checkData.map((val, i) => {
            return <Checkbox
              key={i}
              name="genres"
              onChange={handleChange}
              color={val.color}
              label={val.label}
              value={val.value}
            />
          })}
        </div>

        <div className="w-72">
          <Select
            name="country"
            onChange={(e) => setFieldValue('country', e)}
            label="Select Country">
            <Option value="Nepal">Nepal</Option>
            <Option value="India">India</Option>
            <Option value="China">China</Option>


          </Select>
        </div>

        <Textarea
          name="detail"
          onChange={handleChange}
          value={values.detail}
          label="Detail"
        />

        <Button type="submit" size="sm">Submit</Button>


      </form>


    </div>
  )
}
export default AddForm