import type { NextRequest } from "next/server"
import { streamText } from "ai"
import { google } from "@ai-sdk/google"

type ChatMessage = { role: "user" | "assistant" | "system"; content: string }

export async function POST(req: NextRequest) {
  try {
    // Ensure Gemini key is configured
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return new Response(
        JSON.stringify({
          error: "Gemini not configured. Add GOOGLE_GENERATIVE_AI_API_KEY in Project Settings and try again.",
        }),
        { status: 500, headers: { "content-type": "application/json" } },
      )
    }

    const body = await req.json().catch(() => ({}) as any)
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : []

    const result = await streamText({
      model: google("gemini-1.5-flash"),
      system:
        "You are a helpful portfolio assistant. Keep responses concise and friendly. If asked about the site, answer based on general portfolio conventions.",
      messages,
    })

    return result.toAIStreamResponse()
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Unknown error in /api/chat" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    })
  }
}
