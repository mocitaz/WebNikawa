interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  pattern?: boolean
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  pattern = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`section-wrapper ${pattern ? 'pattern-bg' : ''} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  )
}

