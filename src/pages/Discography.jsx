import { useState } from 'react'
import { albums, tabs } from '../data/discography'
import Footer from '../components/Footer'
import './Discography.css'

function AlbumCard({ album }) {
  const [touched, setTouched] = useState(false)

  return (
    <div
      className={`album-card${touched ? ' album-card--active' : ''}`}
      onClick={() => setTouched((v) => !v)}
    >
      {album.isNew && <span className="album-card-new">최신</span>}
      <div className="album-img-wrap">
        <img src={album.img} alt={album.title} loading="lazy" />
        <div className="album-overlay">
          <p className="overlay-type">{album.type} · {album.date}</p>
          <p className="overlay-title">{album.title}</p>
          <hr className="overlay-divider" />
          <p className="overlay-label">타이틀곡</p>
          <p className="overlay-track">♪ {album.titleTrack}</p>
          {album.tracks.length > 0 && (
            <>
              <p className="overlay-label">수록곡</p>
              <p className="overlay-tracks">{album.tracks.join(' · ')}</p>
            </>
          )}
          {album.achievement && (
            <p className="overlay-score">✦ {album.achievement}</p>
          )}
        </div>
      </div>
      <div className="album-info">
        <p className="album-type">{album.type} · {album.date}</p>
        <p className="album-title">{album.title}</p>
        {album.badge && <span className="album-badge">{album.badge}</span>}
      </div>
    </div>
  )
}

export default function Discography() {
  const [active, setActive] = useState('kr')

  const filtered = albums.filter((a) => a.cat === active)

  return (
    <div className="discography">
      <div className="disco-header">
        <p className="disco-eyebrow">Music</p>
        <h2 className="disco-title">
          All <em>Albums</em>
        </h2>
        <div className="disco-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`disco-tab${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="disco-grid">
        {filtered.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
