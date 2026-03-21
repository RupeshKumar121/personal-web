import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Only scroll to top when entering a project detail page
    if (location.pathname.startsWith('/projects/')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location.pathname])

  return (
    <div className="relative min-h-screen bg-midnight text-slate-200">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
