import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Members from './pages/Members'
import Discography from './pages/Discography'
import Company from './pages/Company'
import Mami from './pages/Mami'
import Track from './pages/Track'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
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
  )
}
