import { notFound } from 'next/navigation'
import { siteConfig } from '@/content/site'
import ProductDetailContent from './ProductDetailContent'

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

// Required for static export
export function generateStaticParams() {
  return siteConfig.products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = siteConfig.products.find((p) => p.id === id)

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan - PT Nikawa Teknika Indonesia',
    }
  }

  return {
    title: `${product.name} - PT Nikawa Teknika Indonesia`,
    description: product.detail?.overview || product.description,
    keywords: `${product.name}, ${product.category}, ${siteConfig.company.name}`,
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = siteConfig.products.find((p) => p.id === id)

  if (!product || !product.detail) {
    notFound()
  }

  return <ProductDetailContent productId={id} />
}
