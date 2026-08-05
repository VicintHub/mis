"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    interest: "Partnership",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");

    // Simulate endpoint post request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        interest: "Partnership",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full rounded-xl border border-cream bg-cream/10 p-6 md:p-8 shadow-sm">
      {status === "success" && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-white/95 p-6 text-center animate-fade-in">
          <CheckCircle2 className="h-14 w-14 text-emerald-600 mb-4" />
          <h3 className="font-serif text-2xl font-bold text-navy mb-2">Message Sent</h3>
          <p className="text-sm text-ink/80 max-w-md leading-relaxed mb-6">
            Thank you for reaching out to MIV Strategic Initiative. Your inquiry has been received, and our team will get in touch with you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="rounded-full bg-navy px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-navy-deep focus-ring"
          >
            Send Another Message
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <h3 className="font-serif text-xl font-semibold text-navy border-b border-cream pb-3">Send Us a Message</h3>
        
        {status === "error" && (
          <div className="flex items-center gap-2 rounded-md bg-crimson/5 p-3 text-sm text-crimson border border-crimson/10">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <p>An error occurred. Please try again later.</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/75">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              className={`rounded border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
                validationErrors.name ? "border-crimson" : "border-cream bg-white"
              }`}
              placeholder="e.g. Prof. Dele Alabi"
            />
            {validationErrors.name && (
              <span className="text-xs text-crimson mt-0.5">{validationErrors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/75">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              className={`rounded border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
                validationErrors.email ? "border-crimson" : "border-cream bg-white"
              }`}
              placeholder="e.g. dele.alabi@unibadan.edu.ng"
            />
            {validationErrors.email && (
              <span className="text-xs text-crimson mt-0.5">{validationErrors.email}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/75">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="rounded border border-cream bg-white px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
              placeholder="e.g. +234 803 123 4567"
            />
          </div>

          {/* Organisation */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="organisation" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/75">
              Organisation / Institution
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="rounded border border-cream bg-white px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
              placeholder="e.g. University of Ibadan"
            />
          </div>
        </div>

        {/* Interested In Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="interest" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/75">
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="rounded border border-cream bg-white px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold"
          >
            <option value="Partnership">Partnership Opportunities</option>
            <option value="Nominating a Participant">Nominating a Participant</option>
            <option value="Speaking Engagement">Speaking Engagement</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/75">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={status === "submitting"}
            rows={5}
            className={`rounded border px-4 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold ${
              validationErrors.message ? "border-crimson" : "border-cream bg-white"
            }`}
            placeholder="Please write your detailed message or partnership proposal here..."
          />
          {validationErrors.message && (
            <span className="text-xs text-crimson mt-0.5">{validationErrors.message}</span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded bg-navy py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow transition-all hover:bg-navy-deep hover:shadow-md disabled:bg-navy/70 focus-ring cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
