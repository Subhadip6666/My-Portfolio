"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "fadeUp" | "pop"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // respect reduced motion
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduce) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const stateClasses =
    variant === "pop"
      ? visible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-1 scale-[0.98]"
      : visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("transition-all duration-700 ease-out will-change-transform", stateClasses, className)}
    >
      {children}
    </div>
  )
}
