import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-between px-10 py-2 bg-black text-white">
      <h1>Material Tailwind</h1>
      <nav className="space-x-5">
        <NavLink className={({ isActive }) => isActive ? 'text-yellow-900' : ''} to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>
    </div>
  )
}
export default Header