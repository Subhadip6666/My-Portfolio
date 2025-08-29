import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact | Send Me a Message",
  description: "Use this form to send me a message directly to my email.",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <section className="rounded-xl border border-border/60 bg-card/40 p-6 md:p-8">
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-semibold text-foreground text-balance">Send Me a Message</h1>
          <p className="text-muted-foreground text-pretty">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <ContactForm />
      </section>
    </main>
  )
}
