import { Baby, GraduationCap, Users } from "lucide-react"

const serviceGroups = [
  {
    icon: Baby,
    audience: "Niños",
    title: "Asesoría psicológica para niños",
    items: [
      "Lento aprendizaje",
      "Problemas de lecto-escritura",
      "Hábitos de estudio",
      "Problemas de actitud",
    ],
  },
  {
    icon: GraduationCap,
    audience: "Adolescentes",
    title: "Asesoría psicológica para adolescentes",
    items: [
      "Hábitos de estudio",
      "Orientación educativa",
      "Toma de decisiones",
      "Problemas personales",
    ],
  },
  {
    icon: Users,
    audience: "Adultos",
    title: "Asesoría psicológica para adultos",
    items: [
      "Pareja y familia",
      "Emociones",
      "Duelos, separaciones y divorcio",
      "Desarrollo humano",
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Servicios
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Acompañamiento para cada etapa de la vida
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Atención psicológica personalizada para niños, adolescentes y adultos,
          desde un enfoque cálido, profesional y basado en la educación familiar.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {serviceGroups.map((group) => (
          <article
            key={group.audience}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <group.icon className="size-6" aria-hidden="true" />
            </span>
            <span className="mt-5 text-sm font-medium uppercase tracking-widest text-primary">
              {group.audience}
            </span>
            <h3 className="mt-1 font-serif text-xl font-semibold text-card-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
