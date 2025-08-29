"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Subhadip Patra. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {/* email */}
          <a
            href="mailto:Subhadippatra789@gmail.com"
            className="text-muted-foreground hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" aria-hidden />
          </a>

          {/* github */}
          <Link
            href="https://github.com/subhadip6666"
            className="text-muted-foreground hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" aria-hidden />
          </Link>

          {/* linkedin */}
          <Link
            href="https://www.linkedin.com/in/subhadip-patra-004532325/"
            className="text-muted-foreground hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  )
}
