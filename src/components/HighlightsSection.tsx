import { CheckCircle } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionReveal from "@/components/SectionReveal";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="mx-auto max-w-4xl px-6 py-24">
      <SectionReveal>
        <div className="sticky top-16 z-20 -mx-6 bg-background/85 px-6 py-4 backdrop-blur-md">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Key <span className="text-gradient">Highlights</span>
          </h2>
        </div>
      </SectionReveal>

      <ul className="mt-8 space-y-3">
        {resumeData.keyHighlights.map((highlight, i) => (
          <SectionReveal key={i} delay={i * 0.06}>
            <li className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/60 px-5 py-4">
              <CheckCircle size={18} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground/85">{highlight}</span>
            </li>
          </SectionReveal>
        ))}
      </ul>
    </section>
  );
}
