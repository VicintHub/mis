import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, MapPin, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white border-t border-navy">
      {/* Primary Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 focus-ring rounded p-1 w-fit">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/40 bg-navy flex items-center justify-center">
                <Image
                  src="/images/msi-icon.webp"
                  alt="MSI Icon Logo"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-tight text-white leading-none">MIV</span>
                <span className="font-mono text-[8px] uppercase tracking-wider text-gold font-semibold">Strategic Initiative</span>
              </div>
            </Link>
            <p className="text-xs text-cream/70 leading-relaxed max-w-sm">
              We go where the decisions are made—academia, security, business, and traditional governance—equipping leaders with character, capacity, and integrity for national transformation.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.facebook.com/mivstrategicinitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy p-2 text-cream hover:bg-gold hover:text-white transition-colors focus-ring"
                aria-label="Visit MIV Strategic Initiative on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/mivstrategicinitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy p-2 text-cream hover:bg-gold hover:text-white transition-colors focus-ring"
                aria-label="Visit MIV Strategic Initiative on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@mivstrategicinitiative"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy p-2 text-cream hover:bg-gold hover:text-white transition-colors focus-ring"
                aria-label="Visit MIV Strategic Initiative on YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gold mb-5">Sitemap</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <Link href="/" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  About Story
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Major Programmes
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Verified Impact
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Become Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors / Pillars */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gold mb-5">Programmes</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <Link href="/programmes/academic-summit" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Academic Summit
                </Link>
              </li>
              <li>
                <Link href="/programmes/business-summit" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Business Summit
                </Link>
              </li>
              <li>
                <Link href="/programmes/armed-uniformed-outreach" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Armed Forces Outreach
                </Link>
              </li>
              <li>
                <Link href="/programmes/royal-fathers-conference" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  Royal Fathers Conference
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gold mb-5">Contact Details</h3>
            <ul className="space-y-4 text-xs text-cream/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Leadership and Mission Centre, Olororo Junction, Ojoo, Ibadan, Oyo State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href="mailto:info@mivstrategicinitiative.com.ng" className="hover:text-gold transition-colors focus:outline-none focus:underline">
                  info@mivstrategicinitiative.com.ng
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="https://www.menofissacharvision.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors focus:outline-none focus:underline"
                >
                  menofissacharvision.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-navy bg-navy-deep/80 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-cream/55 font-mono">
          <p>
            &copy; {new Date().getFullYear()} MIV Strategic Initiative. All rights reserved.
          </p>
          <p className="text-[10px]">
            A Strategic Outreach of{" "}
            <a
              href="https://www.menofissacharvision.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white underline transition-colors"
            >
              Men of Issachar Vision Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
