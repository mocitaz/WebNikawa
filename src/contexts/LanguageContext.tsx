'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'id' | 'en' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof import('../locales/id').translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Use default translations if not loaded yet
// Import default from id.ts synchronously for type safety
function getDefaultTranslations(): typeof import('../locales/id').translations {
  // This will be replaced by actual translations once loaded
  return {
    nav: { home: 'Beranda', products: 'Produk & Layanan', about: 'Tentang Kami', contact: 'Kontak', downloads: 'Download' },
    hero: { eyebrow: 'Selamat Datang di PT Nikawa Teknika Indonesia', title: 'Membangun Solusi Industri, Menguatkan Pertumbuhan', subtitle: 'Partner manufaktur elektronik dan plastik terpercaya di Asia Tenggara', description: 'Distribusi & Solusi Manufaktur Elektronik, Plastik, dan Komponen Industri sejak 2014', ctaPrimary: 'Pelajari Lebih Lanjut', ctaSecondary: 'Hubungi Kami' },
    common: { readMore: 'Baca Selengkapnya', learnMore: 'Pelajari Lebih Lanjut', contactUs: 'Hubungi Kami', download: 'Download', back: 'Kembali', next: 'Selanjutnya', previous: 'Sebelumnya', language: 'Bahasa' },
    home: { about: { title: 'Tentang NTI', heading: 'Distributor manufaktur elektronik & plastik terpercaya sejak 2014.', description: 'Kami menyediakan resin plastik, produk injection molding, GSM modem, komponen elektronik, PCBA, serta solusi manufaktur terintegrasi di Asia Tenggara.' }, whyChoose: { eyebrow: 'Mengapa Memilih Kami', description: 'Keunggulan yang membedakan NTI dalam industri manufaktur dan teknologi.' }, products: { eyebrow: 'Produk & Layanan Utama', heading: 'Solusi lengkap untuk kebutuhan manufaktur dan teknologi industri Anda', description: 'Portofolio produk NTI mencakup elektronik, manufaktur, dan infrastruktur untuk memastikan kesinambungan operasi industri Anda.', countLabel: 'Produk', categoryLabel: 'Kategori', viewAll: 'Lihat Semua Produk' }, largeProject: { eyebrow: 'Project Besar?', heading: 'Have a Large Project?', description: 'Feel free to contact us regarding your required of our products', button: 'Send a Message' }, services: { eyebrow: 'Layanan & Dukungan', heading: 'Solusi Terintegrasi untuk Kebutuhan Industri Anda', description: 'NTI tidak hanya menyediakan produk berkualitas, tetapi juga layanan komprehensif untuk memastikan kesuksesan proyek Anda', items: [{ title: 'Konsultasi Teknis', description: 'Tim ahli kami siap membantu Anda memilih solusi terbaik sesuai kebutuhan spesifik industri Anda' }, { title: 'Dukungan Purna Jual', description: 'Layanan maintenance, troubleshooting, dan dukungan teknis berkelanjutan untuk memastikan operasi optimal' }, { title: 'Solusi Kustom', description: 'Pengembangan produk dan solusi sesuai spesifikasi unik Anda dengan presisi dan kualitas tinggi' }, { title: 'Training & Support', description: 'Program pelatihan dan dokumentasi lengkap untuk memastikan tim Anda dapat mengoperasikan produk dengan optimal' }], learnMore: 'Pelajari Lebih Lanjut tentang Layanan Kami' }, cta: { heading: 'Siap Bekerja Sama dengan NTI?', description: 'Hubungi kami hari ini untuk konsultasi dan solusi terbaik untuk kebutuhan industri Anda', contactButton: 'Hubungi Kami', whatsappButton: 'Chat WhatsApp' }, faq: { title: 'Pertanyaan yang Sering Diajukan', subtitle: 'Informasi penting tentang NTI', items: [{ question: 'Nikawa itu perusahaan apa?', answer: 'PT Nikawa Teknika Indonesia adalah distributor resmi komponen elektronik dan produk plastik industri yang berdiri sejak 13 Agustus 2014, berlokasi di Kawasan Industri Jababeka II, Cikarang, Bekasi.' }, { question: 'Apa saja produk utama Nikawa?', answer: 'Kami menyediakan 8 lini produk: Komponen Elektronik, Perakitan PCBA, GSM/4G Modem, LED Road Studs, Resin Plastik, Produk Injeksi Plastik Custom, Smart Meter, dan Fiber Optic Gas Meter.' }, { question: 'Apakah Nikawa melayani perakitan PCBA?', answer: 'Ya. Kami memiliki partner EMS di Jababeka dengan 4 line SMT high-speed, standar IPC-A-610 Class 2 (bisa Class 3 untuk proyek medis/automotive safety).' }, { question: 'Apakah barang ready stock?', answer: 'Hampir semua komponen elektronik dan resin plastik ready stock di gudang Jababeka. PCBA prototype 3–7 hari, produksi massal 3–5 minggu.' }, { question: 'Bagaimana cara menghubungi atau minta penawaran?', answer: 'Email: cs@nikawa-indonesia.com | Telepon/WhatsApp: +62 21 2945 3728. Kami balas maksimal 1×24 jam (hari kerja).' }] } },
    productCard: { readMore: 'Baca Selengkapnya', askProduct: 'Tanya Produk Ini' },
    products: { categories: { Manufacturing: 'Manufacturing', Electronics: 'Electronics', Materials: 'Materials', Infrastructure: 'Infrastructure' }, items: [{ id: 'plastic-injection', name: 'Plastic Injection Products', description: 'Produk hasil injection molding dari berbagai jenis plastik', category: 'Manufacturing' }, { id: 'gsm-modem', name: 'GSM Modem', description: 'Solusi modem untuk sistem industri, komunikasi, dan aplikasi IoT', category: 'Electronics' }, { id: 'electronic-components', name: 'Electronic Components', description: 'IC, LED, kapasitor, resistor, elektrolit kapasitor, dan komponen elektronik lainnya', category: 'Electronics' }, { id: 'plastic-resin', name: 'Plastic Resin', description: 'PP, PE, PC, PVC, ABS Resins for Industry', category: 'Materials' }, { id: 'pcba', name: 'PCBA', description: 'Jasa perakitan PCB sesuai permintaan industri', category: 'Manufacturing' }, { id: 'led-road-stud', name: 'LED Road Stud', description: 'Solusi pencahayaan jalan dengan teknologi LED', category: 'Infrastructure' }, { id: 'smart-water-meter', name: 'Smart Water Meter', description: 'Sistem meter air pintar dengan teknologi IoT', category: 'Infrastructure' }, { id: 'fo-gas-meter', name: 'FO Gas Meter', description: 'Meter gas dengan teknologi fiber optic', category: 'Infrastructure' }, { id: 'fiber-optic', name: 'Fiber Optic', description: 'Solusi komunikasi fiber optic untuk industri', category: 'Electronics' }] },
    productsPage: { hero: { eyebrow: 'Produk & Layanan Utama', title: 'Solusi lengkap untuk kebutuhan manufaktur dan teknologi industri Anda', description: 'Portofolio produk NTI mencakup elektronik, manufaktur, dan infrastruktur untuk memastikan kesinambungan operasi industri Anda.', countLabel: 'Produk', categoryLabel: 'Kategori' }, stats: { products: { count: 'Produk & Layanan', description: 'Solusi lengkap untuk berbagai kebutuhan industri' }, categories: { count: 'Kategori Utama', description: 'Dari elektronik hingga infrastruktur' }, experience: { count: 'Tahun Pengalaman', description: 'Terpercaya sejak 2014 di industri' } }, portfolio: { eyebrow: 'Portofolio Produk & Layanan', title: 'Produk berkualitas tinggi untuk mendukung kebutuhan industri Anda', description: 'Setiap produk dirancang dengan presisi dan inovasi untuk memberikan solusi terbaik bagi klien kami.' }, cta: { eyebrow: 'Siap Bekerja Sama dengan NTI?', title: 'Hubungi kami hari ini untuk konsultasi dan solusi terbaik', description: 'Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan industri Anda', contactButton: 'Hubungi Kami', whatsappButton: 'Chat WhatsApp' }, faq: { eyebrow: 'Pertanyaan yang Sering Diajukan', title: 'Informasi penting tentang NTI', items: [{ question: 'Nikawa itu perusahaan apa?', answer: 'PT Nikawa Teknika Indonesia adalah distributor resmi komponen elektronik dan produk plastik industri yang berdiri sejak 13 Agustus 2014, berlokasi di Kawasan Industri Jababeka II, Cikarang, Bekasi.' }, { question: 'Apa saja produk utama Nikawa?', answer: 'Kami menyediakan 8 lini produk: Komponen Elektronik, Perakitan PCBA, GSM/4G Modem, LED Road Studs, Resin Plastik, Produk Injeksi Plastik Custom, Smart Meter, dan Fiber Optic Gas Meter.' }, { question: 'Apakah Nikawa melayani perakitan PCBA?', answer: 'Ya. Kami memiliki partner EMS di Jababeka dengan 4 line SMT high-speed, standar IPC-A-610 Class 2 (bisa Class 3 untuk proyek medis/automotive safety).' }, { question: 'Apakah barang ready stock?', answer: 'Hampir semua komponen elektronik dan resin plastik ready stock di gudang Jababeka. PCBA prototype 3–7 hari, produksi massal 3–5 minggu.' }, { question: 'Bagaimana cara menghubungi atau minta penawaran?', answer: 'Email: cs@nikawa-indonesia.com | Telepon/WhatsApp: +62 21 2945 3728. Kami balas maksimal 1×24 jam (hari kerja).' }] } },
    values: [{ title: 'Profesional', description: 'Standar tinggi dalam setiap layanan dan produk' }, { title: 'Presisi', description: 'Akurasi dan ketelitian dalam setiap detail' }, { title: 'Terpercaya', description: 'Kepercayaan jangka panjang dengan klien dan partner' }, { title: 'Inovatif', description: 'Terus berkembang dengan teknologi terbaru' }],
    about: { hero: { tagline: 'Membangun dengan Presisi, Berkarya dengan Inovasi' }, profile: { title: 'Profil Perusahaan', heading: 'Selamat Datang di PT Nikawa Teknika Indonesia', content: 'PT Nikawa Teknika Indonesia didirikan pada tanggal 13 Agustus 2014 dan berlokasi di Kawasan Industri Jababeka II, Cikarang, Bekasi. Perusahaan bergerak di bidang distribusi dan penyediaan berbagai komponen elektronik serta produk plastik untuk kebutuhan industri. Dengan operasional yang berbasis di kawasan industri strategis, PT Nikawa Teknika Indonesia mampu melayani berbagai sektor manufaktur dan teknologi yang membutuhkan produk berkualitas tinggi serta layanan yang handal.' }, identity: { title: 'Identitas Perusahaan', subtitle: 'Informasi lengkap tentang perusahaan kami', officialName: 'Nama Resmi', established: 'Tanggal Berdiri', phone: 'Telepon', email: 'Email', address: 'Alamat' }, vision: { title: 'Visi', content: 'Menjadi penyedia solusi industri terkemuka dan terpercaya di Indonesia dengan menghadirkan inovasi dan keberlanjutan dalam komponen elektronik dan produk plastik.' }, mission: { title: 'Misi', items: ['Menyediakan produk berkualitas tinggi yang memenuhi standar industri internasional', 'Membangun kemitraan jangka panjang dengan pelanggan dan supplier melalui layanan profesional', 'Mengembangkan inovasi teknologi yang mendukung efisiensi dan keberlanjutan di industri', 'Mengembangkan SDM yang kompeten dan berintegritas sebagai fondasi pertumbuhan perusahaan', 'Berkontribusi pada kemajuan industri nasional melalui solusi yang adaptif terhadap kebutuhan pasar'] }, businessFields: { title: 'Bidang Usaha & Produk Utama', subtitle: '8 lini produk unggulan untuk mendukung kebutuhan industri Anda', description: 'Setiap produk dirancang dengan presisi dan inovasi untuk memberikan solusi terbaik', products: [{ id: 'pcba', name: 'PCBA' }, { id: 'led-road-stud', name: 'LED Road Studs' }, { id: 'plastic-resin', name: 'Plastic Resin' }, { id: 'gsm-modem', name: 'GSM Modem' }, { id: 'electronic-components', name: 'Electronic Components' }, { id: 'plastic-injection', name: 'Plastic Injection Products' }, { id: 'smart-meters', name: 'Smart Meters' }, { id: 'fiber-optic-gas-meters', name: 'Fiber Optic Gas Meters' }] }, partners: { eyebrow: 'Partner & Klien Kami', title: 'Kolaborasi Jangka Panjang', description: 'Bekerja sama dengan perusahaan teknologi terdepan di industri' }, strengths: { title: 'Keunggulan Kami', subtitle: 'Tiga pilar utama yang membedakan NTI dalam industri', description: 'Komitmen kami terhadap kualitas, inovasi, dan layanan terbaik', items: [{ title: 'Portofolio Produk yang Beragam', description: 'Menyediakan solusi lengkap di sektor elektronik dan plastik industri sesuai kebutuhan klien.' }, { title: 'Lokasi Strategis di Jababeka Industrial Estate', description: 'Memudahkan distribusi dan logistik cepat ke seluruh Indonesia.' }, { title: 'Website Resmi & Struktur Organisasi Profesional', description: 'Transparansi informasi dan operasional yang jelas serta dapat dipercaya.' }] }, cta: { eyebrow: 'Siap Bekerja Sama dengan NTI?', title: 'Hubungi kami hari ini untuk konsultasi dan solusi terbaik', description: 'Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan industri Anda', contactButton: 'Hubungi Kami', whatsappButton: 'Chat WhatsApp' }, faq: { title: 'Pertanyaan yang Sering Diajukan', subtitle: 'Informasi penting tentang NTI', items: [{ question: 'Nikawa itu perusahaan apa?', answer: 'PT Nikawa Teknika Indonesia adalah distributor resmi komponen elektronik dan produk plastik industri yang berdiri sejak 13 Agustus 2014, berlokasi di Kawasan Industri Jababeka II, Cikarang, Bekasi.' }, { question: 'Apa saja produk utama Nikawa?', answer: 'Kami menyediakan 8 lini produk: Komponen Elektronik, Perakitan PCBA, GSM/4G Modem, LED Road Studs, Resin Plastik, Produk Injeksi Plastik Custom, Smart Meter, dan Fiber Optic Gas Meter.' }, { question: 'Apakah Nikawa melayani perakitan PCBA?', answer: 'Ya. Kami memiliki partner EMS di Jababeka dengan 4 line SMT high-speed, standar IPC-A-610 Class 2 (bisa Class 3 untuk proyek medis/automotive safety).' }, { question: 'Apakah barang ready stock?', answer: 'Hampir semua komponen elektronik dan resin plastik ready stock di gudang Jababeka. PCBA prototype 3–7 hari, produksi massal 3–5 minggu.' }, { question: 'Bagaimana cara menghubungi atau minta penawaran?', answer: 'Email: cs@nikawa-indonesia.com | Telepon/WhatsApp: +62 21 2945 3728. Kami balas maksimal 1×24 jam (hari kerja).' }] } },
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Import default translations synchronously for immediate availability
  const defaultTranslations = getDefaultTranslations()
  const [language, setLanguageState] = useState<Language>('id')
  const [translations, setTranslations] = useState<typeof import('../locales/id').translations>(defaultTranslations)
  const [isClient, setIsClient] = useState(false)

  // Load default translations immediately
  useEffect(() => {
    setIsClient(true)
    // Load default translations first
    import('../locales/id').then((module) => {
      setTranslations(module.translations)
    })
    // Load language from localStorage or default to 'id'
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['id', 'en', 'zh'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Dynamically import translations based on language
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../locales/${language}`)
        setTranslations(translationModule.translations)
      } catch (error) {
        console.error('Failed to load translations:', error)
        // Fallback to Indonesian
        const fallbackModule = await import('../locales/id')
        setTranslations(fallbackModule.translations)
      }
    }
    if (isClient) {
      loadTranslations()
    }
  }, [language, isClient])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (isClient) {
      localStorage.setItem('language', lang)
    }
  }

  // Always ensure translations are available
  const currentTranslations = translations || getDefaultTranslations()

  // Ensure translations object is always valid
  if (!currentTranslations || typeof currentTranslations !== 'object') {
    console.error('Invalid translations object, using defaults')
    return (
      <LanguageContext.Provider value={{ language, setLanguage, t: getDefaultTranslations() }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

