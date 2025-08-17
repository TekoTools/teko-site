import Link from 'next/link'

export default function Page() {
  return (
    <div className="space-y-14">
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Automation & AI products that create cashflow
        </h1>
        <p className="text-zinc-600 max-w-3xl mx-auto">
          No calls. Clear deliverables. We build leveraged systems you can plug into your business,
          and we ship fast. Property is our specialty — with its own hub.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/ai" className="rounded-xl px-4 py-2 border font-medium">Explore AI / Automation</Link>
          <Link href="/property" className="rounded-xl px-4 py-2 border font-medium">Property Hub</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'AI / Automation', href: '/ai', desc: 'Hands-off workflows that free time & grow revenue.' },
          { title: 'Property', href: '/property', desc: 'Done-for-you systems for landlords, agents & investors.' },
          { title: 'Holdings', href: '/holdings', desc: 'Our thesis across property, crypto, and equities.' },
        ].map((c) => (
          <Link key={c.title} href={c.href} className="rounded-2xl border p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-zinc-600 mt-2">{c.desc}</p>
          </Link>
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { kpi: '24/7', label: 'systems' },
          { kpi: '→30%', label: 'lead-to-sale lift (typical)' },
          { kpi: '5–10 min', label: 'you spend to get live' },
        ].map((k) => (
          <div key={k.kpi} className="rounded-2xl border p-6">
            <div className="text-2xl font-bold">{k.kpi}</div>
            <div className="text-sm text-zinc-600">{k.label}</div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold mb-2">How it works</h2>
        <ol className="list-decimal ml-5 space-y-1 text-sm text-zinc-700">
          <li>Pick a product (no meetings required).</li>
          <li>Complete a short intake form.</li>
          <li>We implement, test, and hand over with simple SOPs.</li>
        </ol>
      </section>
    </div>
  )
}
