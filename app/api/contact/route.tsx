import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name = "", email = "", subject = "", message = "" } = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 })
    }

    const TO = process.env.CONTACT_TO_EMAIL
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    // If Resend is configured, send an email server-side
    if (TO && RESEND_API_KEY) {
      // Dynamically import to avoid bundling if not configured
      const { Resend } = await import("resend")
      const resend = new Resend(RESEND_API_KEY)

      const html = `
        <h2>New message from portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace;">${escapeHtml(message)}</pre>
      `

      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [TO],
        subject: subject || `Message from ${name}`,
        html,
        reply_to: email,
      })

      if (error) {
        return NextResponse.json({ message: "Email provider error. Please try the mailto fallback." }, { status: 502 })
      }

      return NextResponse.json({ ok: true })
    }

    // If not configured, indicate to client to show mailto fallback
    return NextResponse.json(
      {
        message: "Email sending is not configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL.",
      },
      { status: 503 },
    )
  } catch (err: any) {
    return NextResponse.json({ message: "Unexpected error. Please try again later." }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
