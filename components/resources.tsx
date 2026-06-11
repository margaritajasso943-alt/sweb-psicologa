import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const posts = [
  {
    image: "/images/blog-1.png",
    category: "Bienestar",
    title: "5 hábitos para calmar la ansiedad por las mañanas",
    excerpt:
      "Pequeños rituales que ayudan a tu sistema nervioso a empezar el día con más serenidad.",
    readTime: "4 min de lectura",
  },
  {
    image: "/images/blog-2.png",
    category: "Mindfulness",
    title: "Cómo practicar la atención plena sin meditar horas",
    excerpt:
      "La presencia se entrena en lo cotidiano. Te comparto formas sencillas de comenzar hoy.",
    readTime: "6 min de lectura",
  },
  {
    image: "/images/blog-3.png",
    category: "Relaciones",
    title: "Poner límites sin sentir culpa: una guía práctica",
    excerpt:
      "Aprende a comunicar lo que necesitas cuidando tus vínculos y también tu energía.",
    readTime: "5 min de lectura",
  },
]

export function Resources() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Recursos
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Lecturas para tu bienestar emocional
          </h2>
        </div>
        <a
          href="#recursos"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Ver todos los artículos
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="group flex flex-col">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={480}
                height={320}
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center gap-3 text-xs">
              <span className="rounded-full bg-accent px-3 py-1 font-medium text-accent-foreground">
                {post.category}
              </span>
              <span className="text-muted-foreground">{post.readTime}</span>
            </div>
            <h3 className="mt-3 text-balance font-serif text-xl font-semibold leading-snug text-foreground">
              {post.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
