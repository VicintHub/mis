import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Users } from "lucide-react";

export const metadata = {
  title: "Armed Forces & Uniformed Officers Outreach",
  description: "Dignified outreach and moral capacity building for security officers, along with welfare empowerment for widows of fallen heroes.",
};

const agencies = [
  "Nigerian Army", "Nigeria Police Force", "Nigeria Security and Civil Defence Corps (NSCDC)", 
  "Federal Road Safety Corps (FRSC)", "Economic and Financial Crimes Commission (EFCC)", 
  "Nigeria Customs Service", "Nigerian Air Force", "Nigerian Navy", "And further uniformed corps"
];

const vocationalSkills = [
  "Tailoring & Fashion Design", "Catering & Confectioneries", "Fascinator & Hat Making", 
  "Professional Caregiving", "Knitting & Crafts"
];

export default function ArmedForcesOutreachPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Security & Uniformed Officers
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Strengthening faith, discipline, and service in uniform.
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            A dedicated outreach honouring the men and women of the armed and uniformed services — now extended into structured, verified welfare support for the families they leave behind.
          </p>
          <div className="pt-2">
            <Link
              href="/partner?tier=Impact"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-amber-700 focus-ring transition-all"
            >
              Partner With This Outreach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Fact Strip */}
      <section className="bg-cream/30 py-8 border-y border-cream text-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-cream-dark/30">
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">17</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Security Agencies Represented</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">9</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Agencies at the 1st Edition</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">400+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Officers Gathered</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">2025</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Widows&apos; Project Launched</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Outreach Exists */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Copy */}
            <div className="lg:col-span-7 text-left space-y-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Our Mandate</span>
              <h2 className="font-serif text-3xl font-bold text-navy leading-tight">
                Those who defend a nation deserve more than gratitude in passing.
              </h2>
              <div className="h-0.5 w-12 bg-gold/60" />
              <div className="text-sm sm:text-base text-ink/80 space-y-4 leading-relaxed font-sans">
                <p>
                  Officers across the armed and uniformed services carry the weight of national security, often at extraordinary personal cost. This outreach brings the ministry of the Word, discipleship, and leadership training into that world — strengthening faith, moral discipline, and commitment to justice among those who serve.
                </p>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden shadow border border-cream bg-cream">
              <Image
                src="/images/armedforce.png"
                alt="Uniformed officers seated at the outreach seminar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Growing Institutional Trust & Representation List */}
      <section className="py-20 bg-cream/10 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 text-left space-y-5">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-crimson shrink-0" />
                <h3 className="font-serif text-2xl font-bold text-navy">Growing Institutional Trust</h3>
              </div>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-sans">
                Participation has grown from 9 security agencies at the outreach&apos;s first edition to 17 agencies represented at its 2025 edition — nearly doubling institutional representation in a single cycle. We collaborate with leadership across:
              </p>
            </div>

            {/* Grid of Agencies */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-mono text-xs text-ink/85">
              {agencies.map((agency) => (
                <div key={agency} className="flex items-center gap-2 p-3 bg-white rounded border border-cream shadow-xs">
                  <div className="h-1.5 w-1.5 rounded-full bg-crimson shrink-0" />
                  <span>{agency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Widows of Fallen Officers Project */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">Compassionate Support</span>
            <h2 className="font-serif text-3xl font-bold text-navy">Widows of Fallen Officers Support & Empowerment Project</h2>
            <div className="h-0.5 w-12 bg-gold/60 mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text details */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-ink/80 leading-relaxed font-sans">
              <h3 className="font-serif text-xl font-bold text-navy">Beyond honour — sustainable support.</h3>
              <p>
                This year, we are taking a bold step to support widows of fallen officers across multiple security agencies — men and women who paid the ultimate price for our safety. Beyond immediate welfare support, selected widows undergo up to three months of structured vocational training, empowering them for sustainable, independent living.
              </p>
              <div className="space-y-2 border-l-2 border-crimson/30 pl-4 py-1">
                <h4 className="font-serif text-sm font-bold text-navy">Hard-learned Accountability:</h4>
                <p className="text-xs text-ink/75 italic">
                  Our rigorous, interview-based verification process was shaped by an early lesson: an instance where a donated sewing machine intended to establish a widow&apos;s livelihood was resold rather than used. This informed a deliberately more practical, accountable, and monitored approach to future welfare support. Every nomination is verified through a formal interview, and progress is monitored after graduation.
                </p>
              </div>
            </div>

            {/* Vocational course list */}
            <div className="lg:col-span-5 bg-cream/15 rounded-xl border border-cream p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-crimson">
                <Heart className="h-5 w-5 fill-crimson" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Vocational Training (Up to 3 Months)</span>
              </div>
              <ul className="space-y-3 font-serif text-sm text-navy">
                {vocationalSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold font-bold">0{idx + 1}</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="bg-navy-deep py-20 text-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            Help us reach further — and reach deeper.
          </h2>
          <p className="text-cream/80 text-sm max-w-xl mx-auto leading-relaxed">
            Partner with us to fund a widow&apos;s vocational training scholarship, sponsor next year&apos;s security outreach, or nominate a chaplaincy unit for engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/partner?tier=Impact"
              className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-700 focus-ring transition-all"
            >
              Sponsor a Widow&apos;s Training
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 focus-ring transition-all"
            >
              Partner With This Outreach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
