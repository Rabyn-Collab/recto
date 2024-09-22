import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { useFormik } from "formik"
import { checkData, radioData } from "../shared/data";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";
import { useNavigate } from "react-router";
import { nanoid } from "@reduxjs/toolkit";
import * as Yup from 'yup';


const valSchema = Yup.object({
  title: Yup.string().min(5).max(50).required(),
  // detail: '',
  // program: '',
  // genres: [],
  // country: '',
  // image: ''
});

const AddForm = () => {
  const dispatch = useDispatch();

  const nav = useNavigate();



  const { handleSubmit, values, handleChange, setFieldValue, errors } = useFormik({
    initialValues: {
      title: '',
      detail: '',
      program: '',
      genres: [],
      country: '',
      images: []
    },
    onSubmit: (val) => {
      // console.log({ ...val, id: nanoid() });

      dispatch(addPost({ ...val, id: nanoid() }));
      nav(-1);
    },
    validationSchema: valSchema

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
        <h1 className="text-pink-700">{errors.title}</h1>

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

        <Input
          multiple
          name="image"
          onChange={(e) => {
            const file = e.target.files;
            let photos = [];
            for (let a of file) {
              photos.push(URL.createObjectURL(a));
            }
            setFieldValue('images', photos);
            // const reader = new FileReader();
            // reader.readAsDataURL(file);
            // reader.addEventListener('load', (e) => {
            //   setFieldValue('image', e.target.result);
            // });
          }}
          label="Select an Image"
          type="file" />

        {values.images.length > 0 && values.images?.map((i) => {
          return <img src={i} alt="" />
        })}

        {/* {values.images &&
        
        
        <img src={values.image} alt="" />} */}
        <Button type="submit" size="sm">Submit</Button>


      </form>


    </div>
  )
}
export default AddForm