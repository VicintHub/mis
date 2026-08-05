import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Award, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Academic Summit & Banquet",
  description: "A purpose-driven and policy-free summit addressing leadership, legacy, and institutional excellence in higher education across Oyo State.",
};

const speakers = [
  { name: "Mrs Didi Walson-Jack", role: "Head of Civil Service of the Federation" },
  { name: "Emeritus Prof. A.O. Ogunkunle", role: "Chairman, Governing Council, Emmanuel Alayande University" },
  { name: "Prof. Kayode Adebowale", role: "Vice-Chancellor, University of Ibadan" },
  { name: "Prof. Razzaq Rom Kalilu", role: "Vice-Chancellor, Ladoke Akintola University of Technology (LAUTECH)" },
  { name: "Prof. O.S. Olufemi", role: "Nanotechnology expert, University of Johannesburg" },
];

const institutions = [
  "University of Ibadan", "LAUTECH", "Lead City University", "Kola-Daisi University", 
  "Dominion University", "Precious Cornerstone University", "Dominican University", 
  "Ajayi Crowther University", "Atiba University", "First Technical University Ibadan", 
  "Emmanuel Alayande University of Education", "The Polytechnic Ibadan", 
  "The Polytechnic Eruwa", "Oke Ogun Polytechnic Saki", "Adeseun Ogundoyin Polytechnic",
  "Federal College of Education (Special) Oyo", "Oyo State College of Education Lalante",
  "Federal College of Agriculture Moor Plantation", "College of Agriculture and Technology Igbo-Ora",
  "Federal College of Forestry Ibadan", "Federal School of Statistics", "Cooperative College Ibadan"
];

export default function AcademicSummitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Academic Transformation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Building extraordinary legacy in Nigerian higher education.
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            A strategic summit and banquet for lecturers and institutional management — addressing leadership, legacy, and institutional excellence. Purpose-driven. Policy-free.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?interest=Nominating+a+Participant"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-amber-700 focus-ring transition-all"
            >
              Register Interest for the Next Edition
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
              <span className="font-serif text-2xl font-bold block">200+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">In-Person Academic Leaders</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">800+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Online Reach (FB / YT)</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">16 Aug 2025</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Maiden Edition Date</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="font-serif text-2xl font-bold block">22</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink/60 mt-1">Institutions Mapped</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Summit Exists & Image */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-left space-y-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Why This Summit Exists</span>
              <h2 className="font-serif text-3xl font-bold text-navy leading-tight">
                A generation is only as strong as the integrity of those who teach it.
              </h2>
              <div className="h-0.5 w-12 bg-gold/60" />
              <div className="text-sm sm:text-base text-ink/80 space-y-4 leading-relaxed font-sans">
                <p>
                  The Academic Summit &amp; Banquet exists to address pressing challenges in leadership, legacy, and institutional excellence facing Nigeria&apos;s tertiary institutions — equipping educators and administrators to thrive both professionally and personally, as the true gatekeepers of society.
                </p>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden shadow border border-cream bg-cream">
              <Image
                src="/images/academicsummit.png"
                alt="Professors and academic leaders at the summit table"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who Attends & Speakers */}
      <section className="py-20 bg-cream/10 border-y border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Who Attends */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-azure shrink-0" />
                <h3 className="font-serif text-2xl font-bold text-navy">Who Attends</h3>
              </div>
              <p className="text-sm text-ink/75 leading-relaxed">
                The summit convenes administrative and educational gatekeepers across higher education institutions:
              </p>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs text-ink/85">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-azure" />
                  <span>Vice-Chancellors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-azure" />
                  <span>Professors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-azure" />
                  <span>Registrars</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-azure" />
                  <span>Deans & Directors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-azure" />
                  <span>Senior Lecturers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-azure" />
                  <span>Non-Academic Managers</span>
                </div>
              </div>
            </div>

            {/* Notable Speakers */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-gold shrink-0" />
                <h3 className="font-serif text-2xl font-bold text-navy">Notable Voices</h3>
              </div>
              <div className="space-y-4">
                {speakers.map((sp) => (
                  <div key={sp.name} className="border-l-2 border-gold/40 pl-4">
                    <p className="font-serif text-base font-bold text-navy leading-none">{sp.name}</p>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-crimson font-bold block mt-1">
                      {sp.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Policy-Free Section */}
      <section className="py-20 bg-white border-b border-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="mx-auto p-3 rounded-full bg-azure/5 text-azure w-fit">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">Is This Political?</h2>
          <h3 className="font-mono text-xs uppercase tracking-widest text-crimson font-bold">
            No. This summit is purpose-driven and policy-free.
          </h3>
          <p className="text-sm sm:text-base text-ink/80 leading-relaxed max-w-2xl mx-auto">
            We exist to strengthen leadership and legacy in higher education — not to advance any partisan or denominational agenda. That single commitment has made this summit a trusted table for academic leaders across institutional lines.
          </p>
        </div>
      </section>

      {/* 6. Institutions We&apos;re Building Toward */}
      <section className="py-20 bg-cream/10 border-b border-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson block">Represented Institutions</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">Tertiary & Specialized Mapping</h2>
            <p className="text-xs sm:text-sm text-ink/70 leading-relaxed max-w-xl">
              Collaborating across universities, polytechnics, colleges of education, and specialized institutes throughout Oyo State:
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {institutions.map((inst) => (
              <span
                key={inst}
                className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-navy border border-cream shadow-sm"
              >
                {inst}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="bg-navy-deep py-20 text-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            The next Academic Summit is already being planned.
          </h2>
          <p className="text-cream/80 text-sm max-w-xl mx-auto leading-relaxed">
            Register your interest, nominate a colleague, or explore how your institution can partner with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact?interest=Nominating+a+Participant"
              className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-amber-700 focus-ring transition-all"
            >
              Register Your Interest
            </Link>
            <Link
              href="/partner?tier=Institutional"
              className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 focus-ring transition-all"
            >
              Partner With This Programme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
