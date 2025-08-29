export function ExperienceTimeline() {
  const items = [
    {
      title: "B.Tech CSE (AI & ML) — MCKV Institute of Engineering",
      period: "2024 — Present",
      detail: "Core courses: Programming, Data Structures, Mathematics, AI & ML foundations, and web technologies.",
    },
    {
      title: "Personal Projects & Learning",
      period: "Ongoing",
      detail: "Building small apps to learn fast. Focused on clean UI, fundamentals, and hands-on practice.",
    },
  ]
  return (
    <ol className="relative border-l border-border pl-6">
      {items.map((it, i) => (
        <li
          key={i}
          className="group mb-8 transition-all duration-200 hover:-translate-y-1 hover:bg-muted/10 rounded-lg p-2"
        >
          <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary group-hover:bg-primary/90 transition-colors" />
          <h3 className="font-medium">{it.title}</h3>
          <p className="text-sm text-muted-foreground">{it.period}</p>
          <p className="mt-2 text-foreground/90">{it.detail}</p>
        </li>
      ))}
    </ol>
  )
}
