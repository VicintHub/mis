import { MapPin, Mail, Globe, Facebook, Instagram, Youtube, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the MIV Strategic Initiative team. Ask questions, submit nominations, or enquire about partnership opportunities.",
};

const faqs = [
  {
    q: "Is MIV Strategic Initiative a political organisation?",
    a: "No. Our programmes are deliberately positioned as purpose-driven and policy-free. We exist to strengthen leadership and institutional legacy, not to advance any partisan or political agenda.",
  },
  {
    q: "Must I be Christian to attend or partner with a programme?",
    a: "No. While we are a Christian ministry expression at our foundation, our programmes are open to leaders, educators, traditional rulers, and officers of any faith background.",
  },
  {
    q: "How is the Initiative funded?",
    a: "Through parent ministry funding, the voluntary giving of our members, and a growing base of corporate, legacy, and institutional partners.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-navy py-20 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold block">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            Whether you&apos;re exploring a partnership, nominating a participant, or booking a speaking engagement — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Form Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & FAQ */}
            <div className="lg:col-span-5 space-y-12 text-left">
              {/* Coordinates */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-navy">Contact Coordinates</h2>
                <div className="h-0.5 w-12 bg-gold/60 mt-2" />
                
                <ul className="space-y-5 text-sm text-ink/80 leading-relaxed font-sans">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 font-bold block mb-1">Office Address</span>
                      <span>Leadership and Mission Centre, Olororo Junction, Ojoo, Ibadan, Oyo State, Nigeria</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 font-bold block mb-1">Email Enquiries</span>
                      <a href="mailto:info@mivstrategicinitiative.com.ng" className="hover:text-gold transition-colors focus:outline-none focus:underline font-semibold text-navy">
                        info@mivstrategicinitiative.com.ng
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 font-bold block mb-1">Parent Ministry Site</span>
                      <a href="https://www.menofissacharvision.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors focus:outline-none focus:underline font-semibold text-navy">
                        menofissacharvision.com
                      </a>
                    </div>
                  </li>
                </ul>

                {/* Social links */}
                <div className="space-y-3 pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink/50 font-bold block">Social Handles</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/mivstrategicinitiative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cream bg-cream/10 px-4 py-2 text-xs font-semibold text-navy hover:bg-navy hover:text-white transition-all focus-ring"
                    >
                      <Facebook className="h-3.5 w-3.5" />
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/mivstrategicinitiative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cream bg-cream/10 px-4 py-2 text-xs font-semibold text-navy hover:bg-navy hover:text-white transition-all focus-ring"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      Instagram
                    </a>
                    <a
                      href="https://www.youtube.com/@mivstrategicinitiative"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cream bg-cream/10 px-4 py-2 text-xs font-semibold text-navy hover:bg-navy hover:text-white transition-all focus-ring"
                    >
                      <Youtube className="h-3.5 w-3.5" />
                      YouTube
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-navy">Mini-FAQ</h2>
                <div className="h-0.5 w-12 bg-gold/60 mt-2" />
                <div className="space-y-6 font-sans">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="font-serif text-base font-bold text-navy flex items-start gap-2">
                        <HelpCircle className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                        <span>{faq.q}</span>
                      </h3>
                      <p className="text-xs text-ink/75 leading-relaxed pl-6">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Contact Form Component */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
