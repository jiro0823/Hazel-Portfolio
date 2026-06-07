import { motion } from 'framer-motion'

import { fadeUp } from '../../constants/animation'
import { portfolio } from '../../data/portfolio'
import { Section } from '../Section'

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Skills & Talents" title="Modern tools, soft polish, clear usability">
      <div className="skill-grid">
        {portfolio.skillGroups.map((group) => (
          <motion.article className="skill-card" key={group.title} {...fadeUp}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
