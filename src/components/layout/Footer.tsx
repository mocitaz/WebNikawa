import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/content/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container-custom py-5 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-4 md:mb-5">
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <div className="mb-2.5">
              <Image
                src="/images/hero/logo-footer.png"
                alt="PT Nikawa Teknika Indonesia"
                width={140}
                height={45}
                className="h-auto"
                priority
              />
            </div>
            <p className="text-sm font-semibold text-neutral-900 mb-1">
              PT Nikawa Teknika Indonesia
            </p>
            <p className="text-sm font-semibold text-neutral-900 mb-2">
              Best Electronic Modul Company
            </p>
            <div className="text-xs text-neutral-600">
              <p className="font-medium text-neutral-700 mb-1">Distributor of:</p>
              <ul className="space-y-0 leading-tight">
                <li>• Electrical Components</li>
                <li>• GSM Modem</li>
                <li>• Plastic Resin</li>
                <li>• PCBA, etc.</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-neutral-900 mb-2">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs text-neutral-600">
              <div>
                <p className="font-medium text-neutral-700 mb-0.5">Phone:</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  (62) 21-2945-3728
                </a>
              </div>
              <div>
                <p className="font-medium text-neutral-700 mb-0.5">We are open:</p>
                <p className="text-neutral-600">Mon - Sat: 10 AM - 8 PM</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-medium text-neutral-700 mb-0.5">Address:</p>
                <p className="leading-relaxed text-neutral-600">
                  PBC, Jl.Antilop Raya Pintu 11 Jababeka II Blok E-3 Kel.Jaya Mukti Kec.Cikarang Pusat - Bekasi 17530 Jawa Barat - Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-1.5 text-xs text-neutral-500">
            <p>
              © {currentYear} {siteConfig.company.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

