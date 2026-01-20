import { resumeData } from "@/data/resume";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  ArrowUpRight, 
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Code2,
  Terminal,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Typewriter from "@/components/ui/Typewriter";
import CodeWindow from "@/components/ui/CodeWindow";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="container-resume">
      
      {/* HEADER */}
      <header className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card-hover)]">
          <img 
            src={resumeData.avatarUrl} 
            alt={resumeData.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-2">
            {resumeData.name}
          </h1>
          <p className="text-lg text-[var(--muted)] font-medium mb-4 flex items-center gap-2">
            <Terminal size={18} />
            {resumeData.title}
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <MapPin size={14} />
            {resumeData.contact.address.split(',').slice(-2).join(', ')}
          </div>
        </div>

        <div className="flex gap-3">
          <a 
            href={`mailto:${resumeData.contact.email}`} 
            className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors text-[var(--muted)] hover:text-[var(--foreground)]"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href={`https://${resumeData.contact.website}`} 
            target="_blank" 
            className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors text-[var(--muted)] hover:text-[var(--foreground)]"
            title="Website"
          >
            <Globe size={20} />
          </a>
          <a 
            href="https://github.com/dxord" 
            className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors text-[var(--muted)] hover:text-[var(--foreground)]"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://id.linkedin.com/in/muhammad-naufal-ammar-654bb4168" 
            className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--card-hover)] transition-colors text-[var(--muted)] hover:text-[var(--foreground)]"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </header>

      {/* ABOUT */}
      <ScrollReveal delay={100} className="mb-16">
        <h2 className="section-title">
          About
        </h2>
        <CodeWindow title="about.ts">
          <p className="text-[#9cdcfe]">
            <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">about</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ce9178]">`</span>
          </p>
          <div className="pl-4 text-[#ce9178] leading-relaxed">
            <Typewriter text={resumeData.about} speed={24} cursor={false} startDelay={500} />
          </div>
          <p className="text-[#ce9178]">`</p>
        </CodeWindow>
      </ScrollReveal>

      {/* EXPERIENCE */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className="section-title">
            Work Experience
          </h2>
        </ScrollReveal>
        <div className="space-y-10">
          {resumeData.experience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative border-l-2 border-[var(--border)] pl-6 md:pl-8 py-1">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="font-semibold text-[var(--foreground)] text-lg">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-sm text-[var(--muted)]">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-[var(--muted)]">
                  <span className="font-medium text-[var(--foreground)]">{exp.role}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  {exp.type && (
                    <>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-full bg-[var(--card-hover)] text-xs border border-[var(--border)]">
                        {exp.type}
                      </span>
                    </>
                  )}
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-[var(--muted)] text-sm leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className="section-title">
            Education
          </h2>
        </ScrollReveal>
        <div className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-lg border border-[var(--border)] hover:border-[var(--muted)] transition-colors">
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">{edu.institution}</h3>
                  <p className="text-sm text-[var(--muted)]">{edu.degree}</p>
                </div>
                <span className="font-mono text-sm text-[var(--muted)] mt-2 sm:mt-0">{edu.period}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-16">
        <ScrollReveal>
          <h2 className="section-title">
            Skills
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 rounded-md bg-[var(--card-hover)] text-sm font-medium text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted)] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* PROJECTS */}
      <section>
        <ScrollReveal>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--foreground)] tracking-tight">
              Projects
            </h2>
            <a 
              href="https://naufalammarwork.github.io/aboutme/static/media/Portofolio_Naufal.358898adf2667b3ea317.pdf" 
              target="_blank"
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--card-hover)] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-2"
            >
              More Projects
              <ExternalLink size={12} />
            </a>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeData.portfolio.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div 
                className="group p-5 rounded-lg border border-[var(--border)] hover:bg-[var(--card-hover)] transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-[var(--foreground)] group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  {project.url && (
                    <a href={project.url} target="_blank" className="text-[var(--muted)] hover:text-[var(--foreground)]">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                
                <p className="text-sm text-[var(--muted)] mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-mono text-[var(--muted)] bg-[var(--background)] px-2 py-1 rounded border border-[var(--border)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.appStoreUrl || project.playStoreUrl) && (
                  <div className="mt-4 flex gap-3 pt-4 border-t border-[var(--border)] border-dashed">
                    {project.appStoreUrl && (
                      <a 
                        href={project.appStoreUrl} 
                        target="_blank"
                        className="inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.08-3.11-1.06.05-2.31.71-3.06 1.48-.69.72-1.28 1.91-1.12 3.06 1.19.09 2.4-.6 3.1-1.43z"/>
                        </svg>
                        App Store
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a 
                        href={project.playStoreUrl} 
                        target="_blank"
                        className="inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Play Store
                      </a>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <footer className="mt-20 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} {resumeData.name}</p>
      </footer>
    </main>
  );
}
