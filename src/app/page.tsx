import Link from "next/link";

const stats = [
  { label: "Years shipping UI", value: "3", accent: "bg-emerald-400" },
  { label: "Design system launches", value: "4", accent: "bg-sky-400" },
  { label: "Performance lift", value: "↑ 28%", accent: "bg-violet-500" },
];

const experiences = [
  {
    range: "2024 — Present",
    title: "Frontend Engineer · NovaOps Platform",
    summary:
      "Leading React architecture for analytics workflows while modernizing Angular admin apps to standalone APIs and signals.",
    highlights: [
      "Shipped AI-assisted query builder with streaming React Server Components and TanStack Query.",
      "Rebuilt Angular access controls with zoneless change detection, reducing repaint cost by 33%.",
      "Introduced accessibility playbook adopted across 3 product squads.",
    ],
  },
  {
    range: "2022 — 2024",
    title: "Product Engineer · Lumen Wave",
    summary:
      "Owned end-to-end delivery for customer onboarding flows, splitting effort between a React marketing surface and Angular console.",
    highlights: [
      "Implemented content experimentation system in Next.js, delivering +18% sign-up conversion.",
      "Re-platformed Angular dashboards to standalone component architecture with deferred loading.",
      "Partnered with design to codify motion and token usage via Storybook docs mode.",
    ],
  },
];

const projects = [
  {
    title: "Spectrum Toolkit",
    stack: ["Next.js", "Tailwind", "Accessibility QA"],
    blurb:
      "Composable marketing system for rapid experiments — dynamic sections, analytics hooks, and editorial tooling.",
    result: "Cut landing page build time from days to hours while maintaining 98+ Lighthouse scores.",
  },
  {
    title: "Pulse Console",
    stack: ["Angular", "Signal Store", "RxJS"],
    blurb:
      "Mission control for ops teams with optimistic updates, offline-ready caching, and contextual help overlays.",
    result: "65% drop in support tickets post-launch thanks to guided flows and proactive status surfaces.",
  },
  {
    title: "Design Token Pipeline",
    stack: ["Figma API", "Node", "Storybook"],
    blurb:
      "Automated design token sync powering both React and Angular libraries with dark-mode and locale variants.",
    result: "Reduced visual regressions by 40% across shared components and docs.",
  },
];

const testimonials = [
  {
    quote:
      "Mina connects Angular rigor with React velocity. She raises expectations for accessibility and delivery on every sprint.",
    name: "Priya Nandan",
    title: "Director of Product Engineering, NovaOps",
  },
  {
    quote:
      "She prototypes faster than anyone on the team, yet never ships without instrumentation and a migration path.",
    name: "Elias King",
    title: "Head of Design, Lumen Wave",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-12 md:px-12 lg:px-20">
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-[1.2fr_1fr] md:p-12">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
            Frontend Engineer · React &amp; Angular
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Mina Cade crafts resilient web experiences that balance velocity with inclusive UX systems.
          </h1>
          <p className="text-base leading-relaxed text-slate-200/90 md:text-lg">
            Three years shaping data-heavy products, partnering with cross-functional teams to launch accessible
            interfaces and sustainable component libraries across both React and Angular ecosystems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:hello@minacade.dev"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              <span>Let&apos;s collaborate</span>
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10"
            >
              GitHub
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Role Focus</p>
            <p className="text-lg font-semibold text-white">Full-stack UI Development</p>
            <p className="text-sm text-slate-300">
              Shipping production features, orchestrating design systems, and orchestrating progressive delivery pipelines.
            </p>
          </div>
          <div className="grid gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3"
              >
                <p className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</p>
                <span className={`rounded-full px-3 py-1 text-sm font-semibold text-slate-950 ${stat.accent}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-sky-400/10 via-violet-500/10 to-transparent p-4 text-sm text-slate-200">
            <p>
              Currently mentoring a squad on signal-based Angular architecture while piloting a shared React + Angular
              token pipeline.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <article className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Experience Highlights</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Cross-framework delivery</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-200/90">
              Adaptive engineer moving fluidly between React feature teams and Angular platform squads, translating
              product goals into measurable outcomes.
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.title} className="border-l border-white/15 pl-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{experience.range}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{experience.title}</h3>
                <p className="mt-2 text-sm text-slate-200/90">{experience.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-100/80">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden>▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
        <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm backdrop-blur-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Toolkit</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Technical sweet spot</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-200/90">
              React (App Router, suspense strategies), Angular (standalone signals), Storybook, Tailwind, NgRx → Signal
              migration, testing via Vitest and Cypress.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <h3 className="text-base font-semibold text-white">Systems</h3>
              <p className="mt-2 text-slate-200/90">
                Building shared component libraries with strict accessibility linting, token automation, and visual regression safeguards.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <h3 className="text-base font-semibold text-white">Collaboration</h3>
              <p className="mt-2 text-slate-200/90">
                Partnering closely with product, design, and QA, emphasizing design critiques, async walkthroughs, and instrumentation from day one.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <h3 className="text-base font-semibold text-white">Quality</h3>
              <p className="mt-2 text-slate-200/90">
                Testable architecture with story-driven components, contract testing, and dashboards to monitor Core Web Vitals post-release.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Selected Work</p>
            <h2 className="text-3xl font-semibold text-white">Recent launches</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-200/90">
            Case studies spanning React feature delivery, Angular modernization, and platform tooling that keeps
            experience quality measurable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{project.stack.join(" · ")}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-sm text-slate-200/90">{project.blurb}</p>
              <p className="text-sm font-medium text-slate-100">{project.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Angular Insight</p>
          <h2 className="text-3xl font-semibold text-white">Interactive capability pulse</h2>
          <p className="text-base text-slate-200/90">
            Explore the Angular-driven capability widget highlighting Mina&apos;s delivery metrics and outcomes across
            focus areas. Built as a standalone Angular experience and embedded directly into this React page.
          </p>
          <p className="text-sm text-slate-300">
            The widget demonstrates signal-based state, responsive layout, and accessibility-conscious controls that
            mirror Mina&apos;s approach inside platform teams.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
          <iframe
            title="Angular capability pulse"
            src="/angular-widget/index.html"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-lg font-medium text-white">“{testimonial.quote}”</p>
            <footer className="text-sm text-slate-300">
              <p className="font-semibold text-slate-100">{testimonial.name}</p>
              <p>{testimonial.title}</p>
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-sky-400/20 via-violet-500/20 to-transparent p-8 backdrop-blur-xl md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">Collaboration</p>
          <h2 className="text-3xl font-semibold text-white">Ready to design, build, and iterate</h2>
          <p className="text-base text-slate-100/90">
            Mina thrives in product trios, shipping fast without skipping analytics, accessibility, or documentation.
            Let&apos;s connect on how she can elevate your next release.
          </p>
        </div>
        <div className="grid gap-4 text-sm">
          <Link
            href="mailto:hello@minacade.dev"
            className="inline-flex items-center justify-between rounded-2xl border border-white/30 bg-white/10 px-5 py-4 font-semibold text-white transition hover:bg-white/20"
          >
            hello@minacade.dev
            <span aria-hidden>↗</span>
          </Link>
          <Link
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 font-semibold text-slate-100 transition hover:border-white/30 hover:bg-slate-900/40"
          >
            Schedule a 20-min sync
            <span aria-hidden>↗</span>
          </Link>
          <Link
            href="/Mina-Cade-Frontend-Engineer.pdf"
            className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 font-semibold text-slate-100 transition hover:border-white/30 hover:bg-slate-900/40"
          >
            Download resume (PDF)
            <span aria-hidden>↓</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
