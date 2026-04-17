import { motion } from 'framer-motion'
import { FadeInUp, FadeInLeft, FadeInRight, SectionTag, SparkleDecor } from '../components/AnimUtils'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    type: 'Edu',
    role: 'Software Engineering & Game',
    company: 'SMK Negeri 4 Bogor',
    period: '2023 — 2026',
    description: 'I have studied various aspects of Software and Game Development, including frontend development, backend development, branding, UI/UX design, as well as application and website development. In addition, I have gained a solid understanding of the fundamentals of game development and software project management..',
    tags: ['UI/UX', 'Frontend', 'Backend', 'User Research'],
    color: '#C8F060',
    side: 'right',
  },
  {
    type: 'Internship',
    role: 'Software Engineering',
    company: 'PT. WAN Teknologi',
    period: 'Jan 2026 — Apr 2026',
    description: 'During my internship as a Software Engineering intern at PT. WAN Teknologi, I handled data entry tasks using Excel, Google Sheets, and web-based platforms (CMS/admin dashboards) while ensuring data accuracy and consistency. I also assisted in social media management, including content posting and scheduling, and supported basic UI/UX design and front-end tasks, which helped me develop strong attention to detail, organization, and teamwork skills.',
    tags: ['Data Entry', 'Social Media', 'Frontend Mobile', 'Virtual Assistant'],
    color: '#F0097A',
    side: 'left',
  }
]

function TimelineItem({ exp, index }) {
  const isRight = exp.side === 'right'

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative flex ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-start md:items-center`}
    >
      {/* Content card */}
      <div className={`flex-1 ${isRight ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          className="bg-cream/5 border border-cream/10 rounded-3xl p-6 hover:border-lime/30 transition-all duration-300 hover:bg-cream/8"
          style={{ borderLeft: isRight ? 'none' : `3px solid ${exp.color}`, borderRight: isRight ? `3px solid ${exp.color}` : 'none' }}
        >
          <div className={`flex items-center gap-2 mb-3 ${isRight ? 'md:justify-end' : ''}`}>
            {exp.type === 'edu' ? <GraduationCap size={14} className="text-lime" /> : <Briefcase size={14} className="text-hotpink" />}
            <span className="font-poppins text-cream/40 text-xs tracking-widest uppercase">{exp.period}</span>
          </div>
          <h3 className="font-poppins font-bold text-cream text-xl mb-1">{exp.role}</h3>
          <p className="font-poppins font-semibold text-sm mb-3" style={{ color: exp.color }}>{exp.company}</p>
          <p className="font-poppins text-cream/50 text-sm leading-relaxed mb-4">{exp.description}</p>
          <div className={`flex flex-wrap gap-2 ${isRight ? 'md:justify-end' : ''}`}>
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full font-poppins text-xs font-medium"
                style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center node */}
      <div className="relative flex-shrink-0 w-14 h-14 hidden md:flex items-center justify-center">
        <motion.div
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10"
          style={{ borderColor: exp.color, background: '#1A1A1A' }}
        >
          {exp.type === 'edu'
            ? <GraduationCap size={16} style={{ color: exp.color }} />
            : <Briefcase size={16} style={{ color: exp.color }} />}
        </motion.div>
      </div>

      {/* Empty side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative bg-dark overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 dot-pattern opacity-10" />
        <div className="absolute left-0 bottom-0 w-64 h-64 dot-pattern-pink opacity-10" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <SectionTag label="Experience" dark={true} />
          <h2 className="font-poppins font-black text-cream text-4xl md:text-5xl xl:text-6xl mt-4 leading-tight">
            My{' '}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="font-poppins text-cream/50 text-base mt-4 max-w-md mx-auto">
            A timeline of professional growth, learning, and meaningful impact.
          </p>
        </FadeInUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lime via-pinkmed to-hotpink hidden md:block"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={0.5} className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-lime/10 border border-lime/20 rounded-full px-6 py-3">
            <SparkleDecor size={16} color="#C8F060" />
            <span className="font-poppins text-cream/70 text-sm">
              And the journey continues... 🚀
            </span>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
