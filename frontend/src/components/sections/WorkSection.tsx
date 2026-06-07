import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { fadeUp } from '../../constants/animation'
import { portfolio } from '../../data/portfolio'
import { Section } from '../Section'

export function WorkSection() {
  return (
    <Section id="projects" eyebrow="Projects & Achievements" title="Selected work, ready for her real details">
      <div className="work-grid">
        {portfolio.works.map((work, index) => (
          <motion.a
            className="work-card"
            href={work.href}
            key={work.title}
            rel="noreferrer"
            target="_blank"
            {...fadeUp}
          >
            <span className="card-number">0{index + 1}</span>
            <p className="work-type">{work.type}</p>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <ul>
              {work.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <span className="work-link">
              Open project
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
