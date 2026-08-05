import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Target, BookOpen, Quote } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about the history, vision, and leadership of the MIV Strategic Initiative, the strategic outreach arm of Men of Issachar Vision Inc.",
};

const leaders = [
  {
    name: "Rev. Samson Ajetomobi",
    role: "Founder & President, Men of Issachar Vision Inc.",
    bio: "A trained Agricultural Engineer and certified Professional Manager (UK), Rev. Ajetomobi is an alumnus of Haggai Institute (Maui, USA), Overseer of Redemption Faith Churches, and Chairman of the Pentecostal Fellowship of Nigeria (PFN), Oyo State Chapter. He is the author of several books including 'Not Offended', 'Running Well', and 'The Light Bearers'.",
    image: "/images/rev-samson.jpg",
  },
  {
    name: "Rev. (Mrs) Stella Ajetomobi",
    role: "Vice President, Men of Issachar Vision Inc.",
    bio: "Rev. Stella holds a Master's degree in Personnel Psychology and hosts the Back to Bethel Retreats for ministers' wives. She coordinates the Divine Well Global Foundation and is the author of 'Dressing for Your Destination', 'Solitude', and 'Bridging the Gap'.",
    image: "/images/rev-stella.png",
  },
  {
    name: "Mr. Victor Idowu",
    role: "MIV Strategic Initiative Coordinator",
    bio: "Coordinating operations and strategic outreach campaigns. Directs sector alignment and verified evaluations for security outreach, academic banquets, and business collaborations.",
    image: "", // Will render a stylized letter avatar
  },
  {
    name: "Arch. Lola Olufemi Oyenekan",
    role: "General Supervising Leader",
    bio: "Providing executive supervision, architectural oversight, and governance structures for MIV Strategic Initiative's planning and project lifecycles.",
    image: "", // Will render a stylized letter avatar
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Who We Are
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            We go where the decisions are already being made.
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            MIV Strategic Initiative is the strategic outreach arm of Men of Issachar Vision Inc. — carrying a 35-year-old vision into academia, security, business, and traditional governance.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Story Copy */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy tracking-tight leading-tight">
                A burden that began long before 2025.
              </h2>
              <div className="h-0.5 w-12 bg-gold/60" />
              <div className="space-y-4 text-sm sm:text-base text-ink/80 leading-relaxed font-sans">
                <p>
                  The story of MIV Strategic Initiative did not begin with any single event. It is the outworking of a burden God laid on the Founder of Men of Issachar Vision Inc., Rev. Samson Ajetomobi, many years ago — to intentionally influence strategic sectors of society beyond the four walls of the church.
                </p>
                <p>
                  What began as Leadership Development gatherings for legal practitioners, public office holders, and professionals grew, over time, into a dedicated strategic summit for senior Armed Forces and security officers — and from there, into a deliberate, sector-based strategy now expressed through four flagship programmes reaching academia, security, business, and traditional leadership.
                </p>
                <p>
                  Today, the Initiative exists to become a nationally recognised platform where government institutions, academia, business leaders, security agencies, development partners, and faith communities collaborate to build a more ethical, prosperous, and transformed society.
                </p>
              </div>
            </div>

            {/* Side Callout/Quote (Editorial style like Praxis) */}
            <div className="lg:col-span-4 flex items-center">
              <div className="rounded-xl border border-gold/30 bg-cream/15 p-6 md:p-8 relative">
                <Quote className="h-10 w-10 text-gold/30 absolute -top-4 -left-2" />
                <p className="font-serif text-base italic text-navy leading-relaxed text-left pt-2">
                  &ldquo;We do not ask a nation&apos;s institutions to come to church. We bring the character of Christ to where those institutions already meet.&rdquo;
                </p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-crimson font-bold mt-4 text-left">
                  — The Guiding Conviction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission / Vision / Approach */}
      <section className="py-20 bg-cream/15 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Mission */}
            <div className="bg-white rounded-xl border border-cream p-8 space-y-4 shadow-sm">
              <div className="p-3 rounded-full bg-navy/5 text-navy w-fit">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy">Our Mission</h3>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                To intentionally influence strategic sectors of society — academia, security, business, and governance — through Christ-centred transformation, ethical leadership development, and practical capacity building.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl border border-cream p-8 space-y-4 shadow-sm">
              <div className="p-3 rounded-full bg-crimson/5 text-crimson w-fit">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy">Our Vision</h3>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                A society where the men and women who teach, defend, build, and govern are equipped in both character and competence — producing institutions of integrity and a nation reflecting excellence in every sphere of public life.
              </p>
            </div>

            {/* Approach */}
            <div className="bg-white rounded-xl border border-cream p-8 space-y-4 shadow-sm">
              <div className="p-3 rounded-full bg-gold/5 text-gold w-fit">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy">Our Approach</h3>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                We deliver genuine professional value first — leadership insight, funding access, welfare support — so that participation is sought after, not merely tolerated. Character and conviction follow naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section id="leadership" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl mb-16 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">
              Leadership
            </span>
            <h2 className="font-serif text-3xl font-bold text-navy">Spiritual oversight, steady hands.</h2>
            <div className="h-0.5 w-12 bg-gold/60 mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-cream bg-cream/10 text-left items-start sm:items-center shadow-sm"
              >
                {/* Image or Initials Avatar */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-full border border-cream shadow-sm bg-navy flex items-center justify-center">
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover scale-102"
                    />
                  ) : (
                    <span className="font-serif text-2xl font-bold text-gold">
                      {leader.name
                        .split(" ")
                        .filter((n) => !n.includes("."))
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-navy leading-none">{leader.name}</h3>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crimson font-bold block">
                    {leader.role}
                  </span>
                  <p className="text-xs text-ink/75 leading-relaxed font-sans">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="mt-16 text-center">
            <Link
              href="/programmes"
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-navy-deep focus-ring transition-all"
            >
              Explore Our Flagship Programmes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
