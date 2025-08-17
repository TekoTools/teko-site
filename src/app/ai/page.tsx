import Offers, { type Offer } from '@/components/Offers'

const items: Offer[] = [
  {
    slug: 'lead-capture-chatbot',
    title: 'Lead-Capture Chatbot',
    summary: 'Add an on-site AI assistant that qualifies leads and hands off to your inbox.',
    deliverables: ['Embedded widget', 'Email handoff', 'Basic analytics'],
    price: '£490 setup + £29/mo',
    eta: '3 days',
    cta: 'Install Now',
  },
  {
    slug: 'reviews-os',
    title: 'Reputation OS',
    summary: 'Automated review requests + website widgets + negative-review alerts.',
    deliverables: ['SMS/email flows', 'Google profile widgets', 'Alerts'],
    price: '£590 setup + £49/mo',
    eta: '3 days',
    cta: 'Install Now',
  },
  {
    slug: 'ops-autopilot',
    title: 'Ops Autopilot',
    summary: 'Zapier/Make pipelines to move data between your tools without manual work.',
    deliverables: ['Workflow design', 'Error alerts', 'Weekly KPI snapshot'],
    price: '£1,250 setup + £149/mo',
    eta: '7 days',
    cta: 'Build My Flow',
  },
]

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI / Automation (Productised)</h1>
      <p className="text-zinc-600">Pick a product. Fill the form. We deliver. No meetings.</p>
      <Offers items={items} />
    </div>
  )
}
