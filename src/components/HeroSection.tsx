import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import TypingAnimation from "@/components/TypingAnimation";
import profileImg from "@/assets/profile.jpeg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative animate-[float_6s_ease-in-out_infinite]">
            {/* Orbit rings */}
            <div className="absolute -inset-8 rounded-full border border-primary/15 animate-[spin_25s_linear_infinite]">
              <div className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-primary/50 shadow-[0_0_12px_3px_rgba(100,140,255,0.4)]" />
            </div>
            <div className="absolute -inset-4 rounded-full border border-accent/10 animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute top-1/2 -right-1 h-2 w-2 rounded-full bg-accent/40 shadow-[0_0_10px_3px_rgba(160,100,255,0.3)]" />
            </div>
            {/* Glow */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/20 via-accent/15 to-primary/5 blur-xl animate-[glow-pulse_4s_ease-in-out_infinite]" />
            <img
              src={profileImg}
              alt={resumeData.name}
              className="relative h-36 w-36 rounded-full border-2 border-primary/30 object-cover shadow-[0_0_50px_10px_rgba(100,140,255,0.1)] md:h-44 md:w-44"
            />
          </div>
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground"
        >
          <MapPin size={14} className="text-primary" />
          {resumeData.location}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-4 font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Hi, I'm{" "}
          <span className="text-gradient">{resumeData.name.split(" ")[0]}</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-3 h-8"
        >
          <TypingAnimation words={resumeData.typingRoles} />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {resumeData.summary}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-glow px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(100,140,255,0.3)] hover:scale-105"
          >
            View Projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/Manthan_Jain_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            <Download size={16} /> Resume
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-surface-hover"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="rounded-full glass p-3 text-muted-foreground transition-colors hover:text-primary">
            <Github size={20} />
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full glass p-3 text-muted-foreground transition-colors hover:text-primary">
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-muted-foreground/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-primary/60"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
