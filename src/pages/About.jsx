import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"
import { MonialCard } from "../components/MonialCard"

const About = () => {
  const about = {
    company_photo: '',
    company_name: 'Tesla Robots',
    company_detail: ''
  };

  return (
    <div>
      <MonialCard about={about} />

      {/* <h1>This is about page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cum voluptatibus totam consequuntur accusantium. Fuga laboriosam aperiam, laborum reiciendis, alias nihil rerum deleniti quaerat magnam voluptates libero mollitia sapiente! Omnis?</p>
      <NavLink to={'/about-page/sam'}>sam</NavLink>
      <Outlet /> */}
    </div>
  )
}
export default About