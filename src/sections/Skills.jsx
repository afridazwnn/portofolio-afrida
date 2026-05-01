import { motion } from 'framer-motion'
import { FadeInUp, SectionTag } from '../components/AnimUtils'

const skillCategories = [
  {
    id: 'design',
    label: 'Design',
    color: 'bg-hotpink',
    textColor: 'text-white',
    skills: [
      { name: 'Figma', icon: '🎨', level: 95 },
      { name: 'Canva', icon: '🖌️', level: 90 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & More',
    color: 'bg-pinkmed',
    textColor: 'text-white',
    skills: [
      { name: 'Git & GitHub', icon: '🐙', level: 85 },
      { name: 'VS Code', icon: '💻', level: 95 },
    ],
  },
  {
    id: 'dev',
    label: 'Development',
    color: 'bg-lime',
    textColor: 'text-dark',
    skills: [
      { name: 'React JS', icon: '⚛️', level: 20 },
      { name: 'Tailwind CSS', icon: '💨', level: 50 },
      { name: 'JavaScript', icon: '💛', level: 35 },
      { name: 'Dart', icon: '🎯', level: 45 },
      { name: 'PHP', icon: '🐘', level: 40 },
    ],
  },
]

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: 'easeOut' }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        z: 20,
      }}
      className="bg-cream/5 border border-cream/10 rounded-2xl p-4 flex flex-col gap-3 card-tilt group hover:border-lime/40 transition-all duration-300 hover:bg-cream/10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-poppins font-medium text-cream text-sm">{skill.name}</span>
        </div>
      </div>
    </motion.div>
  )
}

function CategorySection({ cat, catIdx, isHalf }) {
  return (
    <motion.div
      key={cat.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: catIdx * 0.15, duration: 0.6 }}
    >
      {/* Category label */}
      <div className="flex items-center gap-4 mb-6">
        <span className={`${cat.color} ${cat.textColor} font-poppins font-bold text-sm px-4 py-1.5 rounded-full`}>
          {cat.label}
        </span>
        <div className="flex-1 h-px bg-cream/10" />
      </div>

      {/* Skills grid */}
      <div className={`grid gap-4 ${isHalf
        ? 'grid-cols-2 md:grid-cols-2'
        : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
        }`}>
        {cat.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-dark overflow-hidden py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 dot-pattern opacity-10" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -right-20 w-64 h-64 border-2 border-dashed border-lime/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-10 -left-10 w-48 h-48 border border-dashed border-pinkmed/10 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <SectionTag label="My Skills" dark={true} />
          <h2 className="font-poppins font-black text-cream text-4xl md:text-5xl xl:text-6xl mt-4 leading-tight">
            Tools of the{' '}
            <span className="text-gradient">Trade</span>
          </h2>
          <p className="font-poppins text-cream/50 text-base mt-4 max-w-xl mx-auto">
            A curated set of skills I've honed over years of designing and building digital products.
          </p>
        </FadeInUp>

        {/* Skill categories */}
        <div className="space-y-12">
          {/* Top Row: Design & Tools (Side-by-Side on Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.slice(0, 2).map((cat, idx) => (
              <CategorySection key={cat.id} cat={cat} catIdx={idx} isHalf={true} />
            ))}
          </div>

          {/* Bottom Row: Development (Full Width) */}
          {skillCategories.slice(2).map((cat, idx) => (
            <CategorySection key={cat.id} cat={cat} catIdx={idx + 2} isHalf={false} />
          ))}
        </div>


        {/* Extra: floating skill badges */}
        <FadeInUp delay={0.4} className="mt-16 text-center">
          <p className="font-poppins text-cream/40 text-sm mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST API', 'Docker', 'Vercel', 'AWS'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 rounded-full font-poppins text-sm text-cream/60 border border-cream/10 hover:border-lime/40 hover:text-lime transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
