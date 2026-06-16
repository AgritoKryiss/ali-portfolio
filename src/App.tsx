
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTopButton } from './components/BackToTop'
import { ErrorBoundary } from './components/ErrorBoundary'
import { useTheme } from './hooks/useTheme'

function AppContent() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-950' : 'bg-white'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  )
}


