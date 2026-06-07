import { motion } from 'framer-motion'

import { fadeUp } from '../../constants/animation'
import { portfolio } from '../../data/portfolio'
import { Section } from '../Section'

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Education & Experience" title="A growing journey shaped with intention">
      <div className="timeline">
        {portfolio.timeline.map((item) => (
          <motion.article className="timeline-item" key={`${item.period}-${item.title}`} {...fadeUp}>
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p className="place">{item.place}</p>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
