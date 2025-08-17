export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-zinc-600 max-w-xl">
        Prefer no calls by default. Use the form and we’ll reply by email with next steps.
      </p>

      {/* Mailto fallback – replace with your real address later */}
      <form
        action="mailto:hello@teko.tools"
        method="post"
        encType="text/plain"
        className="space-y-4 max-w-lg"
      >
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-xl border p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full rounded-xl border p-3"
        />
        <textarea
          name="message"
          placeholder="What do you want to automate?"
          rows={5}
          required
          className="w-full rounded-xl border p-3"
        />
        <button className="rounded-xl border px-4 py-2 font-medium" type="submit">
          Send
        </button>
      </form>

      <p className="text-xs text-zinc-500">
        Tip: replace <code>hello@teko.tools</code> in this page with your real inbox, or we can wire up Resend later.
      </p>
    </div>
  )
}
