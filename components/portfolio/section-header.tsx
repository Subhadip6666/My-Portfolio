"use client"

import type { ReactNode } from "react"
import { useTheme } from "next-themes"
import { Reveal } from "@/components/portfolio/reveal"

export function SectionHeader({
  eyebrow,
  title,
  icon,
}: {
  eyebrow?: string
  title: string
  icon?: ReactNode
}) {
  const { theme } = useTheme()
  const primaryColor = theme === "dark" ? "text-white" : "text-primary"

  return (
    <div className="mb-8">
      <Reveal variant="pop" className={`flex items-center gap-2 text-sm font-medium ${primaryColor}`}>
        {icon}
        {eyebrow}
      </Reveal>
      <Reveal variant="pop" delay={80}>
        <h2 className="text-2xl md:text-3xl font-semibold mt-1">{title}</h2>
      </Reveal>
    </div>
  )
}
