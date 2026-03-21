import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Zap, Target } from 'lucide-react'
import { projects } from '../data'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

function ContentBlock({ block }) {
  const s = block.style || {}   // inline styles from index.js
  const cx = block.className || '' // extra classes from index.js

  switch (block.type) {
    case 'text':
      return (
        <p className={`text-slate-400 leading-relaxed text-base ${cx}`} style={s}>
          {block.content}
        </p>
      )

    case 'heading':
      return (
        <h3 className={`font-display font-bold text-white text-xl mt-8 mb-3 ${cx}`} style={s}>
          {block.content}
        </h3>
      )

    case 'image':
      return (
        <figure className={`my-6 ${cx}`} style={s}>
          <img
            src={block.src}
            alt={block.alt || ''}
            className="w-full rounded-2xl border border-white/10 object-contain bg-white/5"
            style={{ maxHeight: block.height || '480px', width: block.width || '100%', ...block.imgStyle }}
          />
          {block.caption && (
            <figcaption className="text-center text-slate-500 text-xs font-mono mt-2">{block.caption}</figcaption>
          )}
        </figure>
      )

    case 'images':
      return (
        <div className={`grid gap-4 my-6 ${block.cols === 3 ? 'grid-cols-3' : 'grid-cols-2'} ${cx}`} style={s}>
          {block.items.map((img, i) => (
            <figure key={i}>
              <img
                src={img.src}
                alt={img.alt || ''}
                className="w-full rounded-xl border border-white/10 object-cover"
                style={{ height: img.height || '12rem', ...img.style }}
              />
              {img.caption && <figcaption className="text-center text-slate-500 text-xs font-mono mt-1">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )

    case 'youtube':
      return (
        <div className={`my-6 rounded-2xl overflow-hidden border border-white/10 aspect-video ${cx}`} style={s}>
          <iframe
            src={`https://www.youtube.com/embed/${block.videoId}`}
            title={block.title || 'YouTube video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )

    case 'divider':
      return <div className={`h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent my-6 ${cx}`} style={s} />

    case 'callout':
      return (
        <div
          className={`glass-card rounded-2xl p-5 border-l-4 my-4 ${cx}`}
          style={{ borderLeftColor: block.color || '#6366f1', ...s }}
        >
          {block.label && (
            <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: block.color || '#818cf8' }}>
              {block.label}
            </p>
          )}
          <p className="text-slate-300 text-sm leading-relaxed" style={block.textStyle}>{block.content}</p>
        </div>
      )

    case 'pdf':
      return (
        <div className={`my-6 ${cx}`} style={s}>
          {block.caption && (
            <p className="text-slate-400 text-sm font-mono mb-2">{block.caption}</p>
          )}
          <div
            className="rounded-2xl overflow-hidden border border-white/10"
            style={{ height: block.height || '600px' }}
          >
            <iframe
              src={`${block.src}#toolbar=1&navpanes=0&scrollbar=1`}
              title={block.caption || 'PDF Document'}
              className="w-full h-full bg-white"
            />
          </div>
          <div className="mt-2 flex justify-end">
            <a
              href={block.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-mono transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Open PDF in new tab
            </a>
          </div>
        </div>
      )

    default:
      return null
  }
}

export default function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 text-xl mb-4">Project not found.</p>
          <Link to="/projects" className="btn-primary relative z-10"><span className="relative z-10">Back to Projects</span></Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen pt-24 pb-20">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="orb orb-1 opacity-8" />
      </div>

      {/* Banner */}
      <div className="relative h-[50vh] mb-12 overflow-hidden">
        <img src={project.banner} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 via-transparent to-midnight/50" />
        <div className="absolute top-8 left-6 lg:left-12 z-10">
          <button onClick={() => navigate('/projects')} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-midnight/60 backdrop-blur-sm border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Projects</span>
          </button>
        </div>
        <div className="absolute bottom-8 left-6 lg:left-12">
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 text-indigo-300">{project.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Title + Links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
          <div>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl tracking-tight mb-3">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 text-xs font-mono rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {project.github && (
              <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all text-sm font-mono">
                <Github className="w-4 h-4" /> GitHub
              </motion.a>
            )}
            {project.demo && (
              <motion.a href={project.demo} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="btn-primary flex items-center gap-2 text-sm relative z-10">
                <ExternalLink className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mb-10" />

        {/* 3-col main + 1-col sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-4 space-y-8">

            {/* About */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-indigo-400" />
                <h2 className="font-display font-bold text-white text-xl">About this project</h2>
              </div>
              <p className="text-slate-400 leading-relaxed text-base">{project.description}</p>
            </motion.div>

            {/* Rich content blocks */}
            {project.content && project.content.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4">
                {project.content.map((block, i) => <ContentBlock key={i} block={block} />)}
              </motion.div>
            )}

            {/* Problem Solved */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card rounded-2xl p-6 gradient-border">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-amber-400" />
                <h2 className="font-display font-bold text-white text-lg">Problem Solved</h2>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">{project.problemSolved}</p>
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h2 className="font-display font-bold text-white text-xl">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.07 }} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-400 text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-widest">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {project.techs.map(tech => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 transition-colors">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-widest">Links</h3>
              <div className="space-y-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                    <Github className="w-4 h-4 group-hover:text-indigo-400" />
                    <span className="text-sm font-mono">Source Code</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100" />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                    <ExternalLink className="w-4 h-4 group-hover:text-indigo-400" />
                    <span className="text-sm font-mono">Live Demo</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
