import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Code2, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Github, href: 'https://github.com/RupeshKumar121', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rupeshkumariims/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/rupeshkumariims', label: 'Twitter' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-indigo-500/10 bg-void/50 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-white/90">
                Rupesh Kumar | <span className="gradient-text">Building Things That Matters</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-body">
              Not just learning, also building. Software engineer & entrepreneur focused on building impactful, real-world solutions through technology. Crafting elegant solutions one commit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-slate-300 mb-4 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-500 hover:text-indigo-400 transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-semibold text-slate-300 mb-4 uppercase tracking-widest text-xs">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-10 h-10 rounded-xl border border-indigo-500/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:shadow-glow-sm transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-slate-600 text-xs font-mono">
              rupesh.ipm25@iimshillong.ac.in
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
