import { useLang } from '../context/LangContext'
import { useInView } from '../hooks/useInView'
import styles from './Timeline.module.css'

export default function Timeline() {
  const { t } = useLang()
  const [ref, inView] = useInView()
  const { experience } = t

  return (
    <section id="experience" className={styles.section}>
      <div ref={ref} className={`${styles.container} animate ${inView ? 'visible' : ''}`}>
        <div className={styles.header}>
          <span className={styles.label}>// experience</span>
          <h2 className={styles.title}>{experience.title}</h2>
          <p className={styles.subtitle}>{experience.subtitle}</p>
        </div>

        <div className={styles.timeline}>
          {experience.items.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.left}>
                <span className={styles.year}>{item.year}</span>
              </div>

              <div className={styles.center}>
                <div className={styles.dot} />
                {i < experience.items.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.right}>
                <div className={styles.card} data-year={item.year}>
                  <p className={styles.role}>{item.role}</p>
                  <p className={styles.company}>{item.company}</p>
                  <p className={styles.desc}>{item.description}</p>
                  <div className={styles.pills}>
                    {item.tech.map(t => (
                      <span key={t} className={styles.pill}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
