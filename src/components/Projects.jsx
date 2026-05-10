import { useLang } from '../context/LangContext'
import { useInView } from '../hooks/useInView'
import styles from './Projects.module.css'

export default function Projects() {
  const { t } = useLang()
  const { projects } = t
  const [ref, inView] = useInView()

  return (
    <section id="projects" className={styles.section}>
      <div ref={ref} className={`${styles.container} animate ${inView ? 'visible' : ''}`}>
        <div className={styles.header}>
          <span className={styles.label}>// projects</span>
          <h2 className={styles.title}>{projects.title}</h2>
          <p className={styles.subtitle}>{projects.subtitle}</p>
        </div>

        <div className={styles.cards}>
          {projects.items.map(project => (
            <article key={project.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <span className={styles.tagline}>{project.tagline}</span>
                  </div>
                  <span className={`${styles.status} ${project.status.includes('Finalizado') || project.status.includes('Completed') ? styles.statusGreen : styles.statusAmber}`}>
                    <span className={styles.statusDot} />
                    {project.status}
                  </span>
                </div>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.highlights}>
                  <p className={styles.highlightsLabel}>{projects.highlights_label}</p>
                  <ul className={styles.highlightList}>
                    {project.highlights.map(h => (
                      <li key={h}>
                        <span className={styles.check}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.right}>
                  <div className={styles.tech}>
                    {project.tech.map(tech => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.btns}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className={styles.btnGithub}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        {projects.btn_github}
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className={styles.btnDemo}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        {projects.btn_demo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
