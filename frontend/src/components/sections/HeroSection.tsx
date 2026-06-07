import { motion } from 'framer-motion'
import { ArrowUpRight, Heart, Mail, MapPin, Sparkles, Star } from 'lucide-react'

import heroImg from '../../images/hazel_pic.jpg'
import { fadeUp } from '../../constants/animation'
import { portfolio } from '../../data/portfolio'

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <motion.div className="hero-copy" {...fadeUp}>
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          {portfolio.hero.eyebrow}
        </p>
        <h1>{portfolio.name}</h1>
        <p className="title">{portfolio.title}</p>
        <p className="intro">{portfolio.intro}</p>
        <div className="hero-meta">
          <span>
            <MapPin size={17} aria-hidden="true" />
            {portfolio.location}
          </span>
          <span>
            <Heart size={17} aria-hidden="true" />
            {portfolio.hero.signature}
          </span>
        </div>
        <div className="actions">
          <a className="button primary" href={portfolio.hero.primaryCta.href}>
            {portfolio.hero.primaryCta.label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href={portfolio.hero.secondaryCta.href}>
            {portfolio.hero.secondaryCta.label}
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="portrait-panel"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className="portrait-frame">
          <img src={heroImg} alt="Portrait of Hazel P. Felicilda" />
        </div>
        <div className="portrait-note">
          <Star size={18} aria-hidden="true" />
          Hazel's featured portrait.
        </div>
      </motion.div>
    </section>
  )
}
