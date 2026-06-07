import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'

import { fadeUp } from '../../constants/animation'
import { portfolio } from '../../data/portfolio'
import { Section } from '../Section'

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About Hazel" title={portfolio.about.heading}>
      <motion.div className="about-grid" {...fadeUp}>
        <div className="about-card">
          {portfolio.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="trait-card">
          <Palette size={26} aria-hidden="true" />
          <h3>Her working style</h3>
          <div className="chips">
            {portfolio.about.traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="stats">
        {portfolio.stats.map((stat) => (
          <motion.div className="stat" key={stat.label} {...fadeUp}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
