import { MonialCard } from "../components/MonialCard"

const Contact = () => {

  const person = {
    person_photo: '',
    person_name: 'John Doe',
    person_detail: ''
  };
  return (
    <div>
      <MonialCard person={person} />


    </div>
  )
}
export default Contact