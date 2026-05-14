import { assets } from '../data/assets'
import SnsLinks from './SnsLinks'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={assets.logo} alt="ILLIT" className="footer-logo" />
      <SnsLinks variant="footer" />
      <p className="footer-copy">© 2026 BELIFT LAB / HYBE · Fan-made</p>
    </footer>
  )
}
