import React from 'react'
import { persons } from '../app_data/data'

const HomePage = () => {

  return (
    <div>

      {persons.map((per) => {
        return <div key={per.id}>
          <h1>{per.name}</h1>
        </div>
      })}


    </div>
  )
}

export default HomePage