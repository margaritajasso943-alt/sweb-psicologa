import Image from "next/image"
import { Check } from "lucide-react"

const credentials = [
  "Licenciada en Psicología",
  "Posgrado en Ciencias de la Educación Familiar",
  "Atención a niños, adolescentes y adultos",
  "Consulta en Cruz Roja, Tlalpujahua, Michoacán",
]

export function About() {
  return (
    <section id="sobre-mi" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="order-2 md:order-1">
          <div className="relative mx-auto h-[550px] w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-border">
            <Image
              src="/images/margarita_jasso.png"
              alt="Retrato de la psicóloga Blanca Margarita Jasso Cárdenas"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 md:order-2">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Sobre mí
          </span>

          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Hola, soy Blanca Margarita Jasso Cárdenas
          </h2>

          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Soy Licenciada en Psicología con posgrado en Ciencias de la
              Educación Familiar. Acompaño a niños, adolescentes y adultos en
              sus procesos de aprendizaje, orientación educativa y bienestar
              emocional.
            </p>

            <p>
              Mi trabajo se basa en la escucha cercana y el respeto por la
              historia de cada persona y cada familia, para encontrar juntos el
              camino hacia el equilibrio y el desarrollo humano.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}