import { Award } from "lucide-react"

export function Achievements() {
  const items = [
    { title: "Consistent Learner", detail: "Actively practicing coding and building projects." },
    { title: "Art & Drawing", detail: "Hobbyist artist—keeps me creative and focused." },
  ]
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((a) => (
        <li
          key={a.title}
          className="rounded-lg border p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-primary/25 flex items-start gap-3"
        >
          <Award className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <h4 className="font-medium">{a.title}</h4>
            <p className="text-sm text-muted-foreground">{a.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
