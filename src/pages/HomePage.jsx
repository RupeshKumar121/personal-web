import { useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function HomePage() {
  useEffect(() => {
    const id = sessionStorage.getItem('scrollTo')
    if (id) {
      sessionStorage.removeItem('scrollTo')
      // Wait for all sections to render before scrolling
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </motion.div>
  )
}
