import { motion } from 'framer-motion';
import experiences from '../assets/experiences.json';

const container = {
  hidden: { },
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ExperienceTimeline = () => (
  <motion.div
    className="relative border-l-2 border-white mx-6 md:mx-12 lg:mx-[7%] py-10"
    initial="hidden"
    animate="visible"
    variants={container}
  >
    {experiences.map((exp, idx) => (
      <motion.div
        key={idx}
        className="mb-10 ml-6 relative"
        variants={item}
      >
        {/* Timeline Dot */}
        <span className="absolute left-[-36px] top-3 w-6 h-6 bg-primary rounded-full bg-white"></span>

        {/* Experience Card */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white">
                {exp.position}
              </h3>
            </div>
            <span className="text-text-secondary text-sm">
              {exp.startDate} – {exp.endDate}
            </span>
          </div>
          <p className="text-text-secondary text-sm mt-1">
            {exp.company} • {exp.place}
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-text-secondary">
            {exp.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default ExperienceTimeline;
