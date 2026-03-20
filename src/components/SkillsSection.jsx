import { motion } from 'framer-motion'
import { useScrollReveal } from './useScrollReveal'
import { skills } from '../data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass-card rounded-2xl p-6 gradient-border group relative overflow-hidden cursor-default"
    >
      {/* shimmer */}
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Glow blob */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{ background: skill.color }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4">
          <span className="text-4xl">{skill.icon}</span>
        </div>

        <h3 className="font-display font-bold text-white text-lg mb-1">{skill.name}</h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-4">{skill.description}</p>

        {/* Category badge */}
        <div className="mt-3">
          <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border"
            style={{ 
              color: skill.color, 
              borderColor: `${skill.color}40`,
              backgroundColor: `${skill.color}10`
            }}>
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1 opacity-10" />
        <div className="orb orb-2 opacity-10" />
      </div>
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-500" />
            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest">What I work with</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title text-white mb-4"
          >
            Skills &{' '}
            <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed"
          >
            A collection of tools, languages, and domains I've honed through years of building and problem-solving.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
