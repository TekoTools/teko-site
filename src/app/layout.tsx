import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'teko.tools — Automation, AI, Property',
  description:
    'Hands-off automation products and property plays. No calls. Clear deliverables. Trusted outcomes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold">teko.tools</Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/ai">AI / Automation</Link>
              <Link href="/property">Property</Link>
              <Link href="/holdings">Holdings</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="font-medium">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600">
            © {new Date().getFullYear()} Teko Group Ltd · <Link href="/contact" className="underline">Get in touch</Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
