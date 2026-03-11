import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { useScrollReveal } from './useScrollReveal'
import { contactInfo } from '../data'

// Platform icons as SVG
const PlatformIcon = ({ name }) => {
  switch (name.toLowerCase()) {
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    case 'twitter':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    case 'codechef':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.257.004C5.06.136.064 5.198.064 11.422c0 6.307 5.119 11.426 11.426 11.426S22.916 17.729 22.916 11.422C22.916 5.198 17.92.136 11.724.004h-.467zM12 2.089c.195 0 .39.007.583.018a9.323 9.323 0 0 1 8.245 9.315 9.333 9.333 0 0 1-9.333 9.333 9.333 9.333 0 0 1-9.333-9.333A9.323 9.323 0 0 1 10.407 2.11c.197-.014.395-.022.593-.022zm-.5 2.5C9.667 4.59 8 6.09 8 8s.667 2 1.5 2S11 9.41 11 8s-.833-3.41-1.5-3.41zm1 0C13.167 4.59 14 6.09 14 8s-.667 2-1.5 2-1.5-.59-1.5-2 .833-3.41 1.5-3.41z"/>
        </svg>
      )
    case 'leetcode':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      )
    case 'codeforces':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V15c0-.828.672-1.5 1.5-1.5h3z"/>
        </svg>
      )
    default:
      return <ExternalLink className="w-5 h-5" />
  }
}

export default function ContactSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-3 opacity-15" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500" />
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest">Get in touch</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-md mx-auto"
          >
            Open to collaborations, opportunities, or just a good tech conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 gradient-border"
          >
            <h3 className="font-display font-700 text-white text-xl mb-8">Direct Contact</h3>
            
            <div className="space-y-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-slate-200 group-hover:text-white group-hover:text-indigo-300 transition-colors font-body">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-slate-200 group-hover:text-purple-300 transition-colors font-body">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <a
                href={`mailto:${contactInfo.email}`}
                className="btn-primary inline-flex items-center gap-2 w-full justify-center relative z-10"
              >
                <Mail className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Send me an email</span>
              </a>
            </div>
          </motion.div>

          {/* Profiles Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-display font-700 text-white text-xl mb-6">Developer Profiles</h3>
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.profiles.map((profile, i) => (
                <motion.a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-2xl p-4 group cursor-pointer gradient-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${profile.color}15`,
                        border: `1px solid ${profile.color}30`,
                        color: profile.color,
                      }}
                    >
                      <PlatformIcon name={profile.icon} />
                    </div>
                    <span className="font-display font-600 text-sm text-white">{profile.name}</span>
                  </div>
                  <p className="text-slate-500 text-xs font-mono truncate group-hover:text-slate-400 transition-colors">
                    {profile.handle}
                  </p>
                  <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-indigo-400 font-mono">Visit</span>
                    <ExternalLink className="w-3 h-3 text-indigo-400" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
