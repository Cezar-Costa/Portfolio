import { useLang } from '../context/LangContext'
import { useTypewriter } from '../hooks/useTypewriter'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()
  const typedTitle = useTypewriter(t.hero.titles)

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          {t.hero.badge}
        </div>

        <p className={styles.greeting}>{t.hero.greeting}</p>
        <h1 className={styles.name}>{t.hero.name}</h1>

        <h2 className={styles.title}>
          {typedTitle}
          <span className={styles.cursor} aria-hidden="true">|</span>
        </h2>

        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <p className={styles.description}>{t.hero.description}</p>

        <div className={styles.ctas}>
          <a href="#projects" className={styles.btnPrimary}>
            {t.hero.cta_projects}
          </a>
          <a href="/curriculo.pdf" download className={styles.btnSecondary}>
            {t.hero.cta_resume}
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            {t.hero.cta_contact}
          </a>
        </div>

        <div className={styles.techRow}>
          {['Django', 'React', 'Docker', 'PostgreSQL', 'Nginx'].map(tech => (
            <span key={tech} className={styles.techPill}>{tech}</span>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
