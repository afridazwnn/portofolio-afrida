import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FadeInLeft, FadeInRight, SectionTag, StarDecor, SparkleDecor } from '../components/AnimUtils'
import { Download, Heart } from 'lucide-react'

function Counter({ from = 0, to, suffix = '' }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const steps = 60
    const increment = (to - from) / steps
    let current = from
    const timer = setInterval(() => {
      current += increment
      if (current >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, from, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 0, suffix: '+', label: 'Years Experience' },
  { value: 0, suffix: '+', label: 'Projects Completed' },
  { value: 1, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '★', label: 'Average Rating' },
]

const funFacts = [
  { icon: '☕', text: 'Runs on coffee & creativity' },
  { icon: '🎨', text: 'Color theory enthusiast' },
  { icon: '🌙', text: 'Night owl developer' },
  { icon: '🎵', text: 'Codes with lo-fi beats' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-cream overflow-hidden py-24 lg:py-32">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 dot-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 dot-pattern-dark opacity-5 pointer-events-none" />

      {/* Section color block accent */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-hotpink via-pinkmed to-lime" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — Visual */}
          <FadeInLeft className="lg:col-span-5 flex justify-center relative">
            <div className="relative">
              {/* Blob photo frame */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 md:w-80 md:h-80"
              >
                {/* Outer ring */}
                <div className="absolute -inset-4 border-4 border-dashed border-lime/40 blob-3 animate-spin-slow" />

                {/* Main blob */}
                <div className="absolute inset-0 bg-dark blob-2" />
                <div className="absolute inset-2 bg-gradient-to-br from-hotpink to-pinkmed blob flex items-center justify-center overflow-hidden">
                  <span className="font-poppins font-black text-9xl text-white/10 select-none">AZ</span>
                </div>

                <div className="absolute inset-4 blob overflow-hidden border-2 border-dark/10 bg-lime/10">
                  <img src="/afrida-avatar.png" alt="Afrida Rizwana" className="w-full h-full z-10 relative object-cover scale-[1.4] -translate-y-10 mix-blend-normal" />
                </div>

                {/* Star overlay */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <StarDecor size={36} color="#C8F060" />
                </motion.div>
              </motion.div>

              {/* Fun facts card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-dark rounded-2xl p-4 shadow-2xl w-52"
              >
                <p className="font-poppins font-bold text-lime text-sm mb-3">Fun Facts ✦</p>
                <div className="space-y-2">
                  {funFacts.map((fact, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-base">{fact.icon}</span>
                      <span className="font-poppins text-cream/70 text-xs">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </FadeInLeft>

          {/* RIGHT — Content */}
          <FadeInRight className="lg:col-span-7" delay={0.1}>
            <SectionTag label="About Me" dark={false} />

            <h2 className="font-poppins font-black text-dark text-4xl md:text-5xl xl:text-6xl leading-tight mb-6 mt-4">
              Designing the{' '}
              <span className="relative inline-block">
                <span className="text-hotpink">Future</span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-1 bg-hotpink"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              {' '}one pixel at a time.
            </h2>

            <p className="font-poppins text-dark/60 text-base leading-relaxed mb-4">
              Hello! I'm <strong className="text-dark">Afrida Rizwana</strong>, a detail-oriented freelancer specializing in data entry and social media management, passionate about helping businesses stay organized and grow their online presence.
            </p>
            <p className="font-poppins text-dark/60 text-base leading-relaxed mb-8">
              With a background in software engineering and digital work, I work at the intersection of accuracy and creativity. I believe that great work is not only about getting tasks done, but also about delivering them efficiently, neatly, and with real value.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center p-3 rounded-xl bg-dark/5"
                >
                  <p className="font-poppins font-black text-dark text-2xl md:text-3xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-poppins text-dark/50 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 bg-dark text-cream font-poppins font-semibold px-6 py-3 rounded-full hover:bg-hotpink transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} /> Download CV
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 border-2 border-dark text-dark font-poppins font-semibold px-6 py-3 rounded-full hover:border-hotpink hover:text-hotpink transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Heart size={16} /> Get in Touch
              </motion.a>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
