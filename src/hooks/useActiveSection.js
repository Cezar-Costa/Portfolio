import { useState, useEffect } from 'react'

export function useActiveSection(ids, offset = 0.3) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observers = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round((1 - offset) * 100)}% 0px` }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [ids, offset])

  return active
}
