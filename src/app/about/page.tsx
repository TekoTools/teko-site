import Link from 'next/link'

export default function Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">About Teko Tools</h1>
        <p className="text-zinc-600 max-w-2xl">
          We build productised automation and AI systems for small teams.
          Clear deliverables. No meetings unless essential. Fast handovers with simple SOPs.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6 space-y-3">
          <h3 className="font-semibold text-lg">What we do</h3>
          <ul className="list-disc ml-5 text-sm space-y-1 text-zinc-700">
            <li>Lead capture, qualification, and routing</li>
            <li>Reviews/CRM automations and alerts</li>
            <li>Dashboards, reporting snapshots, KPIs</li>
            <li>Low-cost chatbots with sensible handoff</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6 space-y-3">
          <h3 className="font-semibold text-lg">How we work</h3>
          <ol className="list-decimal ml-5 text-sm space-y-1 text-zinc-700">
            <li>Pick a product from <Link className="underline" href="/ai">AI</Link> or <Link className="underline" href="/property">Property</Link>.</li>
            <li>Complete a short intake form—no calls needed.</li>
            <li>We deliver, test together, and hand over with SOPs.</li>
          </ol>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Principles</h3>
          <ul className="mt-2 text-sm text-zinc-700 space-y-1 list-disc ml-5">
            <li>Automate first, then optimise</li>
            <li>Prefer cashflow to speculation</li>
            <li>Simple &gt; clever</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">Focus Areas</h3>
          <ul className="mt-2 text-sm text-zinc-700 space-y-1 list-disc ml-5">
            <li>Local services &amp; property ops</li>
            <li>RevOps &amp; review systems</li>
            <li>Owner-led SMBs</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold">No-call policy</h3>
          <p className="mt-2 text-sm text-zinc-700">
            We avoid calls by default to keep delivery fast and focused.
            If a call is essential, we’ll propose it after intake.
          </p>
        </div>
      </section>

      <footer className="text-sm text-zinc-600">
        Want to start? <Link href="/contact" className="underline font-medium">Get in touch</Link>.
      </footer>
    </div>
  )
}
