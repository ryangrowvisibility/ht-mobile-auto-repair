import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 628-0533";
const TEL = "tel:+19166280533";
const SMS = "sms:+19166280533";
const MAPS = "https://www.google.com/maps/search/?api=1&query=H%26T%20Mobile%20Automotive%20Repair&query_place_id=ChIJiY5cazzEmoARR8F6i9Vf8g4";

const services = [
  { icon: "search", name: "Engine diagnostics", body: "Check engine light, rough running, or a problem other shops couldn't pin down. Tri finds the real cause on the spot, including tricky electrical issues." },
  { icon: "battery", name: "Starting & charging", body: "Car won't crank? Alternators, starters and battery problems, often fixed the same day right where the car is parked." },
  { icon: "disc", name: "Brake repairs", body: "Pads, rotors and brake service done in your driveway, so you don't have to drive a car with bad brakes to a shop." },
  { icon: "drop", name: "Oil changes", body: "Routine oil changes at your home or workplace. No waiting room, no ride needed." },
  { icon: "gauge", name: "Tune-ups & smog prep", body: "Ignition coils, spark plugs and air filters, so your car runs smoothly and is ready for its smog check." },
  { icon: "check", name: "Vehicle inspections", body: "A careful look over your car so you know what needs attention now and what can wait." },
];

const reviews = [
  { name: "Akash", job: "Camry electrical problem", quote: "I took my Camry to several mechanics and changed all sorts of parts, but it never got fixed. H&T came to my house, fixed it quickly and at a very low cost. The car never had the same issue again. This guy knows what he's doing." },
  { name: "Jan S.", job: "2008 Toyota Sienna, before smog", quote: "My engine light came on three days before my smog was due. Tri came to my place the day after I called. It was ignition coils, spark plugs and the air filter. The car runs smooth and passed smog with flying colors." },
  { name: "Beth C.", job: "Alternator replacement", quote: "Was able to help the same day with an alternator. Very good at what he does. 10/10." },
  { name: "Kim H.", job: "Mobile repair", quote: "Trustworthy, fast and affordable. If your car has a problem and you need someone to come to you, call him." },
  { name: "Damion M.", job: "General repair", quote: "Excellent mechanic, great customer service, at a very good price. This is my new mechanic." },
  { name: "Emiliano H.", job: "Repair (review in Spanish)", quote: "A very good mechanic. Friendly and focused on his work. 100% recommended." },
];

const steps = [
  { title: "Call or text", body: `Reach Tri at ${PHONE}. Tell him the make, model and what the car is doing.` },
  { title: "Pick a time and place", body: "Your driveway, your apartment parking lot or your workplace. Often the next day, sometimes the same day." },
  { title: "Repair on the spot", body: "Tri diagnoses the problem where the car sits, explains it, and fixes it with the right parts." },
  { title: "Guaranteed work", body: "All work is guaranteed, and returning customers save with the loyalty program." },
];

