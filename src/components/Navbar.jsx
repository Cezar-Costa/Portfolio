import { useState, useEffect, useMemo } from 'react'
import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { lang, toggle, t } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionIds = useMemo(() => ['home', 'about', 'projects', 'experience', 'contact'], [])
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', id: 'home', label: t.nav.home },
    { href: '#about', id: 'about', label: t.nav.about },
    { href: '#projects', id: 'projects', label: t.nav.projects },
    { href: '#experience', id: 'experience', label: t.nav.experience },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>Cézar
          <span className={styles.logoAccent}>/&gt;</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.id ? styles.activeLink : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {active === link.id && <span className={styles.activeDot} />}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button className={styles.langToggle} onClick={toggle} aria-label="Toggle language">
            {lang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
          </button>
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
