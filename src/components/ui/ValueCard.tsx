interface ValueCardProps {
  title: string
  description: string
  icon?: string
}

export default function ValueCard({ title, description, icon }: ValueCardProps) {
  return (
    <div className="card group hover:border-primary hover:-translate-y-2 animate-slide-up">
      <div className="flex flex-col items-center text-center">
        {icon && (
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

