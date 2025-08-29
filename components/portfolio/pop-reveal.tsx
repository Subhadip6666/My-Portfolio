"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

export default function PopReveal({ children, className, delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // stagger via timeout
            const t = window.setTimeout(() => setShow(true), delayMs)
            // cleanup timeout on unmount
            ;(el as any).__t = t
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      // cleanup any pending timeout
      const t = (ref.current as any)?.__t
      if (t) clearTimeout(t)
    }
  }, [delayMs])

  return (
    <div ref={ref} className={cn("pop-in", show && "in-view", className)}>
      {children}
    </div>
  )
}
