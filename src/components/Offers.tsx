import Link from 'next/link'

export type Offer = {
  slug: string
  title: string
  summary: string
  deliverables: string[]
  price: string
  eta: string
  cta: string
}

export default function Offers({ items }: { items: Offer[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((o) => (
        <div key={o.slug} className="rounded-2xl border p-6 space-y-3">
          <h3 className="font-semibold text-lg">{o.title}</h3>
          <p className="text-sm text-zinc-600">{o.summary}</p>
          <ul className="text-sm list-disc ml-5 space-y-1">
            {o.deliverables.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <div className="text-sm text-zinc-700"><span className="font-medium">Price:</span> {o.price}</div>
          <div className="text-sm text-zinc-700"><span className="font-medium">ETA:</span> {o.eta}</div>
          <Link href={`/contact?offer=${o.slug}`} className="inline-block rounded-xl px-4 py-2 border font-medium">
            {o.cta}
          </Link>
        </div>
      ))}
    </div>
  )
}
