import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={['section', className].filter(Boolean).join(' ')}>
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}
