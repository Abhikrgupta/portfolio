import { experience } from "@/lib/experience";

export default function ExperiencePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-foreground mb-12">
        Experience
      </h1>

      <div className="space-y-14">
        {experience.map((entry) => (
          <div key={entry.company} className="border-l border-border pl-6">
            <p className="font-mono text-xs text-accent mb-1">
              {entry.duration}
            </p>
            <h2 className="text-lg font-medium text-foreground">
              {entry.role} · {entry.company}
            </h2>

            <ul className="mt-4 space-y-2 text-muted text-sm leading-relaxed list-disc list-inside">
              {entry.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-1 rounded bg-surface border border-border text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
