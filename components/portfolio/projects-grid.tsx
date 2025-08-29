import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const projects = [
  {
    title: "AI Study Notes (Concept)",
    desc: "Generate concise notes from lectures/articles with simple tagging.",
    tags: ["Next.js", "AI SDK", "Tailwind"],
    href: "#",
  },
  {
    title: "Portfolio Website",
    desc: "This site! Built with Next.js and shadcn/ui. Clean sections and smooth scroll.",
    tags: ["Next.js", "shadcn/ui", "Tailwind"],
    href: "#",
  },
  {
    title: "Drawing Gallery",
    desc: "A simple gallery to showcase sketches and drawings.",
    tags: ["HTML", "CSS", "JS"],
    href: "#",
  },
]

export function ProjectsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <Card
          key={p.title}
          /* add lift + shine hover animations and keep subtle ring on hover */
          className="group card-animated shine-on-hover hover:ring-1 hover:ring-primary/25 transition-colors"
        >
          <CardHeader>
            <CardTitle className="text-lg">{p.title}</CardTitle>
            <CardDescription>{p.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  /* tiny float on hover for tags */
                  className="inline-flex items-center rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.href && (
              <Link
                href={p.href}
                /* animated underline instead of generic underline */
                className="mt-3 inline-block text-sm text-primary link-underline"
              >
                View repo/demo →
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
