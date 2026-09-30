
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
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
import { EngineeringStory } from './pages/EngineeringStory'
import { Service } from './pages/Service'

function AppContent() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-950' : 'bg-white'}`}>
      <Header />
      <main>
        <Hero />
        <TrustBar />
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
  const storyMatch = window.location.pathname.match(/^\/engineering-stories\/([^/]+)\/?$/)
  const serviceMatch = window.location.pathname.match(/^\/services\/([^/]+)\/?$/)

  return (
    <ErrorBoundary>
      {storyMatch ? <EngineeringStory slug={decodeURIComponent(storyMatch[1])} /> : serviceMatch ? <Service slug={decodeURIComponent(serviceMatch[1])} /> : <AppContent />}
    </ErrorBoundary>
  )
}
