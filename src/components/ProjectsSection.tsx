import { ExternalLink } from "lucide-react";
import { resumeData } from "@/data/resume";
import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";

export default function ProjectsSection({ showAll = false }: { showAll?: boolean }) {
  const projects = showAll ? resumeData.projects : resumeData.projects.slice(0, 4);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <div className="sticky top-16 z-10 bg-background/80 backdrop-blur-md py-4 -mx-6 px-6">
          <h2 className="mb-2 text-center font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto max-w-lg text-center text-muted-foreground">
            A selection of things I've built — from enterprise systems to full-stack apps.
          </p>
        </div>
      </SectionReveal>
      <div className="mt-8" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <SectionReveal key={project.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass glow-border glow-border-hover group flex h-full flex-col justify-between rounded-xl p-6"
            >
              <div>
                <div className="mb-3 text-3xl">{project.emoji}</div>
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{project.name}</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>

                {"tech" in project && project.tech && (
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {(project.tech as string).split(", ").map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                )}
              </div>

              <div className="flex gap-2">
                {"demo" in project && project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-glow px-4 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(100,140,255,0.25)]"
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="inline-flex flex-1 items-center justify-center rounded-lg border border-border px-4 py-2.5 text-xs text-muted-foreground">
                    Enterprise / Private
                  </span>
                )}
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
