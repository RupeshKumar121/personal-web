import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pendingScroll, setPendingScroll] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  // When we navigate home with a pending scroll target, scroll once page mounts
  useEffect(() => {
    if (pendingScroll && location.pathname === '/') {
      const id = pendingScroll
      setPendingScroll(null)
      // rAF ensures DOM has painted before we try to scroll
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        })
      })
    }
  }, [location.pathname, pendingScroll])

  const handleHashLink = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        setPendingScroll(id)
        navigate('/')
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-midnight/80 backdrop-blur-xl border-b border-indigo-500/10 shadow-glow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">
              dev<span className="gradient-text">.portfolio</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleHashLink(e, link.href)}
                className={`nav-link text-sm uppercase tracking-widest font-mono ${
                  location.pathname === link.href ? 'text-indigo-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-indigo-500/20 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden"
          >
            <div className="glass-card mx-4 rounded-2xl p-6 flex flex-col gap-4 border border-indigo-500/20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => { handleHashLink(e, link.href); setMenuOpen(false) }}
                    className="block py-3 px-4 text-slate-300 hover:text-white font-display font-semibold text-lg tracking-wide border-b border-white/5 hover:border-indigo-500/30 transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
