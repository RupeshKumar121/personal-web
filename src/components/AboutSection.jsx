import { motion } from 'framer-motion'
import { useScrollReveal } from './useScrollReveal'
import { Code2, Trophy, Coffee, Rocket } from 'lucide-react'
import { about } from '../data'

// Renders paragraph text, turning <highlighted text> into colored spans
const highlightColors = ['text-indigo-300', 'text-purple-300', 'text-cyan-300']

function HighlightedText({ text }) {
  const parts = text.split(/(\[[^\]]+\])/g)
  let colorIndex = 0
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('[') && part.endsWith(']')) {
          const color = highlightColors[colorIndex % highlightColors.length]
          colorIndex++
          return (
            <span key={i} className={`${color} font-semibold`}>
              {part.slice(1, -1)}
            </span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

const statIcons = [Code2, Trophy, Coffee, Rocket]

export default function AboutSection() {
  const [ref, visible] = useScrollReveal()
  const [imgRef, imgVisible] = useScrollReveal()

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-2 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div ref={ref} className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500" />
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest">Who I am</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" />

            <div className="relative w-full max-w-md h-[520px] rounded-3xl overflow-hidden gradient-border">
              <img
                src={about.photo}
                alt={about.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=90'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full border-2 border-indigo-500/40" />
            <div className="absolute -top-3 -left-3 w-3 h-3 rounded-full bg-indigo-500/60 translate-x-1.5 translate-y-1.5" />
          </motion.div>

          {/* Right — Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title text-white mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="text-slate-400 leading-relaxed mb-5 text-base"
              >
                <HighlightedText text={para} />
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            >
              {about.stats.map(({ label, value }, i) => {
                const Icon = statIcons[i % statIcons.length]
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={visible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="glass-card rounded-2xl p-4 text-center group hover:border-indigo-500/40 transition-all"
                  >
                    <Icon className="w-4 h-4 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-display font-extrabold text-xl text-white mb-0.5">{value}</div>
                    <div className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">{label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
