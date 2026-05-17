import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../data/assets'
import SnsLinks from '../components/SnsLinks'
import './Home.css'

const tracklist = [
  { num: '01', title: 'GRWM (Get Ready With Me)', slug: 'grwm',             duration: '2:49', youtubeId: null },
  { num: '02', title: "It's Me", isTitle: true,   slug: 'its-me',           duration: '2:19', youtubeId: 'bMhDJ0S0OBA' },
  { num: '03', title: 'paw, paw!',                slug: 'paw-paw',          duration: '2:30', youtubeId: null },
  { num: '04', title: 'Mamihlapinatapai',          slug: 'mamihlapinatapai', duration: '3:02', youtubeId: null },
  { num: '05', title: 'Love, older you',           slug: 'love-older-you',  duration: '2:39', youtubeId: null },
]

function ytSrc(id) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&enablejsapi=1&controls=0&rel=0&modestbranding=1`
}

export default function Home() {
  const navigate = useNavigate()
  const [playingSlug, setPlayingSlug] = useState(null)
  const [activeSrc, setActiveSrc] = useState('')
  const iframeRef = useRef(null)

  function handlePlay(e, track) {
    e.stopPropagation()
    if (!track.youtubeId) return

    if (playingSlug === track.slug) {
      iframeRef.current?.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}', '*'
      )
      setPlayingSlug(null)
    } else {
      if (activeSrc.includes(track.youtubeId)) {
        iframeRef.current?.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}', '*'
        )
      } else {
        setActiveSrc(ytSrc(track.youtubeId))
      }
      setPlayingSlug(track.slug)
    }
  }

  return (
    <div className="home">
      <iframe
        ref={iframeRef}
        key={activeSrc}
        src={activeSrc || undefined}
        allow="autoplay; encrypted-media"
        title="audio-player"
        style={{ position: 'fixed', bottom: '-2px', left: '-2px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
      />

      {/* YouTube 풀스크린 배경 */}
      <div className="home-video-bg">
        <iframe
          src="https://www.youtube.com/embed/bMhDJ0S0OBA?start=8&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=bMhDJ0S0OBA&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          title="ILLIT MV"
          style={{ pointerEvents: 'none' }}
        />
        <div className="home-video-block" />
        <div className="home-video-cover" />
      </div>

      <div className="home-overlay" />

      {/* 콘텐츠 */}
      <div className="home-hero">
        <div className="hero-left">
          <p className="hero-eyebrow">4th Mini Album · Apr 30, 2026</p>
          <img
            src={assets.comebackLogo}
            alt="MAMIHLAPINATAPAI"
            className="hero-comeback-logo"
          />
          <p className="hero-sub">— 눈치싸움의 순간</p>
          <div className="hero-desc-group">
            <p className="hero-desc">
              남미 야간족(Yaghan)의 언어에서 온 이름.<br />
              서로 원하지만 누구도 먼저 나서지 않는,<br />
              그 미묘한 눈빛의 순간.
            </p>
            <button className="btn-outline" onClick={() => navigate('/mami')}>
              자세히 보기
            </button>
          </div>
          <SnsLinks />
        </div>

        <div className="hero-right">
          <div className="tracklist-card">
            <div className="tracklist-header">
              <span className="tracklist-label">Tracklist</span>
              <span className="tracklist-count">5 tracks</span>
            </div>
            {tracklist.map((t) => (
              <div key={t.num} className={`track-row${t.isTitle ? ' track-row--title' : ''}${playingSlug === t.slug ? ' track-row--playing' : ''}`}>
                <div className="track-num-wrap">
                  <span className="track-num">{t.num}</span>
                  <button
                    className={`track-play-btn${!t.youtubeId ? ' track-play-btn--disabled' : ''}`}
                    onClick={(e) => handlePlay(e, t)}
                    title={t.youtubeId ? (playingSlug === t.slug ? '일시정지' : '재생') : '미리듣기 준비 중'}
                  >
                    {playingSlug === t.slug ? '⏸' : '▶'}
                  </button>
                </div>
                <span className="track-name">{t.title}</span>
                {t.isTitle && <span className="track-badge">Title</span>}
                <span className="track-duration">{t.duration}</span>
                <button
                  className="track-more-btn"
                  onClick={() => navigate('/track/' + t.slug)}
                  title="곡 정보 보기"
                >
                  ···
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
