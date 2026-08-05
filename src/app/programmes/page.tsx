import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Shield, GraduationCap, Briefcase, UserCheck, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Programmes",
  description: "Explore the four flagship programmes of the MIV Strategic Initiative: Academic Summit, Business Summit, Armed Forces Outreach, and Royal Fathers' Conference.",
};

const programs = [
  {
    id: "royal-fathers",
    tag: "Traditional & Royal Leadership",
    title: "Royal Fathers' (Oba&apos;s) Conference",
    teaser: "Traditional rulers set aside title and regalia to worship, and pray for wisdom to lead their people with integrity, peace, and compassion.",
    icon: Award,
    image: "/images/royalfather.png",
    path: "/programmes/royal-fathers-conference",
    colorClass: "text-navy",
    borderColorClass: "border-navy/20",
    bgIconClass: "bg-navy/5",
  },
  {
    id: "armed-forces",
    tag: "Security & Uniformed Officers",
    title: "Armed Forces & Uniformed Officers Outreach",
    teaser: "Grown from 9 to 17 security agencies represented in a single cycle — now extending into welfare support for widows of fallen officers.",
    icon: Shield,
    image: "/images/armedforce.png",
    path: "/programmes/armed-uniformed-outreach",
    colorClass: "text-crimson",
    borderColorClass: "border-crimson/20",
    bgIconClass: "bg-crimson/5",
  },
  {
    id: "academic-summit",
    tag: "Academic Transformation",
    title: "Academic Summit & Banquet",
    teaser: "200+ academic leaders in person, 800+ online — building extraordinary legacy in Nigeria's higher education sector.",
    icon: GraduationCap,
    image: "/images/academicsummit.png",
    path: "/programmes/academic-summit",
    colorClass: "text-azure",
    borderColorClass: "border-azure/20",
    bgIconClass: "bg-azure/5",
  },
  {
    id: "business-summit",
    tag: "Business & Economic Development",
    title: "MIV Business Summit",
    teaser: "Mentorship, funding access, and a ₦1,000,000 Pitch Competition for Christian entrepreneurs and professionals.",
    icon: Briefcase,
    image: "/images/business-hero.jpg",
    path: "/programmes/business-summit",
    colorClass: "text-gold",
    borderColorClass: "border-gold/20",
    bgIconClass: "bg-gold/5",
  },
];

export default function ProgrammesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Major Programmes
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Four gatherings. Four sectors. <br />
            <span className="italic font-normal text-gold">One nation, strengthened.</span>
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            Each programme is the practical, on-the-ground expression of a strategic pillar — where vision becomes a conversation, and a measurable act of service.
          </p>
        </div>
      </section>

      {/* 2. Program Grid Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className={`flex flex-col rounded-xl border ${prog.borderColorClass} bg-white overflow-hidden shadow-sm hover:shadow-md transition-all group`}
              >
                {/* Visual Header */}
                <div className="relative h-64 w-full bg-cream">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Floating Icon badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-md text-navy">
                    <prog.icon className={`h-5 w-5 ${prog.colorClass}`} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between text-left space-y-5">
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-ink/50 block">
                      {prog.tag}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-navy group-hover:text-gold transition-colors leading-tight">
                      {prog.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-sans">
                      {prog.teaser}
                    </p>
                  </div>

                  <Link
                    href={prog.path}
                    className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:underline focus-ring rounded p-1 self-start ${prog.colorClass}`}
                  >
                    View dedicated programme details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Closing CTA Section */}
      <section className="bg-cream/15 border-t border-cream py-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy leading-tight">
            Know a leader who should be in the room next time?
          </h2>
          <p className="text-sm text-ink/75 max-w-xl mx-auto leading-relaxed">
            Help us expand our engagement. Nominate an academic educator, a security officer, a traditional ruler, or partner to fund a programme.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact?type=nominate"
              className="inline-flex items-center gap-2 rounded bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-deep focus-ring transition-all"
            >
              <UserCheck className="h-4 w-4" />
              Nominate a Participant
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 rounded border border-cream bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy hover:bg-cream/40 focus-ring transition-all"
            >
              <HeartHandshake className="h-4 w-4" />
              Partner With a Programme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
