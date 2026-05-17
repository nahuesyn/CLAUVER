import { createContext, useContext, useState, useRef } from 'react'

const AudioCtx = createContext(null)

export function AudioProvider({ children }) {
  const [playingSlug, setPlayingSlug] = useState(null)
  const [activeSrc, setActiveSrc] = useState('')
  const iframeRef = useRef(null)

  return (
    <AudioCtx.Provider value={{ playingSlug, setPlayingSlug, activeSrc, setActiveSrc, iframeRef }}>
      {children}
    </AudioCtx.Provider>
  )
}

export const useAudio = () => useContext(AudioCtx)
