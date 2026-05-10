import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

// Crie uma conta em https://formspree.io e substitua pelo seu Form ID
const FORMSPREE_ID = 'mnjogwwn'

export default function Contact() {
  const { t } = useLang()
  const { contact } = t
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div ref={ref} className={`${styles.container} animate ${inView ? 'visible' : ''}`}>
        <div className={styles.header}>
          <span className={styles.label}>// contact</span>
          <h2 className={styles.title}>{contact.title}</h2>
          <p className={styles.subtitle}>{contact.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.links}>
            <a href="mailto:cezarcosta309@gmail.com" className={styles.linkCard}>
              <span className={styles.linkIcon}>✉</span>
              <div>
                <span className={styles.linkLabel}>{contact.email_label}</span>
                <span className={styles.linkValue}>cezarcosta309@gmail.com</span>
              </div>
            </a>
            <a href="https://github.com/Cezar-Costa" target="_blank" rel="noreferrer" className={styles.linkCard}>
              <span className={styles.linkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </span>
              <div>
                <span className={styles.linkLabel}>{contact.github_label}</span>
                <span className={styles.linkValue}>github.com/Cezar-Costa</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/cezar-costa-dev/" target="_blank" rel="noreferrer" className={styles.linkCard}>
              <span className={styles.linkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <div>
                <span className={styles.linkLabel}>{contact.linkedin_label}</span>
                <span className={styles.linkValue}>linkedin.com/in/cezar-costa-dev</span>
              </div>
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className={`${styles.alert} ${styles.alertSuccess}`}>{contact.form_success}</div>
            )}
            {status === 'error' && (
              <div className={`${styles.alert} ${styles.alertError}`}>{contact.form_error}</div>
            )}
            <div className={styles.field}>
              <input
                type="text"
                name="name"
                placeholder={contact.form_name}
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className={styles.field}>
              <input
                type="email"
                name="email"
                placeholder={contact.form_email}
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className={styles.field}>
              <textarea
                name="message"
                placeholder={contact.form_message}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>
            <button type="submit" className={styles.submit} disabled={status === 'sending'}>
              {status === 'sending' ? contact.form_sending : contact.form_send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
