"use client"

import { useState } from "react"
import { Menu, X, Flower2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Recursos", href: "#recursos" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Flower2 className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Blanca Margarita Jasso
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<a href="#reservar">Reservar cita</a>}
            className="rounded-full"
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              className="mt-2 rounded-full"
            />
          </nav>
        </div>
      )}
    </header>
  )
}
