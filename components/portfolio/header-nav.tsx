"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { useEffect } from "react"

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export function HeaderNav() {
  const scrollToHash = (hash: string) => {
    if (!hash || hash === "#") return
    const target = document.querySelector(hash) as HTMLElement | null
    if (!target) return
    const header = document.getElementById("site-header")
    const offset = (header?.getBoundingClientRect().height ?? 0) + 8 // add a small cushion
    const y = window.scrollY + target.getBoundingClientRect().top - offset
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash), 0)
    }
  }, [])

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
    >
      <div className="container max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          SP
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(l.href)
              }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/subhadip6666"
            className="text-muted-foreground hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/subhadip-patra-004532325/"
            className="text-muted-foreground hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}
