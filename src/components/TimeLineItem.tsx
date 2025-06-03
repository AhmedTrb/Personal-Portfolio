import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, Laptop } from "lucide-react"

type Experience = {
  company: string
  location: string
  position: string
  start_date: string
  end_date: string
  duration: string
  mode: string
  responsibilities: string[]
  program?: string
}

type TimelineItemProps = {
  experience: Experience
  index: number
  isLast: boolean
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  // Animation variants for the card sliding in from left
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  }

  // Animation variants for the dot popping in
  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.2 + 0.3,
      },
    },
  }

  return (
    <div className={`relative flex items-start mb-16 pl-12 ${isLast ? "" : "pb-8"}`}>
      {/* Timeline dot */}
      <motion.div
        className="
          absolute left-3 z-10 
          w-6 h-6 rounded-full 
          bg-[var(--color-dark-accent)] 
          border-4 border-[var(--color-dark-border)] 
          shadow-glow
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={dotVariants}
      />

      {/* Content card (always to the right, thanks to pl-12 on the parent) */}
      <motion.div
        className="w-full lg:w-3/4 xl:w-2/3" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
      >
        <div
          className="
            rounded-xl p-6 
            bg-[var(--color-dark-background)] 
            border border-[var(--color-dark-border)] 
            shadow-xl hover:shadow-[0_0_10px_var(--color-accent)] 
            transition-all duration-300 hover:-translate-y-1
          "
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
            <h3 className="text-xl font-bold text-[var(--color-accent)]">
              {experience.position}
            </h3>
            <div className="flex items-center px-3 py-1 rounded-full bg-[var(--color-dark-background)]/50 text-[var(--color-text-secondary)] text-sm">
              <Clock className="w-3 h-3 mr-1 text-[var(--color-text-secondary)]" />
              {experience.duration}
            </div>
          </div>

          <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
            {experience.company}
          </h4>

          {experience.program && (
            <p className="text-[var(--color-accent)] text-sm mb-3 italic">
              {experience.program}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4 text-sm text-[var(--color-text-secondary)]">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-[var(--color-text-secondary)]" />
              {experience.start_date} - {experience.end_date}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-[var(--color-text-secondary)]" />
              {experience.location}
            </div>
            <div className="flex items-center">
              <Laptop className="w-4 h-4 mr-2 text-[var(--color-text-secondary)]" />
              {experience.mode}
            </div>
          </div>

          <div className="mt-4">
            <h5 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
              Key Responsibilities:
            </h5>
            <ul className="space-y-2">
              {experience.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span
                    className="
                      inline-block w-1.5 h-1.5 rounded-full 
                      bg-[var(--color-accent)] 
                      mt-1.5 mr-2
                    "
                  />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {responsibility}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
