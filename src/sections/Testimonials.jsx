import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInUp, SectionTag, StarDecor } from '../components/AnimUtils'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Meitanti',
    role: 'Web Development - Senior',
    company: 'TechStartup',
    avatar: 'MT',
    avatarColor: '#C8F060',
    textColor: '#1A1A1A',
    quote: '"Working with Afrida on my mobile app project was a great experience. She understood my requirements clearly and transformed them into a smooth, user-friendly application. Her attention to detail and ability to deliver on time made the whole process stress-free. I’m really satisfied with the final result."',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dinda',
    role: 'CEO Dynoz',
    company: 'Digital Agency',
    avatar: 'DN',
    avatarColor: '#F0097A',
    textColor: '#F5F0EB',
    quote: "Afrida did an amazing job rebranding my brand, Dynoz. She brought fresh ideas and created a modern, cohesive identity that truly represents my business. Her design sense is strong, and she was very responsive throughout the process. I highly recommend her for branding projects.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Syaifatul',
    role: 'Digital Marketing - Junior',
    company: 'Creative Studio',
    avatar: 'SY',
    avatarColor: '#E84DC0',
    textColor: '#F5F0EB',
    quote: "I’m very happy with the e-commerce website Afrida built for my business. The design is clean, professional, and easy to navigate. She made sure everything worked perfectly, from product display to checkout. It has really helped improve my online sales",
    rating: 5,
  },
  {
    id: 4,
    name: 'Wina',
    role: 'HRD',
    company: 'FinTech Co',
    avatar: 'AF',
    avatarColor: '#F5F0EB',
    textColor: '#1A1A1A',
    quote: "Afrida handled my data entry tasks with great accuracy and efficiency. She completed everything on time, even with tight deadlines. Her work is reliable, and I appreciate her professionalism. I would definitely work with her again.",
    rating: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-lime text-lg">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const active = testimonials[current]

  return (
    <section id="testimonials" className="relative bg-cream overflow-hidden py-24 lg:py-32">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-hotpink/10 blob pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-lime/15 blob-2 pointer-events-none" />
      <div className="absolute top-12 right-12 pointer-events-none">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
          <StarDecor size={32} color="#1A1A1A" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <FadeInUp className="text-center mb-16">
          <SectionTag label="Testimonials" dark={false} />
          <h2 className="font-poppins font-black text-dark text-4xl md:text-5xl xl:text-6xl mt-4">
            What People{' '}
            <span className="text-hotpink">Say</span>
          </h2>
        </FadeInUp>

        {/* Main testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-dark rounded-4xl rounded-[3rem] overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Left — avatar panel */}
                <div
                  className="flex flex-col items-center justify-center py-12 px-8 relative"
                  style={{ background: `${active.avatarColor}` }}
                >
                  <div className="absolute inset-0 dot-pattern-dark opacity-20" />
                  <div className="relative z-10 text-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mb-4 mx-auto font-poppins font-black text-3xl"
                      style={{ background: 'rgba(0,0,0,0.15)', color: active.textColor }}
                    >
                      {active.avatar}
                    </div>
                    <h4 className="font-poppins font-bold text-xl mb-1" style={{ color: active.textColor }}>{active.name}</h4>
                    <p className="font-poppins text-sm opacity-70" style={{ color: active.textColor }}>{active.role}</p>
                    <p className="font-poppins text-xs font-semibold mt-1 opacity-50" style={{ color: active.textColor }}>
                      @ {active.company}
                    </p>
                  </div>
                </div>

                {/* Right — quote */}
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <Quote size={40} className="text-lime/30 mb-6" />
                    <p className="font-poppins text-cream/80 text-lg leading-relaxed mb-8 italic">
                      "{active.quote}"
                    </p>
                    <StarRating count={active.rating} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current
                    ? 'w-8 h-3 bg-hotpink'
                    : 'w-3 h-3 bg-dark/20 hover:bg-dark/40'
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-dark/20 flex items-center justify-center hover:border-hotpink hover:bg-hotpink hover:text-white transition-all duration-300 text-dark"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-12 h-12 rounded-full bg-dark flex items-center justify-center hover:bg-hotpink transition-all duration-300 text-cream"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(i)}
              className={`rounded-2xl p-4 text-left transition-all duration-300 border ${i === current
                ? 'border-hotpink/50 bg-hotpink/10'
                : 'border-dark/10 bg-dark/5 hover:border-dark/20'
                }`}
              whileHover={{ scale: 1.03 }}
              data-cursor="hover"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-poppins font-bold mb-3"
                style={{
                  background: t.avatarColor,
                  color: t.textColor,
                }}
              >
                {t.avatar}
              </div>
              <p className="font-poppins font-bold text-dark text-sm">{t.name}</p>
              <p className="font-poppins text-dark/50 text-xs mt-0.5">{t.company}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
