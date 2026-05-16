import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInUp, SectionTag, StarDecor } from '../components/AnimUtils'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3.5 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

// Project Images (saved in public/projects/)
const projects = [
  {
    id: 1,
    title: 'MyKost App',
    category: 'Full Stack',
    tags: ['React', 'Laravel', 'Flutter'],
    description: 'A digital boarding house management platform featuring room booking, payment management, and complaint handling systems.',
    color: 'bg-hotpink',
    accent: '#F0097A',
    size: 'medium',
    image: '/projects/mykost.png',
    year: '2026',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'E-Learning Platform Mobile App',
    category: 'UI/UX Design',
    tags: ['Figma', 'UI/UX', 'Education', 'Mobile App'],
    description: 'Designed a mobile app user interface for an online learning platform, including the splash screen, login page, user dashboard, and course management features.',
    color: 'bg-dark',
    accent: '#1A1A1A',
    size: 'medium',
    image: '/projects/learnify-app.png',
    year: '2026',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'SMK Gallery',
    category: 'Full Stack',
    tags: ['Laravel', 'Tailwind', 'Alpine.js', 'MySQL'],
    description: 'A school gallery website project developed for the competency exam, designed to manage school news, events, extracurricular activities, and photo galleries.',
    color: 'bg-lime',
    accent: '#C8F060',
    size: 'medium',
    image: '/projects/smk-gallery.png',
    year: '2025',
    link: '#',
    github: '#',
    isInternal: true,
  },
  {
    id: 4,
    title: 'Learnify - E-Learning Platform',
    category: 'UI/UX Design',
    tags: ['Figma', 'UI/UX', 'Education', 'Dashboard'],
    description: 'Designed a comprehensive user interface for an online learning platform, including a landing page, admin dashboard, and course management features.',
    color: 'bg-cream',
    accent: '#F5F0EB',
    size: 'medium',
    image: '/projects/learnify-ui.png',
    year: '2025',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Neospragma Feed Design',
    category: 'Design',
    tags: ['Canva', 'Design', 'Event'],
    description: 'Designed event feed content for Neospragma 2024 and 2025, each with different visual themes and concepts.',
    color: 'bg-dark',
    accent: '#1A1A1A',
    size: 'medium',
    image: '/projects/eventdesign.png',
    year: '2024 & 2025',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'TikTok Account Insight',
    category: 'Social Media',
    tags: ['TikTok', 'Content Strategy', 'Analytics', 'Growth'],
    description: 'Managed content strategy and TikTok account management for @bbriesh.id for 1 month, successfully reaching 54K views, 3K+ likes, and strong community engagement.',
    color: 'bg-dark',
    accent: '#1A1A1A',
    size: 'medium',
    image: '/projects/tiktok-insight.png',
    year: '2026',
    link: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'Brand Identity Kit',
    category: 'UI/UX Design',
    tags: ['Figma', 'Branding', 'Rebranding Brand'],
    description: 'Consistency in playful design to create a strong and memorable brand identity.',
    color: 'bg-lime',
    accent: '#C8F060',
    size: 'medium',
    image: '/projects/brand-identity.png',
    year: '2024',
    link: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'Feed Tiktok Bbrieshid',
    category: 'Design',
    tags: ['Canva', 'Tiktok'],
    description: 'Designed TikTok feed content for Bbriesh.id with a beauty niche, using consistent branding and visual identity.',
    color: 'bg-dark',
    accent: '#1A1A1A',
    size: 'medium',
    image: '/projects/tiktokakun.png',
    year: 'Present',
    link: '#',
    github: '#',
  }
]

const filters = ['All', 'UI/UX Design', 'Frontend Dev', 'Full Stack', 'Social Media', 'Mobile App']

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  const isLarge = project.size === 'large'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative rounded-3xl overflow-hidden group ${isLarge ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {/* Card background */}
      <div className={`${project.color} w-full ${project.aspect || 'aspect-[4/3]'} relative overflow-hidden`}>
        {/* Pattern overlay */}
        {project.accent === '#C8F060' ? (
          <div className="absolute inset-0 dot-pattern-dark opacity-20" />
        ) : project.accent === '#1A1A1A' ? (
          <div className="absolute inset-0 dot-pattern opacity-20" />
        ) : (
          <div className="absolute inset-0 dot-pattern opacity-10" />
        )}

        {/* Content placeholder / Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          ) : (
            <span
              className="font-poppins font-black text-8xl md:text-9xl select-none"
              style={{ color: 'rgba(255,255,255,0.08)' }}
            >
              {String(project.id).padStart(2, '0')}
            </span>
          )}
        </div>

        {/* Project number tag */}
        <div className="absolute top-5 left-5">
          <span
            className="font-poppins text-xs font-bold px-3 py-1 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(8px)',
              color: project.accent === '#C8F060' || project.accent === '#F5F0EB' ? '#1A1A1A' : '#F5F0EB',
              border: `1px solid ${project.accent}40`,
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-dark/90 backdrop-blur-sm flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md font-poppins text-xs font-medium text-dark bg-lime"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-poppins text-cream/80 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3">
                {project.link !== '#' && (
                  <motion.a
                    href={project.link}
                    className="flex items-center gap-2 bg-lime text-dark font-poppins font-semibold text-sm px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </motion.a>
                )}
                {project.github !== '#' && (
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 border border-cream/30 text-cream font-poppins text-sm px-4 py-2 rounded-full hover:border-cream"
                    whileHover={{ scale: 1.05 }}
                  >
                    <GithubIcon size={14} /> Code
                  </motion.a>
                )}
                {project.isInternal && (
                  <span className="flex items-center gap-2 border border-lime/30 text-lime font-poppins text-sm px-4 py-2 rounded-full">
                    Internal Project
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card footer */}
      <div className="bg-dark/50 backdrop-blur-sm border border-cream/10 p-5 flex items-center justify-between">
        <div>
          <p className="font-poppins text-cream/50 text-xs mb-1">{project.category}</p>
          <h3 className="font-poppins font-bold text-cream text-lg">{project.title}</h3>
        </div>
        <motion.div
          whileHover={{ rotate: 45, scale: 1.1 }}
          className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-lime hover:bg-lime/10 transition-all duration-300"
        >
          <ArrowUpRight size={16} className="text-cream" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative bg-cream overflow-hidden py-24 lg:py-32">
      {/* Decorative */}
      <div className="absolute top-8 right-8 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <StarDecor size={48} color="#F0097A" />
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-8 pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <StarDecor size={36} color="#1A1A1A" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeInUp className="mb-12">
          <SectionTag label="My Projects" dark={false} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <h2 className="font-poppins font-black text-dark text-4xl md:text-5xl xl:text-6xl leading-tight max-w-xl">
              Work that{' '}
              <span className="relative">
                <span className="text-hotpink">speaks</span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-1.5 bg-hotpink rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>{' '}
              for itself.
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all duration-200 ${activeFilter === f
                    ? 'bg-dark text-cream'
                    : 'bg-dark/10 text-dark hover:bg-dark/20'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more */}
        <FadeInUp delay={0.3} className="text-center mt-12">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-dark text-dark font-poppins font-bold px-8 py-4 rounded-full hover:bg-dark hover:text-cream transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <GithubIcon size={20} /> View All on GitHub
          </motion.a>
        </FadeInUp>
      </div>
    </section>
  )
}
