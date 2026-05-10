import { useState, useEffect } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let animId
    let target = { x: -100, y: -100 }

    const onMove = e => {
      target = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onEnter = e => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
    }
    const onLeave = e => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(false)
    }

    // Smooth trailing dot
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }))
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <>
      {/* Dot — segue o cursor exato */}
      <div
        className={`${styles.dot} ${clicking ? styles.clicking : ''} ${hovering ? styles.hovering : ''}`}
        style={{ transform: `translate(${pos.x - 5}px, ${pos.y - 5}px)` }}
      />
      {/* Glow — segue com lag */}
      <div
        className={`${styles.glow} ${hovering ? styles.glowHover : ''}`}
        style={{ transform: `translate(${trail.x - 20}px, ${trail.y - 20}px)` }}
      />
    </>
  )
}
