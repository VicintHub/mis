import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import CompassDiagram from "@/components/CompassDiagram";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/30 px-3.5 py-1 text-xs font-mono font-medium tracking-wide text-gold">
                <Sparkles className="h-3 w-3 text-gold shrink-0" />
                <span>A Strategic Outreach of Men of Issachar Vision Inc.</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-tight">
                Influencing strategic sectors, <br />
                <span className="italic font-normal text-crimson">for national transformation.</span>
              </h1>
              <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans max-w-2xl">
                We convene the leaders who shape academia, security, business, and governance — bringing leadership development, capacity building, and practical support to the tables where a nation&apos;s decisions are made.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center gap-2 rounded bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-navy-deep hover:shadow focus-ring transition-all"
                >
                  Explore Our Programmes
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/partner"
                  className="inline-flex items-center justify-center gap-2 rounded border border-cream bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy hover:bg-cream/40 focus-ring transition-all"
                >
                  Become a Partner
                </Link>
              </div>
            </div>

            {/* Right Graphic/Emblem (MIV Seal Graphic or Convergence Emblem) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-cream shadow-xl bg-navy flex items-center justify-center p-6">
                <Image
                  src="/images/msi-logo.webp"
                  alt="MIV Strategic Initiative Seal Logo"
                  fill
                  className="object-cover scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background visual styling */}
        <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-cream/10 blur-3xl filter" />
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-navy py-10 text-white border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-gold">17</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-cream/70 mt-1">Security Agencies Engaged</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-gold">1,000+</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-cream/70 mt-1">Academic Leaders Reached</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-gold">1,500+</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-cream/70 mt-1">Business Audience</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-gold">22</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-cream/70 mt-1">Institutions Mapped</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are Teaser */}
      <section className="py-20 bg-cream/15 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Who We Are</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight leading-tight">
                A decades-old vision, carried into the rooms where society decides.
              </h2>
              <div className="h-1 w-12 bg-gold/50 my-2" />
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-sans">
                For over three decades, Men of Issachar Vision Inc. has raised leaders across Nigeria and beyond. MIV Strategic Initiative is its dedicated expression for reaching the specific sectors that shape national life — academia, security, business, and traditional governance. We don&apos;t wait for institutions to come to us. We go to where their leaders already meet, bringing real value first: leadership insight, funding access, dialogue, and welfare support.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors focus-ring rounded p-1"
                >
                  Read Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Image/Graphic */}
            <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden shadow-md border border-cream bg-white">
              <Image
                src="/images/rev-samson.jpg"
                alt="Rev. Samson Ajetomobi preaching/speaking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Pillars (Compass Diagram) */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Our Strategic Pillars</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Four sectors. One conviction.</h2>
            <p className="text-sm text-ink/75 leading-relaxed max-w-xl mx-auto">
              Institutions endure only as far as the character of those who lead them. We concentrate our focus where influence compounds.
            </p>
          </div>
          <CompassDiagram />
        </div>
      </section>

      {/* 5. Major Programmes Teaser Grid */}
      <section className="py-20 bg-cream/10 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Major Programmes</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Where vision becomes a gathering.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Royal Fathers */}
            <div className="flex flex-col rounded-xl border border-cream bg-white overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/royalfather.png"
                  alt="Royal Fathers' Conference gathering"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-navy block">Traditional & Royal Leadership</span>
                  <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">Royal Fathers&apos; (Oba&apos;s) Conference</h3>
                  <p className="text-xs text-ink/70 leading-relaxed font-sans">
                    Traditional rulers set aside title and regalia to worship, and pray for wisdom to lead their people with integrity, peace, and compassion.
                  </p>
                </div>
                <Link
                  href="/programmes/royal-fathers-conference"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors focus-ring rounded p-1 self-start"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Armed Forces */}
            <div className="flex flex-col rounded-xl border border-cream bg-white overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/armedforce.png"
                  alt="Armed Forces Outreach event"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-crimson block">Security & Uniformed Officers</span>
                  <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">Armed Forces & Uniformed Officers Outreach</h3>
                  <p className="text-xs text-ink/70 leading-relaxed font-sans">
                    Grown from 9 to 17 agencies represented in 2025. Honoring officers in service and supporting families through the Widows&apos; Empowerment Project.
                  </p>
                </div>
                <Link
                  href="/programmes/armed-uniformed-outreach"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors focus-ring rounded p-1 self-start"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Academic Summit */}
            <div className="flex flex-col rounded-xl border border-cream bg-white overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/academicsummit.png"
                  alt="Academic Summit session"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-azure block">Academic Transformation</span>
                  <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">Academic Summit & Banquet</h3>
                  <p className="text-xs text-ink/70 leading-relaxed font-sans">
                    1,000+ academic leaders reached in a single edition. Purpose-driven and policy-free dialogue for administrators and tertiary educators.
                  </p>
                </div>
                <Link
                  href="/programmes/academic-summit"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors focus-ring rounded p-1 self-start"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 4: Business Summit */}
            <div className="flex flex-col rounded-xl border border-cream bg-white overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/business-hero.jpg"
                  alt="Business Summit Exhibition banner"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold block">Business & Economic Development</span>
                  <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">MIV Business Summit</h3>
                  <p className="text-xs text-ink/70 leading-relaxed font-sans">
                    Activating a generation of Kingdom-minded wealth creators. Mentorship, exhibition space, and up to ₦1,000,000 Pitch Competition seed funding.
                  </p>
                </div>
                <Link
                  href="/programmes/business-summit"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors focus-ring rounded p-1 self-start"
                >
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Impact Snapshot */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Impact, As Verified</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy tracking-tight leading-tight">
                Reported plainly. <br />
                <span className="italic font-normal text-gold">No figure rounded up for effect.</span>
              </h2>
              <div className="h-1 w-12 bg-gold/50 my-2" />
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-sans">
                From 9 to 17 security agencies represented in a single cycle. Over 1,000 academic leaders reached in one maiden summit. A growing network of Christian entrepreneurs equipped with real funding access. We hold our reporting processes accountable to transparency.
              </p>
              <div className="pt-2">
                <Link
                  href="/impact"
                  className="inline-flex items-center justify-center gap-2 rounded bg-navy px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-navy-deep focus-ring transition-all"
                >
                  See Full Impact Report
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Stats Showcase */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left">
              <div className="flex gap-4 p-4 rounded-lg border border-cream bg-cream/10">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 block">Security Agencies</span>
                  <p className="text-sm font-semibold text-navy">Grown 9 to 17 represented agencies in one cycle</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg border border-cream bg-cream/10">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 block">Academic engagement</span>
                  <p className="text-sm font-semibold text-navy">22 tertiary and specialised institutions mapped</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg border border-cream bg-cream/10">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 block">Business Seed Funding</span>
                  <p className="text-sm font-semibold text-navy">₦1,000,000 pitch competition prize active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Partner CTA (Closing Banner) */}
      <section className="bg-navy-deep py-20 text-white relative overflow-hidden border-t border-gold/15">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">Become a Strategic Partner</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            National transformation is not one institution&apos;s work.
          </h2>
          <p className="text-cream/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            It requires universities willing to open their halls, agencies willing to open their gates, businesses willing to open their networks, and partners willing to open their hands.
          </p>
          <div className="pt-4">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-amber-700 hover:shadow-lg focus-ring transition-all cursor-pointer"
            >
              Become a Strategic Partner
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,243,234,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,243,234,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-0" />
      </section>
    </div>
  );
}
