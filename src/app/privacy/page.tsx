import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { siteConfig } from '@/content/site'

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary/5 via-white to-primary/5 pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-5 md:mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl mb-3 md:mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-2 md:mb-3">
            Privacy Policy
          </h1>
            <p className="text-base md:text-lg lg:text-xl text-neutral-600 mb-2">
            Kebijakan Privasi PT Nikawa Teknika Indonesia
          </p>
            <p className="text-xs md:text-sm text-neutral-500">
              Terakhir diperbarui: <span className="font-semibold text-neutral-700">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Main Content */}
      <SectionWrapper className="bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl border border-primary/10 p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">Pengenalan</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                  PT Nikawa Teknika Indonesia menghormati privasi pengunjung website kami. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi yang Anda berikan kepada kami melalui website ini. Dengan menggunakan website kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan privasi ini.
                </p>
              </div>
            </div>
          </div>

          {/* Information Collection */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Informasi yang Kami Kumpulkan</h2>
                
                <div className="space-y-4">
                  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                    <h3 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Informasi Pribadi
                    </h3>
                    <ul className="space-y-1.5 text-sm text-neutral-700 ml-6">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Nama lengkap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Alamat email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Nomor telepon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Nama perusahaan (jika diberikan)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Pesan atau pertanyaan yang Anda kirimkan</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                    <h3 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Informasi Teknis
                    </h3>
                    <ul className="space-y-1.5 text-sm text-neutral-700 ml-6">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Alamat IP (Internet Protocol)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Jenis browser dan versi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Sistem operasi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Waktu dan tanggal kunjungan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Halaman yang dikunjungi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Penggunaan Informasi</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
                  Informasi yang kami kumpulkan digunakan untuk tujuan berikut:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', text: 'Merespons permintaan dan pertanyaan Anda' },
                    { icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', text: 'Menyediakan informasi tentang produk dan layanan kami' },
                    { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', text: 'Meningkatkan layanan dan pengalaman pengguna' },
                    { icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', text: 'Mengirimkan update dan komunikasi bisnis' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100 group hover:border-primary/30 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed flex-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Perlindungan Data</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
                  Kami berkomitmen untuk melindungi informasi pribadi Anda. Kami menggunakan langkah-langkah keamanan yang wajar untuk mencegah akses, penggunaan, atau pengungkapan informasi yang tidak sah:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Enkripsi data dalam transmisi',
                    'Akses terbatas hanya untuk personel yang berwenang',
                    'Pemantauan keamanan sistem secara berkala',
                    'Backup data secara rutin',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Pembagian Data</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-3">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali dalam situasi berikut:
                </p>
                <div className="space-y-2.5">
                  {[
                    { title: 'Dengan Persetujuan Anda', desc: 'Kami dapat membagikan informasi jika Anda memberikan persetujuan eksplisit' },
                    { title: 'Untuk Layanan Hukum', desc: 'Jika diperlukan oleh hukum atau proses hukum yang berlaku' },
                    { title: 'Untuk Perlindungan', desc: 'Untuk melindungi hak, properti, atau keamanan kami dan pengguna lain' },
                    { title: 'Dengan Penyedia Layanan', desc: 'Dengan penyedia layanan tepercaya yang membantu operasi website kami (dengan perjanjian kerahasiaan)' },
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-xs text-neutral-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Cookies & Teknologi Pelacakan</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
                  Website kami dapat menggunakan cookies dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna. Cookies adalah file teks kecil yang disimpan di perangkat Anda.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { type: 'Cookies Esensial', desc: 'Diperlukan untuk fungsi dasar website' },
                    { type: 'Cookies Analitik', desc: 'Membantu kami memahami bagaimana pengunjung menggunakan website' },
                    { type: 'Cookies Preferensi', desc: 'Mengingat preferensi dan pengaturan Anda' },
                    { type: 'Kontrol Cookies', desc: 'Anda dapat mengatur browser untuk menolak cookies, namun beberapa fitur mungkin tidak berfungsi' },
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      <h3 className="text-sm font-bold text-neutral-900 mb-1">{item.type}</h3>
                      <p className="text-xs text-neutral-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl border border-primary/10 p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Hak Anda</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-4">
                  Anda memiliki hak-hak berikut terkait informasi pribadi Anda:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', text: 'Akses: Meminta salinan data pribadi Anda' },
                    { icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', text: 'Perbaikan: Memperbaiki data yang tidak akurat' },
                    { icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16', text: 'Penghapusan: Meminta penghapusan data pribadi Anda' },
                    { icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636', text: 'Penolakan: Menolak pemrosesan data tertentu' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-primary/10 group hover:border-primary/30 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed flex-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Penyimpanan Data</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-3">
                  Kami menyimpan informasi pribadi Anda selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam kebijakan ini, atau sesuai dengan persyaratan hukum yang berlaku. Setelah periode penyimpanan berakhir, data akan dihapus atau dianonimkan secara aman.
                </p>
                <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                  <p className="text-sm text-neutral-600">
                    <strong className="text-neutral-900">Periode Penyimpanan:</strong> Data kontak disimpan selama diperlukan untuk merespons permintaan Anda dan untuk keperluan komunikasi bisnis yang berkelanjutan, kecuali Anda meminta penghapusan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Tautan ke Website Pihak Ketiga</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                  Website kami mungkin berisi tautan ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten website tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi setiap website yang Anda kunjungi.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5 md:p-6 lg:p-8 mb-4 md:mb-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Perubahan Kebijakan</h2>
                <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan dengan memperbarui tanggal &quot;Terakhir diperbarui&quot; di bagian atas halaman ini. Kami menyarankan Anda untuk meninjau kebijakan ini secara berkala untuk tetap mengetahui bagaimana kami melindungi informasi Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary via-primary-dark to-neutral-900 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Kontak</h2>
                  <p className="text-white/90 text-sm md:text-base mb-5 leading-relaxed">
                    Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait kebijakan privasi ini atau praktik privasi kami, silakan hubungi kami:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">Email</p>
                        <a
                          href={`mailto:${siteConfig.contact.email}?subject=Pertanyaan%20Privacy%20Policy`}
                          className="text-sm text-white/90 hover:text-white transition-colors underline"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">Telepon</p>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="text-sm text-white/90 hover:text-white transition-colors"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">Alamat</p>
                        <a
                          href={siteConfig.contact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/90 hover:text-white transition-colors leading-relaxed block"
                        >
                          {siteConfig.contact.address.full}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-5 border-t border-white/20">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Gunakan Formulir Kontak
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
