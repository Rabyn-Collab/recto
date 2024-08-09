import React from 'react'
import HomePage from './pages/HomePage'
import Simple from './components/Simple'

const App = () => {

  return (
    <div>

      <HomePage />
      <Simple name={'sajdjak'} age={90} />
    </div>
  )
}

export default App