import React from 'react'

const CardButton = ({ color }) => {
  // const age = 90;
  // const nameSen = 'hello jee how r u';

  // console.log(`sdkfsdkf ${age} ${nameSen}`);

  return (
    <div>

      <button className={`${color} text-white px-2 py-1 rounded-sm hover:ring-2 hover:ring-pink-900`}>Learn More</button>
    </div>
  )
}

export default CardButton