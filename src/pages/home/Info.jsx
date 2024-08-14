import React from 'react'

const Info = () => {
  return (
    <div className='space-y-10'>

      <h1 className='text-4xl text-center'>Who am I</h1>


      <div className='h-[400px] w-[400px] rounded-full bg-black  ring-[5px] ring-pink-700 flex justify-center items-center mx-auto'>
        <div className="content text-white">
          <p>Name : Some Person</p>
          <p>Email: someperson@gmail.com</p>
          <p>Tel:9777777</p>
          <p>Age:90</p>
          <p>Experience:python, java, dart</p>
        </div>
      </div>


    </div>
  )
}

export default Info