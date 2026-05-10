import { useState, useEffect } from 'react'
import styles from './PageLoader.module.css'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.fonts.ready.then(() => {
      setTimeout(() => setVisible(false), 400)
    })
    // Fallback: hide after 2s regardless
    const fallback = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(fallback)
  }, [])

  if (!visible) return null

  return (
    <div className={styles.loader}>
      <div className={styles.logo}>
        <span className={styles.accent}>&lt;</span>
        CC
        <span className={styles.accent}>/&gt;</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} />
      </div>
    </div>
  )
}
