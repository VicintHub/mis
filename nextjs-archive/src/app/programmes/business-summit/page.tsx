import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";

export const metadata = {
  title: "MIV Business Summit",
  description: "Mentorship, networking, and a ₦1,000,000 pitch competition for Christian entrepreneurs, integrating biblical stewardship with commercial excellence.",
};

const modules = [
  {
    title: "Keynote & Panel Sessions",
    desc: "Strategic commercial insights from established corporate leaders, discussing ethics and integrity under market pressure.",
  },
  {
    title: "Kingdom Innovation Pitch Competition",
    desc: "A mentorship-driven pitching tournament connecting emerging entrepreneurs with investors, offering seed funding up to ₦1,000,000.",
  },
  {
    title: "Vendor & Business Exhibition",
    desc: "Positioning your brand and inventory directly before a highly motivated audience of over 1,500 Christian entrepreneurs, investors, and professionals.",
  },
  {
    title: "Financial Masterclasses",
    desc: "Practical workshops focused on working capital, cash flow management, bank loan opportunities, and seed-funding compliance.",
  },
  {
    title: "Prophetic Impartation for Wealth",
    desc: "A dedicated session focusing on spiritual keys, ministerial covering, and purpose-driven corporate calling, ministered by Rev. (Mrs) Stella Ajetomobi.",
  },
];

const speakers = [
  {
    name: "Rev. Samson Ajetomobi",
    role: "Host & Visioneer",
    image: "/images/rev-samson.jpg",
  },
  {
    name: "Rev. (Mrs) Stella Ajetomobi",
    role: "Co-Host & VP, Men of Issachar Vision Inc.",
    image: "/images/rev-stella.png",
  },
  {
    name: "Dr. Oluwole Ajayi",
    role: "CEO, Omak Group",
    image: "/images/speaker-oluwole.jpeg",
  },
  {
    name: "Mr. Makinde Olaolu",
    role: "MD, Adebisi Foods Ventures",
    image: "/images/speaker-makinde.jpeg",
  },
];

export default function BusinessSummitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Business & Economic Development
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Activating a generation of Kingdom-minded wealth creators.
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            Mentorship, funding access, and practical strategy for Christian entrepreneurs and professionals — where faith meets enterprise.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact?interest=Partnership"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-amber-700 focus-ring transition-all"
            >
              Apply for the Pitch Competition
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact?interest=Partnership"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 focus-ring transition-all"
            >
              Book an Exhibition Booth
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Fact Strip */}
      <section className="bg-cream/30 py-8 border-y border-cream text-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-cream-dark/30">
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">5–6 Dec 2025</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">MBS 1.0 Dates</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">1,500+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Exhibition Audience Reach</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">₦1,000,000</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Pitch Competition Funding</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">MBS 1.0 → 2.0</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Staged Public Scale-up</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Summit Exists & Pitch Finals Image */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image on Left */}
            <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden shadow border border-cream bg-cream order-last lg:order-first">
              <Image
                src="/images/pitch-competition.webp"
                alt="Entrepreneurs pitching at MIV Business Summit finals"
                fill
                className="object-cover"
              />
            </div>

            {/* Content on Right */}
            <div className="lg:col-span-7 text-left space-y-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Why This Summit Exists</span>
              <h2 className="font-serif text-3xl font-bold text-navy leading-tight">
                Business is a calling, not just a career.
              </h2>
              <div className="h-0.5 w-12 bg-gold/60" />
              <div className="text-sm sm:text-base text-ink/80 space-y-4 leading-relaxed font-sans">
                <p>
                  Entrepreneurship and enterprise are the engine of employment and national productivity. The MIV Business Summit exists to equip entrepreneurs, professionals, and business leaders with practical knowledge, mentorship, and funding opportunities — while integrating Biblical principles of stewardship, integrity, and enterprise. Our vision extends beyond wealth creation, toward building businesses that generate employment and strengthen communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Happens at MBS */}
      <section className="py-20 bg-cream/15 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Summit Components</span>
            <h2 className="font-serif text-3xl font-bold text-navy">What happens at the Business Summit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, index) => (
              <div key={index} className="bg-white rounded-xl border border-cream p-6 shadow-sm space-y-3">
                <span className="font-mono text-xs font-bold text-gold">0{index + 1}</span>
                <h3 className="font-serif text-lg font-bold text-navy leading-tight">{mod.title}</h3>
                <p className="text-xs text-ink/75 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Speakers Section */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Speakers & Faculty</span>
            <h2 className="font-serif text-3xl font-bold text-navy">Featured Voices</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((sp) => (
              <div key={sp.name} className="flex flex-col items-center text-center space-y-3">
                <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-cream shadow-sm bg-cream">
                  <Image
                    src={sp.image}
                    alt={sp.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy leading-tight">{sp.name}</h3>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-crimson font-semibold mt-0.5">{sp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why We Started In-House (MBS 1.0) */}
      <section className="py-20 bg-cream/10 border-b border-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="mx-auto p-3 rounded-full bg-gold/5 text-gold w-fit">
            <Trophy className="h-8 w-8" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">We test before we scale.</h2>
          <h3 className="font-mono text-xs uppercase tracking-widest text-crimson font-bold">
            MBS 1.0 in-house pilot program
          </h3>
          <p className="text-sm sm:text-base text-ink/80 leading-relaxed max-w-2xl mx-auto">
            MBS 1.0 was deliberately run as an in-house edition for ministry members — a chance to refine format, flow, and delivery before opening the doors to a much larger public audience with MBS 2.0. If you want to be part of that next chapter, this is the time to get involved.
          </p>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="bg-navy-deep py-20 text-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            Pitch your business. Book your booth. Fund your future.
          </h2>
          <p className="text-cream/80 text-sm max-w-xl mx-auto leading-relaxed">
            Get involved in the upcoming MBS 2.0 edition, secure funding, showcase your products, or support as a commercial partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact?interest=Partnership"
              className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-700 focus-ring transition-all"
            >
              Apply to Pitch
            </Link>
            <Link
              href="/contact?interest=Partnership"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 focus-ring transition-all"
            >
              Reserve an Exhibition Booth
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 focus-ring transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
