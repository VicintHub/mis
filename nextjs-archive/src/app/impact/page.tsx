import Link from "next/link";
import { ArrowRight, AlertCircle, Shield, GraduationCap, Briefcase } from "lucide-react";

export const metadata = {
  title: "Verified Impact",
  description: "Review our verified impact statistics across academia, security agencies, and business summits, compiled with transparency.",
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Impact, As Verified
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Reported exactly as it happened. <br />
            <span className="italic font-normal text-gold">Nothing rounded up for effect.</span>
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            Every figure on this page is drawn directly from post-event records. Where a number isn&apos;t yet verified, we say so — rather than fill the gap.
          </p>
        </div>
      </section>

      {/* 2. Stat Grid */}
      <section className="bg-cream/20 py-12 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-cream bg-white p-6 text-left shadow-sm">
              <span className="font-serif text-4xl font-bold text-navy block">17</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-crimson font-bold block mt-2">
                Security Agencies Engaged
              </span>
              <p className="text-xs text-ink/70 leading-relaxed mt-2">
                Representing a growth from 9 agencies in our first outreach.
              </p>
            </div>
            <div className="rounded-xl border border-cream bg-white p-6 text-left shadow-sm">
              <span className="font-serif text-4xl font-bold text-navy block">1,000+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-azure font-bold block mt-2">
                Combined Academic Reach
              </span>
              <p className="text-xs text-ink/70 leading-relaxed mt-2">
                200+ in-person and 800+ via livestream at the maiden summit.
              </p>
            </div>
            <div className="rounded-xl border border-cream bg-white p-6 text-left shadow-sm">
              <span className="font-serif text-4xl font-bold text-navy block">1,500+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-gold font-bold block mt-2">
                Business Exhibition Reach
              </span>
              <p className="text-xs text-ink/70 leading-relaxed mt-2">
                Christian entrepreneurs, professionals, and investors aligned.
              </p>
            </div>
            <div className="rounded-xl border border-cream bg-white p-6 text-left shadow-sm">
              <span className="font-serif text-4xl font-bold text-navy block">22</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-navy font-bold block mt-2">
                Institutions Mapped
              </span>
              <p className="text-xs text-ink/70 leading-relaxed mt-2">
                Tertiary & specialized institutions in Oyo State engaged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Sectors Breakdown */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Security */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-cream pb-12">
            <div className="md:col-span-4 flex items-center gap-3 text-crimson">
              <Shield className="h-6 w-6 shrink-0" />
              <h3 className="font-serif text-xl font-bold text-navy">Security Outreach</h3>
            </div>
            <div className="md:col-span-8 text-left space-y-3">
              <h4 className="font-serif text-lg font-bold text-navy">Nearly double the institutional trust, in one cycle.</h4>
              <p className="text-sm text-ink/80 leading-relaxed font-sans">
                Participation grew from 9 security agencies at the outreach&apos;s first edition to 17 agencies represented at its 2025 edition. The Widows of Fallen Officers Support & Empowerment Project has since introduced an ongoing, verified form of welfare impact — needs-based support paired with up to three months of vocational training.
              </p>
            </div>
          </div>

          {/* Academia */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-cream pb-12">
            <div className="md:col-span-4 flex items-center gap-3 text-azure">
              <GraduationCap className="h-6 w-6 shrink-0" />
              <h3 className="font-serif text-xl font-bold text-navy">Academic Transformation</h3>
            </div>
            <div className="md:col-span-8 text-left space-y-3">
              <h4 className="font-serif text-lg font-bold text-navy">A combined reach of over 1,000, in a single maiden edition.</h4>
              <p className="text-sm text-ink/80 leading-relaxed font-sans">
                The Academic Summit &amp; Banquet&apos;s first edition reached 200+ academic leaders in person and 800+ more via livestream — with a further 22 tertiary and specialised institutions across Oyo State mapped for ongoing engagement.
              </p>
            </div>
          </div>

          {/* Business */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 flex items-center gap-3 text-gold">
              <Briefcase className="h-6 w-6 shrink-0" />
              <h3 className="font-serif text-xl font-bold text-navy">Business & Enterprise</h3>
            </div>
            <div className="md:col-span-8 text-left space-y-3">
              <h4 className="font-serif text-lg font-bold text-navy">Built to test, before it scales.</h4>
              <p className="text-sm text-ink/80 leading-relaxed font-sans">
                MBS 1.0 was deliberately convened in-house to strengthen execution before a planned public-facing MBS 2.0 — positioned before an exhibition audience of 1,500+ Christian entrepreneurs, investors, and professionals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. What We&apos;re Still Verifying (Transparency Policy) */}
      <section className="py-16 bg-cream/15 border-y border-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gold/30 bg-white p-6 md:p-8 space-y-4 text-left shadow-sm">
            <div className="flex items-center gap-2 text-gold">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">Transparency & Verification Policy</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-navy">What We&apos;re Still Verifying</h3>
            <p className="text-sm text-ink/85 leading-relaxed font-sans">
              In the spirit of transparency, several figures are still being finalised: exact attendance for the Royal Fathers&apos; Conference, MBS 1.0&apos;s final attendance count, and documented testimonies across all four programmes. These will be added as they are audited. We choose to leave placeholders rather than publish unverified estimates.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="bg-navy-deep py-20 text-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            Help us expand our metrics and double our reach.
          </h2>
          <p className="text-cream/80 text-sm max-w-xl mx-auto leading-relaxed">
            Every partnership helps us measure more, empower more, and scale our transformation targets.
          </p>
          <div className="pt-4">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-amber-700 focus-ring transition-all"
            >
              Partner to Help Us Measure More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
