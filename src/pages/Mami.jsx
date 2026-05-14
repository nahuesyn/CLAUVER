import { assets } from '../data/assets'
import './Mami.css'

export default function Mami() {
  return (
    <div className="mami">
      <div className="mami-bg" style={{ backgroundImage: `url(${assets.heroBg})` }} />
      <div className="mami-overlay" />

      <div className="mami-content">
        {/* 여기에 내용 추가 예정 */}
      </div>
    </div>
  )
}
