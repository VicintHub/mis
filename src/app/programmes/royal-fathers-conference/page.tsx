import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Crown, Sparkles, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Royal Fathers' (Oba&apos;s) Conference",
  description: "A unique, dignified gathering where traditional rulers set aside titles and regalia to seek godly wisdom, pray for peace, and fellowship in humility.",
};

const items = [
  {
    title: "Corporate Worship",
    desc: "Royal fathers, in full ceremonial regalia, lifting their voices together in a rare, unified expression of humility before God.",
  },
  {
    title: "Prayer & Consecration",
    desc: "Dedicated blocks of time set aside for personal reflection and communal prayer, interceding for peace and regional stability.",
  },
  {
    title: "Leadership Teaching",
    desc: "Keynote lectures addressing ethical governance and integrity, tailored specifically to a traditional ruler's unique societal vantage point.",
  },
];

export default function RoyalFathersConferencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Traditional & Royal Leadership
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Traditional rulers, set apart in worship and humility.
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            A gathering unlike any council or coronation — where royal fathers set aside the symbols of title and earthly authority, to worship God and seek wisdom for the weight they carry.
          </p>
          <div className="pt-2">
            <Link
              href="/partner?tier=Institutional"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-amber-700 focus-ring transition-all"
            >
              Partner With This Conference
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why This Conference Exists */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Copy */}
            <div className="lg:col-span-7 text-left space-y-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Our Perspective</span>
              <h2 className="font-serif text-3xl font-bold text-navy leading-tight">
                Even a king needs a source of wisdom greater than his own.
              </h2>
              <div className="h-0.5 w-12 bg-gold/60" />
              <div className="text-sm sm:text-base text-ink/80 space-y-4 leading-relaxed font-sans">
                <p>
                  Nigeria&apos;s traditional institutions remain custodians of culture, land, and community cohesion — wielding a moral authority that often outlasts political administrations. The Royal Fathers&apos; (Oba&apos;s) Conference creates a dignified, reverent space in which traditional rulers set aside the symbols of office to pray for grace to lead their people with integrity, peace, and compassion.
                </p>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden shadow border border-cream bg-cream">
              <Image
                src="/images/royalfather.png"
                alt="Royal Fathers seated at the conference"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Happens at the Conference */}
      <section className="py-20 bg-cream/15 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Conference Elements</span>
            <h2 className="font-serif text-3xl font-bold text-navy">What happens at the Conference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-cream p-8 shadow-sm space-y-3">
                <Crown className="h-5 w-5 text-gold shrink-0" />
                <h3 className="font-serif text-lg font-bold text-navy leading-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A Different Kind of Room */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="mx-auto p-3 rounded-full bg-navy/5 text-navy w-fit">
            <Sparkles className="h-8 w-8 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">A Different Kind of Room</h2>
          <p className="text-sm sm:text-base text-ink/80 leading-relaxed max-w-2xl mx-auto font-sans">
            In a room usually defined by title, protocol, and hierarchy, this conference asks something rare: that every crown be set down, if only for a few hours, before God. Photographic records from past editions show royal fathers in postures of prayer, consecration, and quiet fellowship with one another — a picture of leadership grounded not in power, but in humility.
          </p>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="bg-navy-deep py-20 text-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            Help us extend this gathering to more royal domains.
          </h2>
          <p className="text-cream/80 text-sm max-w-xl mx-auto leading-relaxed">
            Partner with us to expand the geographic reach of this conference, or nominate a traditional ruler for the next edition.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact?interest=Nominating+a+Participant"
              className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-700 focus-ring transition-all"
            >
              Nominate a Traditional Ruler
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 focus-ring transition-all"
            >
              <HeartHandshake className="h-4.5 w-4.5" />
              Partner With This Conference
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
