import { Github, Linkedin, Mail, ArrowRight, Award, Briefcase, Code2 } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/portfolio/reveal"

import { Button } from "@/components/ui/button"

import { Hero } from "@/components/portfolio/hero"
import { SectionHeader } from "@/components/portfolio/section-header"
import { SkillsGrid } from "@/components/portfolio/skills-grid"
import { ProjectsGrid } from "@/components/portfolio/projects-grid"
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline"
import { Achievements } from "@/components/portfolio/achievements"
import { ContactSection } from "@/components/portfolio/contact-section"
import { HeaderNav } from "@/components/portfolio/header-nav"
import { Footer } from "@/components/portfolio/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeaderNav />
      <Hero />

      {/* About */}
      <section id="about" className="container max-w-5xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-32">
        <SectionHeader
          eyebrow="About Me"
          title="Student • AI & ML Enthusiast"
          icon={<Code2 className="h-5 w-5 text-primary" aria-hidden />}
        />
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <Reveal className="rounded-xl border p-6 bg-card">
            <h3 className="text-lg font-medium">Key Facts</h3>
            <ul className="mt-3 grid gap-3">
              <li className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" /> 2nd-year B.Tech (AI & ML)
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" /> Interests: AI, ML, Web Dev
              </li>
              <li className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" /> Hobby: Drawing
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> Subhadippatra789@gmail.com
              </li>
            </ul>
          </Reveal>

          <Reveal className="space-y-4" delay={120}>
            <p className="leading-relaxed text-muted-foreground">
              I’m SUBHADIP PATRA, a 2nd-year B.Tech student in Computer Science & Engineering specializing in AI & ML at
              MCKV Institute of Engineering. I enjoy learning by building, exploring algorithms, and crafting clean,
              accessible interfaces.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://github.com/subhadip6666"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/subhadip-patra-004532325/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container max-w-5xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-32">
        <SectionHeader eyebrow="Skills" title="What I’m learning and using" />
        <Reveal>
          <div className="space-y-8">
            <SkillsGrid />
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="projects" className="container max-w-5xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-32">
        <SectionHeader eyebrow="Projects" title="Selected work" />
        <Reveal>
          <ProjectsGrid />
        </Reveal>
      </section>

      {/* Experience */}
      <section id="experience" className="container max-w-5xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-32">
        <SectionHeader eyebrow="Experience" title="Education & activities" />
        <Reveal>
          <ExperienceTimeline />
        </Reveal>
      </section>

      {/* Achievements */}
      <section id="achievements" className="container max-w-5xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-32">
        <SectionHeader eyebrow="Achievements" title="Milestones I'm proud of" />
        <Reveal>
          <Achievements />
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="container max-w-5xl mx-auto px-4 py-16 scroll-mt-28 md:scroll-mt-32">
        <SectionHeader eyebrow="Contact" title="Let’s build something" />
        <Reveal>
          <ContactSection />
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
