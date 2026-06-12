import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Heart, Clock } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            Licenciada en Psicología · Posgrado en Ciencias de la Educación Familiar
          </span>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Asesoría psicológica para niños, adolescentes y adultos
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Acompañamiento cercano y profesional en aprendizaje, orientación
            educativa, emociones, pareja y familia. Un espacio seguro para cada
            etapa de la vida.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
              nativeButton={false}
              render={<a href="#servicios">Conocer servicios</a>}
            />
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
            <div>
              <dt className="text-sm text-muted-foreground">Atención</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">Niños y adultos</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Sede</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">Cruz Roja</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Días</dt>
              <dd className="font-serif text-2xl font-semibold text-foreground">Lun a Mié</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/about.png"
              alt="Retrato de la psicóloga Blanca Margarita Jasso Cárdenas"
              width={640}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden max-w-[220px] rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="text-sm leading-relaxed text-card-foreground">
              {'"Cada persona y cada familia merece ser escuchada y acompañada."'}
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-border/60 bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Confidencialidad", text: "Tu privacidad protegida en todo momento." },
            { icon: Heart, title: "Trato cercano", text: "Escucha sin juicios, a tu ritmo." },
            { icon: Clock, title: "Horarios flexibles", text: "Sesiones que se adaptan a tu vida." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
