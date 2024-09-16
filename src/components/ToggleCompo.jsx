import { useEffect, useRef } from "react"

const ToggleCompo = () => {


  const bx = useRef();

  useEffect(() => {
    const handleListen = (e) => {
      console.log(e);
      console.log(`hello jee click ${e} `);
    };

    window.addEventListener('keypress', handleListen);

    return () => {
      console.log('hello jee');
      window.removeEventListener('keypress', handleListen);
    }

  }, []);




  return (

    <div ref={bx} className="max-w-56 my-4 shadow-2xl p-5">

      <h1>Hello jee</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni porro veniam minima debitis omnis, repellendus, impedit voluptatem eaque iusto maxime dolores. Sint ea odio, labore voluptatum saepe possimus. Officia!</p>




    </div>
  )
}
export default ToggleCompo