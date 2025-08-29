import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <div className="rounded-xl border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold">{"Let's Connect"}</h3>
      <p className="mt-2 text-sm text-muted-foreground">Ready to start a conversation? Here's how you can reach me.</p>

      <ul className="mt-5 space-y-3">
        {/* Email */}
        <li>
          <a
            href="mailto:Subhadippatra789@gmail.com"
            className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/10"
            aria-label="Email Subhadip"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-pink-500 text-white">
              <Mail className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-medium">Email</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground">
                Subhadippatra789@gmail.com
              </div>
            </div>
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/subhadip6666"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/10"
            aria-label="Open Subhadip's GitHub profile"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-700 text-white">
              <Github className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground">subhadip6666</div>
            </div>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/subhadip-patra-004532325/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/10"
            aria-label="Open Subhadip's LinkedIn profile"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md bg-blue-600 text-white">
              <Linkedin className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground">subhadip-patra-004532325</div>
            </div>
          </a>
        </li>

        {/* Location */}
        <li>
          <div className="flex items-center gap-3 rounded-lg p-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-green-600 text-white">
              <MapPin className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-medium">Location</div>
              <div className="text-sm text-muted-foreground">West Bengal, India</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
