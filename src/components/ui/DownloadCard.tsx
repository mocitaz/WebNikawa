interface DownloadCardProps {
  title: string
  description: string
  type: string
  size: string
  url: string
}

export default function DownloadCard({
  title,
  description,
  type,
  size,
  url,
}: DownloadCardProps) {
  return (
    <div className="card group hover:border-primary transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
          <p className="text-neutral-600 text-sm mb-3">{description}</p>
          <div className="flex items-center space-x-4 text-xs text-neutral-500">
            <span className="px-2 py-1 bg-neutral-100 rounded">{type}</span>
            <span>{size}</span>
          </div>
        </div>
        <div className="ml-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
            <svg
              className="w-6 h-6 text-primary group-hover:text-white transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <a
        href={url}
        download
        className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors text-sm"
      >
        Download
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </a>
    </div>
  )
}

