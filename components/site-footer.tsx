import { Flower2 } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Recursos", href: "#recursos" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#inicio" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Flower2 className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                Blanca Margarita Jasso
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Licenciada en Psicología con posgrado en Ciencias de la Educación
              Familiar. Asesoría psicológica para niños, adolescentes y adultos.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Enlaces del pie de página">
            <p className="text-sm font-medium text-foreground">Navegación</p>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-foreground">Contacto</p>
            <span className="text-sm text-muted-foreground">Tel. 712 169 8413</span>
            <span className="text-sm text-muted-foreground">Cruz Roja, Tlalpujahua, Michoacán</span>
            <span className="text-sm text-muted-foreground">Lun a Mié · 4:00 a 6:00 pm</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p>Asesoría psicológica · Educación familiar</p>
        </div>
      </div>
    </footer>
  )
}
