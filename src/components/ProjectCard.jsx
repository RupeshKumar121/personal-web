import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      className="project-card glass-card rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-300">
            {project.category}
          </span>
        </div>

        {/* Arrow icon on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-indigo-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-400 border border-white/8 group-hover:border-indigo-500/20 group-hover:text-slate-300 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
