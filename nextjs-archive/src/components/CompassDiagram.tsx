"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, Briefcase, Award } from "lucide-react";

interface Sector {
  id: string;
  name: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  rational: string;
  path: string;
  angle: number; // For rotational decoration
}

const sectors: Sector[] = [
  {
    id: "academic",
    name: "Academic Transformation",
    tag: "Lecturers & Institutional Leaders",
    icon: BookOpen,
    colorClass: "text-azure",
    bgClass: "bg-azure/5",
    borderClass: "border-azure/20",
    rational: "Equipping lecturers and administrators across tertiary institutions to restore moral gatekeeping and build long-term educational legacy.",
    path: "/programmes/academic-summit",
    angle: 0,
  },
  {
    id: "security",
    name: "Security & Uniformed Officers",
    tag: "Armed Forces & Security Agencies",
    icon: Shield,
    colorClass: "text-crimson",
    bgClass: "bg-crimson/5",
    borderClass: "border-crimson/20",
    rational: "Honouring and strengthening officers across security agencies, and providing practical vocational empowerment for widows of fallen heroes.",
    path: "/programmes/armed-uniformed-outreach",
    angle: 90,
  },
  {
    id: "business",
    name: "Business & Economic Development",
    tag: "Entrepreneurs & Business Leaders",
    icon: Briefcase,
    colorClass: "text-gold",
    bgClass: "bg-gold/5",
    borderClass: "border-gold/20",
    rational: "Equipping values-driven entrepreneurs with mentorship, networks, and a ₦1,000,000 Pitch Competition to generate national productivity.",
    path: "/programmes/business-summit",
    angle: 180,
  },
  {
    id: "traditional",
    name: "Traditional & Royal Leadership",
    tag: "Traditional Rulers & Royal Fathers",
    icon: Award,
    colorClass: "text-navy",
    bgClass: "bg-navy/5",
    borderClass: "border-navy/20",
    rational: "Convening traditional rulers in humility and worship to seek divine wisdom for community peace and grassroots transformation.",
    path: "/programmes/royal-fathers-conference",
    angle: 270,
  },
];

