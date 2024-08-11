import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>This is home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vel, ut delectus quis et praesentium iste quia alias officia perspiciatis architecto rem magni voluptatem, ab cum hic recusandae modi laudantium!</p>

      <nav>
        <NavLink to={'/sample1'}>Sample1</NavLink>
        <NavLink to={'/sample2'}>Sample2</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default HomePage