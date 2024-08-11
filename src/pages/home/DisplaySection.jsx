import React from 'react'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-2 items-center'>


      <div>
        <dotlottie-player src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>


      <div>
        <h1 className='text-3xl font-bold'>Hi, I am John</h1>
        <p className='text-pink-700 italic'> Some Dev, Freelancer, All Rounder</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia omnis repellat modi commodi, pariatur enim unde consequuntur corrupti in quibusdam maxime excepturi cum nam quod, voluptates sint veritatis vitae.</p>

      </div>



    </div>
  )
}

export default DisplaySection