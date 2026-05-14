import { useParams, useNavigate } from 'react-router-dom'
import { assets } from '../data/assets'
import './Track.css'

const tracks = [
  { slug: 'grwm',             num: '01', title: 'GRWM (Get Ready With Me)'               },
  { slug: 'its-me',           num: '02', title: "It's Me",                isTitle: true  },
  { slug: 'paw-paw',         num: '03', title: 'paw, paw!'                               },
  { slug: 'mamihlapinatapai', num: '04', title: 'Mamihlapinatapai'                        },
  { slug: 'love-older-you',   num: '05', title: 'Love, older you'                         },
]

export default function Track() {
  const { id } = useParams()
  const navigate = useNavigate()
  const track = tracks.find((t) => t.slug === id)

  if (!track) {
    return (
      <div className="track-page">
        <div className="track-bg" style={{ backgroundImage: `url(${assets.heroBg})` }} />
        <div className="track-overlay" />
        <div className="track-content">
          <p className="track-not-found">트랙을 찾을 수 없습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="track-page">
      <div className="track-bg" style={{ backgroundImage: `url(${assets.heroBg})` }} />
      <div className="track-overlay" />
      <div className="track-content">
        <p className="track-eyebrow">4th Mini Album · Track {track.num}</p>
        <h1 className="track-title">{track.title}</h1>
        {track.isTitle && <span className="track-title-badge">Title Track</span>}
        <div className="track-nav">
          {tracks.map((t) => (
            <button
              key={t.slug}
              className={`track-nav-item${t.slug === id ? ' track-nav-item--active' : ''}`}
              onClick={() => navigate('/track/' + t.slug)}
            >
              <span className="track-nav-num">{t.num}</span>
              <span className="track-nav-name">{t.title}</span>
            </button>
          ))}
        </div>
        <button className="btn-back" onClick={() => navigate(-1)}>← 돌아가기</button>
      </div>
    </div>
  )
}
