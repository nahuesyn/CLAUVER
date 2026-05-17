import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Members from './pages/Members'
import Discography from './pages/Discography'
import Company from './pages/Company'
import Mami from './pages/Mami'
import Track from './pages/Track'
import { AudioProvider, useAudio } from './context/AudioContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function GlobalAudio() {
  const { activeSrc, iframeRef } = useAudio()
  return (
    <iframe
      ref={iframeRef}
      key={activeSrc}
      src={activeSrc || undefined}
      allow="autoplay; encrypted-media"
      title="audio-player"
      style={{ position: 'fixed', bottom: '-2px', left: '-2px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
    />
  )
}

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <GlobalAudio />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/company" element={<Company />} />
            <Route path="/mami" element={<Mami />} />
            <Route path="/track/:id" element={<Track />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AudioProvider>
  )
}
