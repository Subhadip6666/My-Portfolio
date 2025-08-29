"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import type { MouseEvent } from "react"

export function Hero() {
  const scrollToHash = (hash: string, e?: MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault()
    if (!hash || hash === "#") return
    const target = document.querySelector(hash) as HTMLElement | null
    if (!target) return
    const header = document.getElementById("site-header")
    const offset = (header?.getBoundingClientRect().height ?? 0) + 8
    const y = window.scrollY + target.getBoundingClientRect().top - offset
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <section className="container max-w-5xl mx-auto px-4 pt-10 md:pt-16 pb-8">
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <Reveal variant="pop">
            <p className="text-sm font-medium text-primary">Hello, I’m</p>
          </Reveal>
          <Reveal variant="pop" delay={60}>
            <h1 className="text-3xl md:text-5xl font-semibold text-balance text-rainbow">SUBHADIP PATRA</h1>
          </Reveal>
          <Reveal variant="pop" delay={120}>
            <p className="text-muted-foreground leading-relaxed">
              2nd-year B.Tech student in Computer Science & Engineering (AI & ML) at MCKV Institute of Engineering. I
              build projects to learn, and I’m excited about applying AI to real-world problems.
            </p>
          </Reveal>
          <Reveal variant="pop" delay={180}>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="btn-rainbow border-0">
                <a href="#projects" className="group" onClick={(e) => scrollToHash("#projects", e)}>
                  View Projects{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="gradient-border bg-transparent">
                <a href="#contact" className="text-rainbow-btn" onClick={(e) => scrollToHash("#contact", e)}>
                  Contact
                </a>
              </Button>
              <Button asChild variant="outline" className="gradient-border bg-transparent">
                <a
                  href="https://www.linkedin.com/in/subhadip-patra-004532325/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="text-rainbow-btn"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal className="order-first md:order-last" delay={120} variant="pop">
          <div className="relative w-full rounded-xl border p-6 bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-medium">Quick facts</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> B.Tech CSE (AI & ML), Year 2
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Interests: AI, ML, Web Dev
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Hobby: Drawing
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
