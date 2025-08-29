"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, error } = useChat()

  return (
    <Card className="w-full max-w-2xl mx-auto bg-background border border-border">
      <CardHeader>
        <CardTitle className="text-pretty">Chat with me</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div
          className="h-[420px] overflow-y-auto rounded-md border border-border/50 p-3 bg-black/40"
          aria-live="polite"
        >
          {messages.length === 0 ? (
            <div className="text-sm text-foreground/70">
              Ask anything about my work, skills, or projects. Your messages are sent securely to Google Gemini.
              <span className="block mt-2 opacity-70">
                Required: set GOOGLE_GENERATIVE_AI_API_KEY in Project Settings.
              </span>
            </div>
          ) : (
            <ul className="space-y-3">
              {messages.map((m) => (
                <li
                  key={m.id}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm",
                    m.role === "user"
                      ? "bg-red-600/10 border border-red-600/30"
                      : "bg-violet-600/10 border border-violet-600/30",
                  )}
                >
                  <span className="block text-xs mb-1 opacity-70">{m.role === "user" ? "You" : "Assistant"}</span>
                  <div>{m.content}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {error ? (
          <p className="text-sm text-red-500">
            {error.message || "There was an error. Ensure an API key is set in Project Settings."}
          </p>
        ) : null}
      </CardContent>

      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full flex items-end gap-2">
          <Textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="min-h-[56px] bg-black/40"
            disabled={isLoading}
            aria-label="Chat message"
          />
          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </Button>
            {isLoading ? (
              <Button type="button" variant="outline" onClick={stop}>
                Stop
              </Button>
            ) : null}
          </div>
        </form>
      </CardFooter>
    </Card>
  )
}
