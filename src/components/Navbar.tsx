import { Link, useLocation } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { resumeData } from "@/data/resume";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-heading text-lg font-bold tracking-tight text-gradient">
          {"<MJ />"}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Github size={18} />
            </a>
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${resumeData.email}`} className="text-muted-foreground transition-colors hover:text-primary">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground md:hidden">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-2">
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Github size={18} />
                </a>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
