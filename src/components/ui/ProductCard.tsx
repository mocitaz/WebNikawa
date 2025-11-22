import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  description: string
  category: string
  image?: string
}

export default function ProductCard({ id, name, description, category, image }: ProductCardProps) {
  return (
    <div className="group bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundColor: image ? undefined : '#0f172a',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/70 via-neutral-900/20 to-transparent" />
        <div className="absolute inset-0 border-b border-white/10" />
        <div className="absolute bottom-6 left-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/products/${id}`}
            className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase"
          >
            Read More
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href={`/contact?product=${encodeURIComponent(name)}`}
            className="text-sm text-neutral-500 hover:text-primary transition-colors"
          >
            Tanya Produk Ini
          </Link>
        </div>
      </div>
    </div>
  )
}

