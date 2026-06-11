"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "712 169 8413" },
  { icon: MapPin, label: "Ubicación", value: "Cruz Roja, Tlalpujahua, Michoacán" },
  { icon: Clock, label: "Horario", value: "Lunes a miércoles, 4:00 a 6:00 pm" },
]

export function BookingSection() {
  return (
    <section id="reservar" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        
        {/* Columna izquierda */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Reservar cita
          </span>

          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Da el primer paso hoy
          </h2>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            Escríbeme o llámame para agendar tu cita. La atención es presencial
            en la Cruz Roja de Tlalpujahua, Michoacán, de lunes a miércoles de
            4:00 a 6:00 pm.
          </p>

          <ul className="mt-2 space-y-4">
            {contactInfo.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full"
              nativeButton={false}
              render={<a href="tel:7121698413">Llamar ahora</a>}
            />

            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent"
              nativeButton={false}
              render={
                <a
                  href="https://wa.me/527121698413"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              }
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="flex h-full flex-col justify-center">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Un espacio para ti
            </span>

            <h3 className="mt-4 font-serif text-3xl font-semibold text-card-foreground">
              Atención psicológica profesional
            </h3>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Cada proceso es único. Mi objetivo es brindarte un espacio seguro,
              respetuoso y confidencial donde puedas expresar tus emociones,
              fortalecer tus recursos personales y encontrar herramientas para
              afrontar los desafíos de la vida diaria.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Atiendo a niños, adolescentes, adultos, parejas y familias,
              acompañando cada situación con empatía, escucha activa y un
              enfoque profesional orientado al bienestar emocional.
            </p>

            <div className="mt-8 rounded-2xl bg-secondary/50 p-5">
              <p className="italic text-muted-foreground">
                "Cada persona y cada familia merece ser escuchada y acompañada."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}