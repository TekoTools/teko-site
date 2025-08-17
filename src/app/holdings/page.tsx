export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Holdings</h1>
      <p className="text-zinc-600">
        Our long-term thesis across property, equities and crypto. This page is for transparency and education—nothing here is financial advice.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <section className="rounded-2xl border p-6 space-y-3">
          <h3 className="font-semibold text-lg">Property</h3>
          <ul className="text-sm list-disc ml-5 space-y-1">
            <li>Focus: flips, BRRR, semi-commercial</li>
            <li>Edge: ops &amp; sourcing automation</li>
            <li>Goal: cashflow + equity growth</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-6 space-y-3">
          <h3 className="font-semibold text-lg">Equities</h3>
          <ul className="text-sm list-disc ml-5 space-y-1">
            <li>Quality &amp; cash-generative businesses</li>
            <li>Simple, durable moats</li>
            <li>Position sizing rules; no hero bets</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-6 space-y-3">
          <h3 className="font-semibold text-lg">Crypto</h3>
          <ul className="text-sm list-disc ml-5 space-y-1">
            <li>Blue-chip infra &amp; L2s</li>
            <li>Staking/LP only when risk-adjusted</li>
            <li>Tight risk controls; long horizon</li>
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border p-6 space-y-3">
        <h3 className="font-semibold text-lg">Principles</h3>
        <ul className="text-sm list-disc ml-5 space-y-1">
          <li>Automation first: dashboards, alerts, SOPs</li>
          <li>Prefer cashflow to speculation</li>
          <li>Compounding over complexity</li>
        </ul>
      </section>

      <p className="text-xs text-zinc-500">
        Disclaimer: Nothing here is investment advice. Do your own research.
      </p>
    </div>
  )
}
