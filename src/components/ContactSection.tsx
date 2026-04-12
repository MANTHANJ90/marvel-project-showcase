import { Mail, Phone, Send } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In production, connect to EmailJS or backend API
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <SectionReveal>
        <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight md:text-4xl">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="mx-auto mb-14 max-w-lg text-center text-muted-foreground">
          Have a project in mind or want to collaborate? Let's connect!
        </p>
      </SectionReveal>

      <div className="grid gap-8 md:grid-cols-5">
        {/* Contact Info */}
        <SectionReveal delay={0.1} className="md:col-span-2">
          <div className="space-y-4">
            <motion.a
              whileHover={{ x: 4 }}
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-4 glass glow-border rounded-xl p-4 transition-colors hover:border-primary/30"
            >
              <div className="rounded-lg bg-primary/10 p-2.5">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">{resumeData.email}</p>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ x: 4 }}
              href={`tel:${resumeData.phone}`}
              className="flex items-center gap-4 glass glow-border rounded-xl p-4 transition-colors hover:border-primary/30"
            >
              <div className="rounded-lg bg-primary/10 p-2.5">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium text-foreground">{resumeData.phone}</p>
              </div>
            </motion.a>
          </div>
        </SectionReveal>

        {/* Form */}
        <SectionReveal delay={0.2} className="md:col-span-3">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass glow-border rounded-xl p-8 text-center"
            >
              <div className="mb-4 text-4xl">🎉</div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass glow-border rounded-xl p-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-glow px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_25px_rgba(100,140,255,0.3)]"
              >
                Send Message <Send size={14} />
              </motion.button>
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