export default function CompassDiagram() {
  const [activeSector, setActiveSector] = useState<Sector>(sectors[0]);

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
      {/* Interactive Compass SVG Column */}
      <div className="lg:col-span-6 flex justify-center items-center">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
          {/* Outer circle border */}
          <div className="absolute inset-0 rounded-full border border-cream/55 scale-100" />
          <div className="absolute inset-4 rounded-full border border-dashed border-cream/35 scale-95" />
          
          {/* SVG Canvas */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full z-10 select-none animate-fade-in"
            aria-label="Interactive sectors diagram showing Academia, Security, Business, and Traditional Leadership converging to the center core"
          >
            {/* Background converging lines */}
            <line x1="200" y1="40" x2="200" y2="360" stroke="#F7F3EA" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="40" y1="200" x2="360" y2="200" stroke="#F7F3EA" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="160" fill="none" stroke="#F7F3EA" strokeWidth="1" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#F7F3EA" strokeWidth="1" />

            {/* SECTORS PATHS */}
            
            {/* North Wedge: Academic (pointing down) */}
            <path
              d="M 200,60 L 250,150 A 60,60 0 0,1 150,150 Z"
              fill={activeSector.id === "academic" ? "rgba(46, 111, 176, 0.15)" : "transparent"}
              stroke="#2E6FB0"
              strokeWidth={activeSector.id === "academic" ? "2.5" : "1.2"}
              className="cursor-pointer transition-all duration-300 hover:fill-azure/10"
              onClick={() => setActiveSector(sectors[0])}
              onMouseEnter={() => setActiveSector(sectors[0])}
            />
            {/* Text label Academic */}
            <text
              x="200"
              y="110"
              textAnchor="middle"
              className="font-mono text-[9px] uppercase tracking-widest font-semibold fill-azure cursor-pointer"
              onClick={() => setActiveSector(sectors[0])}
            >
              Academia
            </text>

            {/* East Wedge: Business (pointing left) */}
            <path
              d="M 340,200 L 250,250 A 60,60 0 0,0 250,150 Z"
              fill={activeSector.id === "business" ? "rgba(184, 134, 11, 0.15)" : "transparent"}
              stroke="#B8860B"
              strokeWidth={activeSector.id === "business" ? "2.5" : "1.2"}
              className="cursor-pointer transition-all duration-300 hover:fill-gold/10"
              onClick={() => setActiveSector(sectors[2])}
              onMouseEnter={() => setActiveSector(sectors[2])}
            />
            {/* Text label Business */}
            <text
              x="290"
              y="203"
              textAnchor="middle"
              className="font-mono text-[9px] uppercase tracking-widest font-semibold fill-gold cursor-pointer"
              onClick={() => setActiveSector(sectors[2])}
            >
              Business
            </text>

            {/* South Wedge: Security (pointing up) */}
            <path
              d="M 200,340 L 150,250 A 60,60 0 0,1 250,250 Z"
              fill={activeSector.id === "security" ? "rgba(110, 30, 40, 0.15)" : "transparent"}
              stroke="#6E1E28"
              strokeWidth={activeSector.id === "security" ? "2.5" : "1.2"}
              className="cursor-pointer transition-all duration-300 hover:fill-crimson/10"
              onClick={() => setActiveSector(sectors[1])}
              onMouseEnter={() => setActiveSector(sectors[1])}
            />
            {/* Text label Security */}
            <text
              x="200"
              y="300"
              textAnchor="middle"
              className="font-mono text-[9px] uppercase tracking-widest font-semibold fill-crimson cursor-pointer"
              onClick={() => setActiveSector(sectors[1])}
            >
              Security
            </text>

            {/* West Wedge: Traditional (pointing right) */}
            <path
              d="M 60,200 L 150,150 A 60,60 0 0,0 150,250 Z"
              fill={activeSector.id === "traditional" ? "rgba(11, 42, 74, 0.1)" : "transparent"}
              stroke="#0B2A4A"
              strokeWidth={activeSector.id === "traditional" ? "2.5" : "1.2"}
              className="cursor-pointer transition-all duration-300 hover:fill-navy/10"
              onClick={() => setActiveSector(sectors[3])}
              onMouseEnter={() => setActiveSector(sectors[3])}
            />
            {/* Text label Traditional */}
            <text
              x="110"
              y="203"
              textAnchor="middle"
              className="font-mono text-[9px] uppercase tracking-widest font-semibold fill-navy cursor-pointer"
              onClick={() => setActiveSector(sectors[3])}
            >
              Royal
            </text>

            {/* CENTRAL CONVENER CORE */}
            <circle
              cx="200"
              cy="200"
              r="40"
              fill="#0B2A4A"
              stroke="#B8860B"
              strokeWidth="2"
              className="filter drop-shadow-md"
            />
            {/* Miniature decorative compass rings in core */}
            <circle cx="200" cy="200" r="32" fill="none" stroke="rgba(247, 243, 234, 0.25)" strokeWidth="0.8" />
            
            {/* Inner text for MSI */}
            <text
              x="200"
              y="197"
              textAnchor="middle"
              fill="#ffffff"
              className="font-serif text-[11px] font-bold tracking-wider"
            >
              MIV
            </text>
            <text
              x="200"
              y="209"
              textAnchor="middle"
              fill="#B8860B"
              className="font-mono text-[6px] uppercase tracking-widest font-semibold"
            >
              Convener
            </text>
          </svg>

          {/* Dynamic Background Halo relative to active sector */}
          <div className="absolute w-44 h-44 rounded-full filter blur-[60px] opacity-15 transition-all duration-700 bg-navy" />
        </div>
      </div>

      {/* Content Details Column */}
      <div className="lg:col-span-6">
        <div className={`rounded-xl border p-6 md:p-8 transition-all duration-500 bg-white ${activeSector.borderClass} shadow-sm animate-fade-in`}>
          {/* Icon Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-full bg-cream ${activeSector.colorClass}`}>
              <activeSector.icon className="h-6 w-6" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink/60 block">Strategic Pillar</span>
              <h3 className="font-serif text-2xl font-bold text-navy leading-tight">{activeSector.name}</h3>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-xs font-semibold text-crimson uppercase tracking-wider">
              {activeSector.tag}
            </p>
            <p className="text-sm text-ink/80 leading-relaxed font-civic-sans">
              {activeSector.rational}
            </p>
          </div>

          {/* Quick Stats Banner inside card */}
          <div className="mt-8 pt-6 border-t border-cream flex items-center justify-between">
            <Link
              href={activeSector.path}
              className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:underline focus-ring rounded p-1 ${activeSector.colorClass}`}
            >
              Explore Programme details
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
