import { motion } from 'framer-motion'
import { ExternalLink, Mail } from 'lucide-react'

import { fadeUp } from '../../constants/animation'
import { portfolio } from '../../data/portfolio'
import { Section } from '../Section'

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title={portfolio.contact.heading} className="contact-section">
      <motion.div className="contact-card" {...fadeUp}>
        <p>{portfolio.contact.body}</p>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${portfolio.email}`}>
            <Mail size={18} aria-hidden="true" />
            {portfolio.email}
          </a>
          {portfolio.socials.map((social) => (
            <a className="button secondary" href={social.href} key={social.label} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              {social.label}
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
