import { useState, useEffect } from 'react'

export function useTypewriter(texts, speed = 75, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Reset when texts array changes (language toggle)
  useEffect(() => {
    setDisplayed('')
    setIndex(0)
    setCharIndex(0)
    setDeleting(false)
  }, [texts])

  useEffect(() => {
    const current = texts[index]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      if (texts.length === 1) return
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, speed / 2)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setIndex(i => (i + 1) % texts.length)
    }
  }, [charIndex, deleting, index, texts, speed, pause])

  return displayed
}
