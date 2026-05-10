import { LangProvider } from './context/LangContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Cursor />
        <ScrollProgress />
        <PageLoader />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </LangProvider>
    </ThemeProvider>
  )
}
