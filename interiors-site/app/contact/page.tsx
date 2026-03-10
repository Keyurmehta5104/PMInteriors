import Image from "next/image";

const contactModes = [
  {
    label: "Call",
    value: "+91 9429616151",
    hint: "Mon-Sat, 10:00 AM - 7:00 PM",
  },
  {
    label: "Email",
    value: "hello@pminteriors.com",
    hint: "Share plans, references, and timeline",
  },
  {
    label: "Studio",
    value: "Rajkot, Gujarat",
    hint: "Visits by appointment",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="hero-card grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="eyebrow">Contact PM Interiors</p>
          <h1 className="text-5xl leading-tight sm:text-6xl">Begin your premium space transformation.</h1>
          <p className="max-w-xl text-base text-[var(--muted)] sm:text-lg">
            Tell us about your project and we will send a curated roadmap covering design, execution, and timelines.
          </p>
        </div>
        <Image
          src="https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Design consultation"
          width={1500}
          height={980}
          className="visual-photo rounded-xl"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {contactModes.map((mode) => (
          <article key={mode.label} className="section-card space-y-1">
            <p className="eyebrow text-xs">{mode.label}</p>
            <p className="text-lg font-semibold text-[var(--text)]">{mode.value}</p>
            <p className="text-sm text-[var(--muted)]">{mode.hint}</p>
          </article>
        ))}
      </section>

      <section className="section-card">
        <h2 className="text-3xl">Project Brief</h2>
        <ContactForm />
      </section>
    </div>
  );
}
