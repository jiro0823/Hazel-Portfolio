import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HeroSection } from './components/sections/HeroSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { WorkSection } from './components/sections/WorkSection'

function App() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

export default App
