import SectionWrapper from '@/components/ui/SectionWrapper'

export default function PrivacyPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 to-transparent pattern-bg">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-700">
            Kebijakan Privasi PT Nikawa Teknika Indonesia
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="card bg-white">
            <p className="text-neutral-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">
              Pengenalan
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              PT Nikawa Teknika Indonesia menghormati privasi pengunjung website kami. 
              Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi 
              informasi yang Anda berikan kepada kami.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">
              Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Kami dapat mengumpulkan informasi yang Anda berikan secara sukarela melalui 
              formulir kontak, termasuk nama, email, dan pesan. Informasi ini digunakan 
              semata-mata untuk merespons permintaan dan komunikasi dengan Anda.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">
              Penggunaan Informasi
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Informasi yang dikumpulkan digunakan untuk:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-6">
              <li>Merespons permintaan dan pertanyaan Anda</li>
              <li>Menyediakan informasi tentang produk dan layanan kami</li>
              <li>Meningkatkan layanan dan pengalaman pengguna</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">
              Perlindungan Data
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Kami berkomitmen untuk melindungi informasi pribadi Anda. Kami menggunakan 
              langkah-langkah keamanan yang wajar untuk mencegah akses, penggunaan, atau 
              pengungkapan informasi yang tidak sah.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-4">
              Kontak
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi 
              kami di cs@nikawa-indonesia.com atau melalui formulir kontak di website kami.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

