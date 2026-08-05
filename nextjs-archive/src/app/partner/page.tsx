import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Check, Sparkles, HeartHandshake, Compass, Coins, Users, Award } from "lucide-react";

export const metadata = {
  title: "Partner / Get Involved",
  description: "Learn about the MIV Strategic Initiative partnership tiers—from Vision Partner to Legacy Alliance—and download our official profile.",
};

const waysToPartner = [
  { title: "Financial Giving", desc: "General giving that sustains ongoing operations and foundational programming." },
  { title: "Project Sponsorship", desc: "Funding tied directly to a specific project, programme edition, or welfare intervention." },
  { title: "Scholarships", desc: "Supporting students, vocational trainees, and emerging professionals." },
  { title: "Business Grants", desc: "Providing commercial seed funding for pitch competitions and startup incubators." },
  { title: "Event Sponsorship", desc: "Covering summit operations including venues, catering, print materials, and souvenirs." },
  { title: "Mentorship & Expertise", desc: "Sharing professional expertise, policy insights, or curriculum advice." },
  { title: "Media & Collaboration", desc: "Amplifying outcomes through research projects, international panels, and press coverage." },
  { title: "Volunteer & Prayer", desc: "Strengthening programmes through direct event service and prayer advocacy." },
];

const tiers = [
  {
    name: "Vision Partner",
    desc: "Entry-level giving that sustains core operations, Secretariat planning, and base activities.",
    icon: Coins,
  },
  {
    name: "Impact Partner",
    desc: "Sponsorship tied directly to a project edition (e.g. funding a specific widow&apos;s vocational training).",
    icon: Sparkles,
  },
  {
    name: "Institutional Partner",
    desc: "Formal collaborative alliances with universities, traditional councils, and security agencies.",
    icon: Compass,
  },
  {
    name: "Corporate Partner",
    desc: "Commercial corporate entities extending CSR budgets or official event sponsorship.",
    icon: Users,
  },
  {
    name: "Legacy Partner",
    desc: "Long-term recurring commitments supporting our multi-year regional expansion goals.",
    icon: Award,
  },
  {
    name: "Strategic Alliance Partner",
    desc: "Development foundations, charities, and policy think-tanks aligned on collaborative capacity campaigns.",
    icon: HeartHandshake,
  },
];

const benefits = [
  "Periodic detailed impact and project reports",
  "Institutional recognition across MIV print and web portals (where desired)",
  "VIP invitations to national summits and roundtable events",
  "Networking opportunities with prominent sector gatekeepers",
  "The lasting satisfaction of investing in the moral foundations of Nigeria's leadership",
];

export default function PartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Become a Strategic Partner
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            National transformation is not one institution&apos;s work.
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            It requires universities willing to open their halls, agencies willing to open their gates, businesses willing to open their networks, and partners willing to open their hands.
          </p>
        </div>
      </section>

      {/* 2. Why Partner & Image */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Copy */}
            <div className="lg:col-span-7 text-left space-y-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Why Partner</span>
              <h2 className="font-serif text-3xl font-bold text-navy leading-tight">
                Generational investment in people who shape the future.
              </h2>
              <div className="h-0.5 w-12 bg-gold/60" />
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-sans">
                Every contribution becomes part of a measurable, generational work: a widow trained into a trade. An entrepreneur funded into a business. A young officer strengthened in integrity. A lecturer renewed in purpose. This is not charity in the abstract — it is targeted, sector-specific investment in the people who will shape this nation&apos;s next fifty years.
              </p>
            </div>

            {/* Right Column Graphic */}
            <div className="lg:col-span-5 relative h-96 rounded-xl overflow-hidden shadow border border-cream bg-cream">
              <Image
                src="/images/giving-graphic.jpeg"
                alt="Giving and partnership graphic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ways to Partner Grid */}
      <section className="py-20 bg-cream/15 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Get Involved</span>
            <h2 className="font-serif text-3xl font-bold text-navy">Ways to Partner</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToPartner.map((way) => (
              <div key={way.title} className="bg-white rounded-xl border border-cream p-6 shadow-sm space-y-2">
                <h3 className="font-serif text-base font-bold text-navy leading-tight">{way.title}</h3>
                <p className="text-xs text-ink/75 leading-relaxed">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partnership Tiers Table/Cards */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Sponsorship Tiers</span>
            <h2 className="font-serif text-3xl font-bold text-navy">Partnership Matrices</h2>
            <p className="text-xs sm:text-sm text-ink/70 max-w-lg leading-relaxed">
              We align our partnerships across six distinct layers, matching organizational capacity with strategic development focus:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="border border-cream bg-cream/5 rounded-xl p-6 flex gap-4 text-left items-start">
                <div className="p-2.5 rounded-full bg-navy text-gold shrink-0 mt-1">
                  <tier.icon className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-navy leading-none">{tier.name}</h3>
                  <p className="text-xs text-ink/75 leading-relaxed font-sans">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What Partners Receive */}
      <section className="py-20 bg-cream/10 border-b border-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Benefits</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">What Partners Receive</h2>
          </div>
          <div className="space-y-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3 items-center border-b border-cream/50 pb-3">
                <div className="h-5 w-5 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-gold" />
                </div>
                <p className="text-sm text-navy font-serif leading-none">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing Call to Action & Download */}
      <section className="bg-navy-deep py-20 text-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            Start a transformation partnership today.
          </h2>
          <p className="text-cream/80 text-sm max-w-xl mx-auto leading-relaxed">
            Download our formal Institutional Profile to review strategic objectives, budget forecasts, and operational guidelines, or initiate an inquiry below.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact?interest=Partnership"
              className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-700 focus-ring transition-all cursor-pointer"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/documents/MIV_Strategic_Initiative_Institutional_Profile.docx"
              download
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 focus-ring transition-all"
            >
              <Download className="h-4 w-4 text-gold" />
              Download Institutional Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
