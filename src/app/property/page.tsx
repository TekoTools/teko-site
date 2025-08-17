import Offers, { type Offer } from '../../components/Offers'

const items: Offer[] = [
  {
    slug: 'lead-gen-pack',
    title: 'Property Lead-Gen Pack',
    summary: 'Landing page + chatbot + review capture.',
    deliverables: [
      'High-converting landing page',
      'Chatbot + form/email handoff',
      'Review capture automation'
    ],
    price: '£1,250 setup + £149/mo',
    eta: '7 days',
    cta: 'Get Started'
  },
  {
    slug: 'landlord-intake',
    title: 'Landlord Intake System',
    summary: 'Screen and onboard landlords automatically.',
    deliverables: [
      'Qualification form + CRM sync',
      'Email/SMS follow-ups',
      'Weekly KPI snapshot'
    ],
    price: '£890 setup + £79/mo',
    eta: '5 days',
    cta: 'Build My Flow'
  },
  {
    slug: 'semi-commercial-pack',
    title: 'Semi-Commercial Pack',
    summary: 'Prospecting+valuation templates for semi-commercial deals.',
    deliverables: [
      'Prospecting list & outreach workflow',
      'Deal calculator sheet',
      'Offer & heads-of-terms templates'
    ],
    price: '£1,450 one-off',
    eta: '10 days',
    cta: 'Show Me Deals'
  }
]

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Property Hub (Productised)</h1>
      <p className="text-zinc-600">
        Done-for-you assets that support landlords, agents, and investors.
      </p>
      <Offers items={items} />
    </div>
  )
}
