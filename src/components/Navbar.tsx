"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const programmes = [
  { name: "Academic Summit & Banquet", href: "/programmes/academic-summit" },
  { name: "MIV Business Summit", href: "/programmes/business-summit" },
  { name: "Armed Forces & Uniformed Outreach", href: "/programmes/armed-uniformed-outreach" },
  { name: "Royal Fathers' Conference", href: "/programmes/royal-fathers-conference" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setDropdownOpen(false);
  }

  const isActive = (href: string) => pathname === href;
  const isProgrammeActive = programmes.some((p) => pathname === p.href) || pathname === "/programmes";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cream bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-gold rounded-md p-1">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cream shadow-sm bg-navy flex items-center justify-center">
              <Image
                src="/images/msi-icon.webp"
                alt="MSI Icon Logo"
                fill
                className="object-cover scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-navy leading-none">MIV</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-crimson font-semibold">Strategic Initiative</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                isActive("/") ? "text-navy font-semibold border-b-2 border-navy pb-1" : "text-ink"
              } focus:outline-none focus:ring-2 focus:ring-gold rounded`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                isActive("/about") ? "text-navy font-semibold border-b-2 border-navy pb-1" : "text-ink"
              } focus:outline-none focus:ring-2 focus:ring-gold rounded`}
            >
              About
            </Link>

            {/* Programmes Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isProgrammeActive ? "text-navy font-semibold" : "text-ink"
                } focus:outline-none focus:ring-2 focus:ring-gold rounded`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Programmes
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-lg border border-cream bg-white p-2 shadow-lg ring-1 ring-black/5 animate-fade-in">
                  <Link
                    href="/programmes"
                    className="block rounded-md px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-crimson hover:bg-cream/50"
                  >
                    Programmes Hub
                  </Link>
                  <hr className="my-1 border-cream" />
                  {programmes.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-md px-4 py-2.5 text-sm transition-colors hover:bg-cream ${
                        pathname === item.href ? "bg-cream text-navy font-medium" : "text-ink"
                      } focus:outline-none focus:bg-cream`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/impact"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                isActive("/impact") ? "text-navy font-semibold border-b-2 border-navy pb-1" : "text-ink"
              } focus:outline-none focus:ring-2 focus:ring-gold rounded`}
            >
              Impact
            </Link>
            <Link
              href="/partner"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                isActive("/partner") ? "text-navy font-semibold border-b-2 border-navy pb-1" : "text-ink"
              } focus:outline-none focus:ring-2 focus:ring-gold rounded`}
            >
              Partner
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                isActive("/contact") ? "text-navy font-semibold border-b-2 border-navy pb-1" : "text-ink"
              } focus:outline-none focus:ring-2 focus:ring-gold rounded`}
            >
              Contact
            </Link>
          </nav>

          {/* Partner CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-navy-deep hover:shadow focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Partner With Us
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-cream focus:outline-none focus:ring-2 focus:ring-gold"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-cream bg-white px-4 py-3 shadow-inner animate-fade-in">
          <div className="space-y-1 pb-4 pt-2">
            <Link
              href="/"
              className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                isActive("/") ? "bg-cream text-navy font-semibold" : "text-ink hover:bg-cream/50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                isActive("/about") ? "bg-cream text-navy font-semibold" : "text-ink hover:bg-cream/50"
              }`}
            >
              About Story
            </Link>
            
            {/* Programmes Heading in Mobile */}
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-crimson mt-4">
              Our Pillars & Programmes
            </div>
            <Link
              href="/programmes"
              className={`block rounded-md px-3 py-2 text-sm font-semibold pl-6 ${
                isActive("/programmes") ? "text-navy" : "text-ink hover:text-navy"
              }`}
            >
              Programmes Hub
            </Link>
            {programmes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm pl-6 ${
                  pathname === item.href ? "text-navy font-semibold" : "text-ink/80 hover:text-navy"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/impact"
              className={`block rounded-md px-3 py-2.5 text-base font-medium mt-4 ${
                isActive("/impact") ? "bg-cream text-navy font-semibold" : "text-ink hover:bg-cream/50"
              }`}
            >
              Impact Report
            </Link>
            <Link
              href="/partner"
              className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                isActive("/partner") ? "bg-cream text-navy font-semibold" : "text-ink hover:bg-cream/50"
              }`}
            >
              Partner / Get Involved
            </Link>
            <Link
              href="/contact"
              className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                isActive("/contact") ? "bg-cream text-navy font-semibold" : "text-ink hover:bg-cream/50"
              }`}
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-2 border-t border-cream pb-4">
            <Link
              href="/partner"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-navy-deep"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