const faqs = [
  { q: "Where do you come to?", a: "Anywhere in the South Sacramento area: your home, an apartment complex parking lot, or your workplace. Call or text with your location and we'll let you know." },
  { q: "What vehicles do you work on?", a: "Domestic and Asian import cars, trucks and minivans, including Toyota and other common makes. We do not service European vehicles." },
  { q: "Is the work guaranteed?", a: "Yes. All work is guaranteed. If something isn't right with a repair we did, call us and we'll make it right." },
  { q: "What are your hours?", a: "Tuesday through Saturday, 9:30 a.m. to 5 p.m. Closed Sunday and Monday." },
  { q: "How soon can you come out?", a: "Often the next day, and simple jobs like alternators can sometimes be done the same day. Call early for the best chance." },
  { q: "Do you have a loyalty program?", a: "Yes. Returning customers get discounts on select services. Ask about it when you call." },
  { q: "Can you get my car ready for smog?", a: "Yes. If your check engine light is on before a smog check, we can diagnose it and replace common culprits like ignition coils, spark plugs and filters." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "H&T Mobile Automotive Repair",
  alternateName: "H&T Mobile Automotive Repair (sửa xe lưu động)",
  telephone: "+1-916-628-0533",
  address: { "@type": "PostalAddress", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95828", addressCountry: "US" },
  areaServed: "South Sacramento, CA",
  openingHours: ["Tu-Sa 09:30-17:00"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "49" },
  hasMap: MAPS,
};

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href={TEL} className={`btn btn-cta ${className}`}>
      Call {PHONE}
      <span className="nub"><Icon name="phone" className="h-4 w-4" /></span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />

      <div className="hidden bg-char text-[15px] text-white/85 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="truck" className="h-4 w-4" /> Mobile service across South Sacramento</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Tue–Sat 9:30–5 · All work guaranteed</span>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Icon name="truck" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block text-xl font-extrabold tracking-tight text-char">H&amp;T Mobile Auto Repair</span>
              <span className="block text-[13px] text-muted" lang="vi">sửa xe lưu động · we come to you</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Tri</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden text-lg font-bold text-char md:block num">{PHONE}</a>
            <a href={TEL} className="btn btn-cta btn-plain hidden sm:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call H&T Mobile Automotive Repair at ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white sm:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-16 md:px-6 md:pt-20 md:pb-24 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-[15px] font-bold text-brand-dark">
                <Icon name="pin" className="h-4 w-4" /> We come to your driveway
              </p>
              <h1 className="text-[clamp(2.3rem,5vw,3.75rem)] tracking-tight text-char">
                Mobile Mechanic in South Sacramento
              </h1>
              <p className="lede mt-5 text-[1.2rem] text-muted">
                Car won&apos;t start, check engine light on, brakes squealing? Tri brings the tools to your home, apartment or work and fixes it right there. Fair prices, and all work is guaranteed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <a href={SMS} className="btn btn-line">
                  Text us
                  <span className="nub"><Icon name="text" className="h-4 w-4" /></span>
                </a>
              </div>
              <a href={MAPS} target="_blank" rel="noopener" className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[16px]">
                <Stars className="h-5 w-5" />
                <span className="font-bold">4.9</span>
                <span className="text-muted">·</span>
                <span className="underline decoration-line underline-offset-4">49 Google reviews</span>
                <span className="text-muted">·</span>
                <span>All work guaranteed</span>
                <span className="text-muted">·</span>
                <span>Loyalty discounts</span>
              </a>
            </div>
            <div className="reveal">
              <div className="card p-7">
                <Stars />
                <blockquote className="mt-4 text-[1.3rem] font-bold leading-snug">
                  &ldquo;Was able to help the same day with an alternator. Very good at what he does.&rdquo;
                </blockquote>
                <p className="mt-4 text-[15px] text-muted">Beth C. · Google review</p>
              </div>
              <div className="card mt-4 divide-y divide-line">
                {[
                  { icon: "clock", t: "Tue–Sat, 9:30 a.m.–5 p.m.", s: "Closed Sunday & Monday" },
                  { icon: "truck", t: "Fully mobile", s: "Home, apartment or workplace" },
                  { icon: "shield", t: "All work guaranteed", s: "Domestic & Asian imports" },
                ].map((x) => (
                  <div key={x.t} className="flex items-center gap-4 px-6 py-4">
                    <Icon name={x.icon} className="h-6 w-6 shrink-0 text-brand" />
                    <div className="leading-tight">
                      <p className="font-bold">{x.t}</p>
                      <p className="text-[15px] text-muted">{x.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers choose H&T" className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-7 md:grid-cols-4 md:px-6">
            {[
              { icon: "star", t: "4.9 on Google", s: "49 reviews" },
              { icon: "truck", t: "We come to you", s: "No tow, no waiting room" },
              { icon: "shield", t: "Guaranteed", s: "On all work" },
              { icon: "heart", t: "Loyalty program", s: "Savings for regulars" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={x.icon} className="h-5 w-5" /></span>
                <div className="leading-tight">
                  <p className="font-bold">{x.t}</p>
                  <p className="text-[15px] text-muted">{x.s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services: featured panel + list */}
        <section id="services" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] tracking-tight text-char">Repairs we do at your car</h2>
                <p className="mt-4 text-muted">
                  Most everyday repairs don&apos;t need a shop. Tri carries the tools and parts to handle them wherever your car is parked, for domestic and Asian import vehicles.
                </p>
                <div className="mt-6 rounded-2xl bg-char p-6 text-white">
                  <p className="font-bold">Not sure what&apos;s wrong?</p>
                  <p className="mt-1 text-[16px] text-white/80">Describe the noise, light or symptom on the phone. That&apos;s enough to get started.</p>
                  <a href={TEL} className="mt-4 inline-flex items-center gap-2 font-bold text-white underline underline-offset-4">Call {PHONE} <Icon name="arrow" className="h-4 w-4" /></a>
                </div>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {services.map((s, i) => (
                  <li key={s.name} className={`card card-hover reveal p-6 ${i === 0 ? "sm:col-span-2 ring-2 ring-brand" : ""}`}>
                    <div className="flex items-start gap-4">
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${i === 0 ? "bg-brand text-white" : "bg-brand-soft text-brand"}`}><Icon name={s.icon} /></span>
                      <div>
                        <h3 className="text-[1.2rem]">{s.name}</h3>
                        <p className="mt-1.5 text-[16px] text-muted">{s.body}</p>
                        <a href={TEL} className="mt-3 inline-flex items-center gap-1.5 text-[16px] font-bold text-brand">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Stars className="h-6 w-6" />
                <h2 className="mt-3 text-[clamp(1.9rem,3.5vw,2.75rem)] tracking-tight text-char">Rated 4.9 from 49 Google reviews</h2>
              </div>
              <a href={MAPS} target="_blank" rel="noopener" className="btn btn-line">
                Read all reviews on Google
                <span className="nub"><Icon name="arrow" className="h-4 w-4" /></span>
              </a>
            </div>
            <figure className="reveal mt-10 rounded-3xl bg-brand-soft p-8 md:p-12">
              <blockquote className="max-w-4xl text-[clamp(1.3rem,2.4vw,1.75rem)] font-bold leading-snug text-char">
                &ldquo;{reviews[0].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[16px] text-muted"><span className="font-bold text-ink">{reviews[0].name}</span> · {reviews[0].job}</figcaption>
            </figure>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(1).map((r) => (
                <figure key={r.name} className="card reveal flex flex-col p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[16.5px] leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 border-t border-line pt-4 leading-tight">
                    <span className="block font-bold">{r.name}</span>
                    <span className="text-[15px] text-muted">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] tracking-tight text-char">Your neighborhood mechanic, on wheels</h2>
              <div className="mt-6 space-y-4 text-[1.1rem]">
                <p>
                  H&amp;T Mobile Automotive Repair is a mobile repair service based in South Sacramento. Instead of arranging a tow or a ride to the shop, you call Tri and he comes to you. Customers ask for him by name and describe him as professional, friendly and honest.
                </p>
                <p>
                  The name says it in two languages: <span lang="vi" className="font-semibold">sửa xe lưu động</span> means mobile car repair. Neighbors across South Sacramento, including the local Vietnamese community, rely on H&amp;T for quick fixes at home, in apartment parking lots and at work.
                </p>
                <p>
                  Many reviewers came to H&amp;T after other mechanics couldn&apos;t solve the problem. Tri takes the time to find the real cause, keeps the price fair, and stands behind the work with a guarantee.
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                { icon: "truck", t: "Comes to you", s: "Driveway, apartment lot or workplace. No tow and no waiting room." },
                { icon: "search", t: "Finds the real problem", s: "Customers say he fixed issues other shops missed, the first time." },
                { icon: "tag", t: "Fair, affordable prices", s: "Reviewers keep mentioning how much they saved." },
                { icon: "heart", t: "Rewards regulars", s: "The loyalty program gives returning customers discounts on select services." },
              ].map((d) => (
                <li key={d.t} className="card reveal flex gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-white"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <div>
                    <h3 className="text-[1.1rem]">{d.t}</h3>
                    <p className="mt-1 text-[16px] text-muted">{d.s}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] tracking-tight text-char">How mobile repair works</h2>
            <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal border-t-4 border-brand pt-5">
                  <span className="text-4xl font-extrabold text-brand">{i + 1}</span>
                  <h3 className="mt-2 text-[1.2rem]">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] tracking-tight text-char">Where we go</h2>
              <p className="mt-4 text-muted">
                Based in South Sacramento (95828) and serving drivers throughout the South Sacramento area. Not sure if you&apos;re in range? Call or text your location.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["South Sacramento", "Sacramento 95828", "Homes & driveways", "Apartment complexes", "Workplaces"].map((a) => (
                  <li key={a} className="rounded-full border border-line bg-white px-4 py-1.5 text-[15px] font-semibold">{a}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
              </div>
            </div>
            <div className="card overflow-hidden p-2">
              <iframe
                title="Map of the South Sacramento service area"
                src="https://maps.google.com/maps?q=South%20Sacramento%2C%20CA%2095828&output=embed"
                className="h-[360px] w-full rounded-[12px] md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] tracking-tight text-char">Common questions</h2>
              <p className="mt-4 text-muted">Anything else? Text {PHONE} and Tri will get back to you.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="card px-6 py-5">
                  <summary className="flex items-center justify-between gap-6 text-[1.1rem] font-bold">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 text-[16.5px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA band */}
        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] tracking-tight">Car trouble? Call Tri at {PHONE}.</h2>
              <p className="mt-3 text-white/85">Tuesday to Saturday, 9:30 a.m. to 5 p.m. We come to you, and all work is guaranteed.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={TEL} className="btn bg-white text-brand-dark hover:bg-brand-soft">
                Call {PHONE}
                <span className="nub bg-brand-soft"><Icon name="phone" className="h-4 w-4" /></span>
              </a>
              <a href={SMS} className="btn border-2 border-white/50 text-white hover:bg-white/10">
                Text us
                <span className="nub"><Icon name="text" className="h-4 w-4" /></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-char text-white/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-6">
          <div>
            <p className="text-xl font-extrabold text-white">H&amp;T Mobile Automotive Repair</p>
            <p className="mt-1 text-[15px]" lang="vi">sửa xe lưu động</p>
            <p className="mt-4 text-[16px]">Mobile auto repair based in South Sacramento, CA 95828.</p>
            <a href={TEL} className="mt-3 block text-lg font-bold text-white num">{PHONE}</a>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-1.5 text-[16px]">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Hours</p>
            <ul className="mt-3 space-y-1.5 text-[16px]">
              <li>Tuesday–Saturday: 9:30 a.m. – 5 p.m.</li>
              <li>Sunday & Monday: closed</li>
            </ul>
            <a href={MAPS} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 font-bold text-white underline underline-offset-4">Google reviews <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
        </div>
        <p className="border-t border-white/10 px-5 py-5 text-center text-[14px] text-white/60">© {new Date().getFullYear()} H&amp;T Mobile Automotive Repair · Serving South Sacramento</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 md:hidden">
        <a href={TEL} className="btn btn-cta btn-plain"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn btn-line btn-plain"><Icon name="text" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
