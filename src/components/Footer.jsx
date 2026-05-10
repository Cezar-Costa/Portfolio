import { useLang } from '../context/LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <span className={styles.accent}>&lt;</span>Cézar<span className={styles.accent}>/&gt;</span>
        </a>
        <p className={styles.built}>{t.footer.built}</p>
        <p className={styles.rights}>© {new Date().getFullYear()} Cézar Costa. {t.footer.rights}</p>
      </div>
    </footer>
  )
}
