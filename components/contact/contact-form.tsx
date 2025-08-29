"use client"

import type * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type Status = { state: "idle" } | { state: "submitting" } | { state: "success" } | { state: "error"; message: string }

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" })
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // honeypot (hidden)
    company: "",
  })

  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    // simple client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: "error", message: "Please fill in name, email, and message." })
      return
    }
    // honeypot: bots will often fill this
    if (form.company) {
      setStatus({ state: "success" })
      return
    }

    setStatus({ state: "submitting" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        const msg = data?.message || "Failed to send your message. You can email me directly using the button below."
        setStatus({ state: "error", message: msg })
        return
      }

      setStatus({ state: "success" })
      setForm({ name: "", email: "", subject: "", message: "", company: "" })
    } catch (err: any) {
      setStatus({
        state: "error",
        message: "Something went wrong. You can email me directly using the button below.",
      })
    }
  }

  const mailtoHref = () => {
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "your@email.example"
    const subject = encodeURIComponent(form.subject || `Message from ${form.name || "Portfolio"}`)
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)
    return `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="company"
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
        value={form.company}
        onChange={onChange("company")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" placeholder="John Doe" value={form.name} onChange={onChange("name")} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={onChange("email")}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="Let's work together!" value={form.subject} onChange={onChange("subject")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell me about your project or just say hello..."
          value={form.message}
          onChange={onChange("message")}
          required
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status.state === "submitting"} className="w-full sm:w-auto">
          {status.state === "submitting" ? "Sending..." : "Send Message"}
        </Button>

        {status.state === "error" && (
          <a href={mailtoHref()} className="text-sm text-primary underline underline-offset-4">
            Or email me directly
          </a>
        )}
      </div>

      {status.state === "error" && <p className="text-sm text-destructive">{status.message}</p>}
      {status.state === "success" && <p className="text-sm text-emerald-400">Thanks! Your message was sent.</p>}
    </form>
  )
}
