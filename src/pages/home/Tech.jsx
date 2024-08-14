import React from 'react'
import { DiAndroid, DiCss3, DiFirebase, DiJava, DiJavascript, DiMongodb, DiNodejs, DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div className='mb-20'>

      <h1 className='text-4xl font-bold text-center mb-10 underline underline-offset-4 decoration-red-900'>Technologies I used</h1>


      <div className='grid grid-cols-4 place-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

        <DiReact className='hover:scale-110 ease-in-out transition-all duration-100 hover:text-pink-700' size={200} />
        <DiJavascript size={200} />
        <DiFirebase size={200} />
        <DiAndroid size={200} className='animate-bounce' />
        <DiCss3 size={200} />
        <DiMongodb size={200} />
        <DiNodejs size={200} />
        <DiJava size={200} />


      </div>
    </div>
  )
}

export default Tech