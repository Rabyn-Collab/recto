import React from 'react'
import CardButton from './CardButton'

const CardCompo = ({ title, detail, url }) => {



  return (
    <div className='w-[300px] space-y-3 shadow-xl p-3'>
      <img src={url} alt="" />
      <h3>{title}</h3>
      <p>{detail}</p>
      <CardButton color={'bg-red-500'} />
      <CardButton color={'bg-green-500'} />
      <CardButton color={'bg-blue-500'} />

    </div>
  )
}

export default CardCompo