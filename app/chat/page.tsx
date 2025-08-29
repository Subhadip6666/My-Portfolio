import ChatBot from "@/components/chat/chat-bot"

export default function Page() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <section className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-pretty">Chat</h1>
          <p className="text-sm text-foreground/70">
            This chatbot is powered by Google Gemini. Add GOOGLE_GENERATIVE_AI_API_KEY in Project Settings to enable it.
          </p>
        </header>
        <ChatBot />
      </section>
    </main>
  )
}
