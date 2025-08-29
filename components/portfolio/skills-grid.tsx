import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { name: "Python", level: "Learning" },
  { name: "C / C++", level: "Foundations" },
  { name: "HTML & CSS", level: "Good" },
  { name: "JavaScript", level: "Learning" },
  { name: "Tailwind CSS", level: "Learning" },
  { name: "Git & GitHub", level: "Good" },
  { name: "Basics of ML", level: "Learning" },
  { name: "Problem Solving", level: "Continuous" },
]

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {skills.map((s) => (
        <Card key={s.name} className="transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{s.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{s.level}</CardContent>
        </Card>
      ))}
    </div>
  )
}
