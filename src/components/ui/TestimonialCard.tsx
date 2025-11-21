interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  project?: string
}

export default function TestimonialCard({
  quote,
  author,
  company,
  project,
}: TestimonialCardProps) {
  return (
    <div className="card bg-gradient-to-br from-primary/5 to-transparent">
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-primary/30"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>
      
      <p className="text-neutral-700 mb-6 leading-relaxed italic text-lg">
        &ldquo;{quote}&rdquo;
      </p>
      
      <div className="border-t border-neutral-200 pt-4">
        <div className="font-semibold text-primary">{author}</div>
        <div className="text-sm text-neutral-600">{company}</div>
        {project && (
          <div className="text-xs text-neutral-500 mt-1">{project}</div>
        )}
      </div>
    </div>
  )
}

