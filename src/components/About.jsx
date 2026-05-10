import { useLang } from '../context/LangContext'
import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const { t } = useLang()
  const { about } = t
  const [ref, inView] = useInView()

  return (
    <section id="about" className={styles.section}>
      <div ref={ref} className={`${styles.container} animate ${inView ? 'visible' : ''}`}>
        <div className={styles.header}>
          <span className={styles.label}>// about</span>
          <h2 className={styles.title}>{about.title}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>{about.p1}</p>
            <p>{about.p2}</p>
            <p>{about.p3}</p>

            <div className={styles.highlight}>
              <p className={styles.highlightTitle}>{about.highlight_title}</p>
              <div className={styles.highlightItems}>
                {about.highlights.map(h => (
                  <div key={h.label} className={styles.highlightItem}>
                    <span>{h.icon}</span>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>
              <p className={styles.highlightDesc}>{about.highlight_desc}</p>
            </div>
          </div>

          <div className={styles.skills}>
            <p className={styles.skillsTitle}>{about.skills_title}</p>
            <div className={styles.stackGrid}>
              {about.stack.map(group => (
                <div key={group.category} className={styles.stackGroup}>
                  <span className={styles.category}>{group.category}</span>
                  <div className={styles.pills}>
                    {group.items.map(item => (
                      <span key={item} className={styles.pill}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
