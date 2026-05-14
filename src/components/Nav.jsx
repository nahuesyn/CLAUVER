import { NavLink } from 'react-router-dom'
import { assets } from '../data/assets'
import './Nav.css'

const links = [
  { to: '/members', label: 'Members' },
  { to: '/discography', label: 'Discography' },
  { to: '/company', label: 'Company' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">
        <img src={assets.logo} alt="ILLIT" />
      </NavLink>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
