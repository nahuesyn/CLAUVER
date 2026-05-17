import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../data/assets'
import './Nav.css'

const links = [
  { to: '/members', label: 'Members' },
  { to: '/discography', label: 'Discography' },
  { to: '/company', label: 'Company' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <img src={assets.logo} alt="ILLIT" />
      </NavLink>

      <ul className={`nav-links${open ? ' nav-links--open' : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="메뉴"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
