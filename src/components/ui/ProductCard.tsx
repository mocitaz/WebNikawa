'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'

interface ProductCardProps {
  id: string
  name: string
  description: string
  category: string
  image?: string
}

export default function ProductCard({ id, name, description, category, image }: ProductCardProps) {
  const { t } = useLanguage()
  const router = useRouter()
  
  // Get translated product data
  const translatedProduct = t?.products?.items?.find(p => p?.id === id)
  const productName = translatedProduct?.name || name
  const productDescription = translatedProduct?.description || description
  
  // Get translated category
  let translatedCategory = category
  if (translatedProduct?.category && t?.products?.categories) {
    const categoryKey = translatedProduct.category as keyof typeof t.products.categories
    translatedCategory = t.products.categories[categoryKey] || category
  }
  
  const handleAskProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/contact?product=${encodeURIComponent(productName)}`)
  }
  
  return (
    <Link
      href={`/products/${id}`}
      className="group block relative h-96 md:h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundColor: image ? undefined : '#0f172a',
        }}
      />
      
      {/* Black gradient dari bawah untuk readability text putih */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/50 from-15% to-transparent" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="p-4 md:p-5 space-y-2">
          {/* Category Badge */}
          <div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30 shadow-sm">
              {translatedCategory}
            </span>
          </div>
          
          {/* Product Name */}
          <h3 className="text-base md:text-lg font-bold text-white leading-tight group-hover:text-primary-300 transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {productName}
          </h3>
          
          {/* Product Description */}
          <p className="text-xs md:text-sm leading-snug line-clamp-2 font-medium text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            {productDescription}
          </p>
          
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-white/30">
            <span className="inline-flex items-center text-white font-semibold text-xs md:text-sm tracking-wide uppercase group-hover:text-primary-300 group-hover:gap-1.5 transition-all duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
              {t.productCard.readMore}
              <svg
                className="w-3 h-3 md:w-3.5 md:h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </span>
            
            <button
              onClick={handleAskProduct}
              className="text-xs md:text-sm text-white/90 hover:text-primary-300 transition-colors duration-300 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            >
              {t.productCard.askProduct}
            </button>
          </div>
        </div>
      </div>
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
    </Link>
  )
}

