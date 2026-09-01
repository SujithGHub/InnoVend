import heroMachine from "@/assets/hero-machine.jpg";
import modelBasic from "@/assets/model-basic.jpg";
import modelCooling from "@/assets/model-cooling.jpg";
import founderImg from "@/assets/founder.jpg";


const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#models", label: "Models" },
  { href: "#founder", label: "Founder" },
  { href: "#press", label: "Press" },
];

const STEPS = [
  {
    n: "01",
    title: "Insert or tap",
    body: "Feed cash into the coin slot or tap a prepaid card. No apps, no sign-ups.",
    tone: "text-azure/30",
  },
  {
    n: "02",
    title: "Choose quantity",
    body: "Select litres from the panel. Prices are printed and fixed — starting at ₹5.",
    tone: "text-azure/30",
  },
  {
    n: "03",
    title: "Milk dispensed",
    body: "Cold milk pours cleanly straight into your own vessel. Take it home.",
    tone: "text-ochre/40",
  },
];

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className="size-10 shrink-0"
      fill="none"
    >
      <path
        d="M20 3.5C15.2 9.7 9 16.1 9 23.6A11 11 0 0 0 31 23.6C31 16.1 24.8 9.7 20 3.5Z"
        className="fill-milk"
      />
      <path
        d="m14.2 19.2-2.3-2.4M25.8 19.2l2.3-2.4M14.2 19.2c1.4-2 3.3-3 5.8-3s4.4 1 5.8 3v4.5c0 3.2-2.5 5.8-5.8 5.8s-5.8-2.6-5.8-5.8v-4.5Z"
        className="stroke-azure"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 22.1h.1M22.7 22.1h.1M17.5 26.1c1.5 1 3.5 1 5 0"
        className="stroke-ochre"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground leading-normal selection:bg-ochre/30">
      <header className="bg-azure text-cream sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <a href="#top" aria-label="InnoVend home" className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-display font-semibold tracking-wide text-cream text-base sm:text-lg leading-none">
              Inno<span className="text-ochre">Vend</span>
            </span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-cream/85"
          >
            {NAV.map((n) => (
              <a key={n.href} className="hover:text-cream transition-colors" href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#enquiry"
            className="bg-ochre text-stone-900 text-sm font-semibold px-4 py-2 rounded-md ring-1 ring-black/10 shrink-0"
          >
            Enquire
          </a>
        </div>
        <nav
          aria-label="Section navigation"
          className="md:hidden border-t border-cream/15 overflow-x-auto"
        >
          <div className="flex items-center gap-5 px-4 py-2.5 text-sm font-medium text-cream/85 whitespace-nowrap">
            {NAV.map((n) => (
              <a key={n.href} className="hover:text-cream transition-colors" href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      </header>


      <main>
        {/* hero */}
        <section id="top" className="bg-azure text-cream scroll-mt-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 lg:gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ochre">
                Namakkal · Tamil Nadu
              </span>
              <h1 className="mt-5 font-display font-semibold text-balance leading-[0.95] tracking-tight text-5xl sm:text-6xl">
                Fresh cow milk,
                <br />
                from <span className="text-ochre">₹5</span> —<br />
                at the tap.
              </h1>
              <p className="mt-6 text-pretty text-lg text-cream/85 max-w-[42ch]">
                A farmer-built vending machine that dispenses cold, unadulterated milk into
                your own container. No middlemen between the herd and your kitchen.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#models"
                  className="bg-milk text-stone-900 text-sm font-semibold px-5 py-3 rounded-lg ring-1 ring-black/10"
                >
                  View models
                </a>
                <a
                  href="#how"
                  className="text-sm font-medium text-cream/90 hover:text-cream transition-colors"
                >
                  How it works →
                </a>
              </div>
              <div className="mt-10 flex divide-x divide-cream/20">
                <div className="pr-6">
                  <div className="font-display font-bold text-2xl text-ochre">40 L</div>
                  <div className="text-xs text-cream/70 mt-0.5">tank capacity</div>
                </div>
                <div className="px-6">
                  <div className="font-display font-bold text-2xl text-ochre">₹5</div>
                  <div className="text-xs text-cream/70 mt-0.5">starting per pour</div>
                </div>
                <div className="pl-6">
                  <div className="font-display font-bold text-2xl text-ochre">2×</div>
                  <div className="text-xs text-cream/70 mt-0.5">dawn &amp; dusk</div>
                </div>
              </div>
            </div>
            <div className="relative reveal">
              <img
                src={heroMachine}
                width={1024}
                height={1280}
                alt="Illustration of a woman filling her steel vessel from a milk vending machine at dawn in a Tamil Nadu village"
                className="w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/10"
              />
              <div className="absolute -bottom-6 -left-4 bg-milk text-stone-900 rounded-lg px-4 py-3 ring-1 ring-black/10 max-w-[220px]">
                <div className="text-xs font-semibold uppercase tracking-wide text-azure">
                  Dispensing hours
                </div>
                <div className="mt-1 text-sm font-medium">5:30–8:00 am</div>
                <div className="text-sm font-medium">4:30–6:30 pm</div>
              </div>
            </div>
          </div>
        </section>

        {/* how it works */}
        <section id="how" className="bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ochre">
                  The pour
                </span>
                <h2 className="mt-3 font-display font-semibold text-balance leading-none text-4xl tracking-tight max-w-[26ch]">
                  Three steps to a fresh cup
                </h2>
              </div>
              <p className="text-pretty text-sm text-muted-foreground max-w-[30ch]">
                Bring your own container. The machine does the rest.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {STEPS.map((s) => (
                <div key={s.n} className="bg-milk rounded-xl p-6 ring-1 ring-black/5">
                  <div className={`font-display font-bold text-5xl leading-none ${s.tone}`}>
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* models */}
        <section id="models" className="bg-ochre">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-900/60">
              Models &amp; pricing
            </span>
            <h2 className="mt-3 font-display font-semibold text-balance leading-none text-4xl tracking-tight text-stone-900 max-w-[28ch]">
              Two machines, one honest build
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-milk rounded-2xl p-7 ring-1 ring-black/5 hover:-translate-y-1 transition-transform flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Basic
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    non-cooling
                  </span>
                </div>
                <img
                  src={modelBasic}
                  loading="lazy"
                  width={1024}
                  height={640}
                  alt="Illustration of the basic non-cooling milk vending machine with coin slot"
                  className="mt-5 w-full aspect-[16/10] object-cover rounded-lg ring-1 ring-black/5"
                />
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl text-stone-900 leading-none">
                    ₹60,000
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex gap-2.5">
                    <span className="text-ochre font-semibold">·</span>40-litre stainless tank
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-ochre font-semibold">·</span>Same-day dispense, no
                    storage
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-ochre font-semibold">·</span>Cash &amp; prepaid-card
                    ready
                  </li>
                </ul>
                <a
                  href="#enquiry"
                  className="mt-7 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-azure ring-1 ring-azure/40 hover:bg-azure/5 transition-colors"
                >
                  Enquire about Basic
                </a>
              </div>

              <div className="bg-azure rounded-2xl p-7 ring-1 ring-black/5 hover:-translate-y-1 transition-transform flex flex-col text-cream">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/70">
                    Cooling
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-ochre text-stone-900 rounded-full px-2.5 py-1">
                    Most chosen
                  </span>
                </div>
                <img
                  src={modelCooling}
                  loading="lazy"
                  width={1024}
                  height={640}
                  alt="Illustration of the cooling milk vending machine with refrigeration unit"
                  className="mt-5 w-full aspect-[16/10] object-cover rounded-lg ring-1 ring-black/10"
                />
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl leading-none">
                    ₹1,75,000
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-cream/80">
                  <li className="flex gap-2.5">
                    <span className="text-ochre font-semibold">·</span>40-litre tank with a day
                    of cold storage
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-ochre font-semibold">·</span>Dispenses dawn and dusk
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-ochre font-semibold">·</span>Weather-tuned for Tamil
                    Nadu heat
                  </li>
                </ul>
                <a
                  href="#enquiry"
                  className="mt-7 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold bg-ochre text-stone-900 ring-1 ring-black/10"
                >
                  Enquire about Cooling
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* benefits */}
        <section className="bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ochre">
              Who it serves
            </span>
            <h2 className="mt-3 font-display font-semibold text-balance leading-none text-4xl tracking-tight max-w-[28ch]">
              Built for the farm, trusted by the home
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-milk rounded-xl p-7 ring-1 ring-black/5">
                <div className="font-display font-semibold text-xl text-azure">For farmers</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Direct village sales, no collector middlemen.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Steady daily price for your milk, paid at the source.",
                    "Lower spoilage with the cooling model's day of storage.",
                    "Your own machine, in your own village, on your terms.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1.5 size-1.5 rounded-full bg-ochre shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-milk rounded-xl p-7 ring-1 ring-black/5">
                <div className="font-display font-semibold text-xl text-azure">
                  For households
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A clean pour, any morning or evening.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Fresh milk from ₹5 into the container you already own.",
                    "Two daily windows that fit real routines.",
                    "Handy for homes without a fridge — buy twice a day.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1.5 size-1.5 rounded-full bg-ochre shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* founder */}
        <section id="founder" className="bg-azure text-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 items-center">
            <img
              src={founderImg}
              loading="lazy"
              width={1024}
              height={1280}
              alt="Illustrated portrait of C. Balamurugan, the mechanical engineer who built the machine"
              className="w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-black/10"
            />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ochre">
                The founder
              </span>
              <h2 className="mt-3 font-display font-semibold text-balance leading-[1.05] tracking-tight text-4xl">
                C. Balamurugan
              </h2>
              <p className="mt-1 text-sm font-medium text-cream/70">
                Mechanical engineering graduate · Kalappanaickenpatti, Senthamangalam Taluk
              </p>
              <p className="mt-6 text-pretty text-lg text-cream/90 max-w-[46ch]">
                A 24-year-old who built the machine himself — the idea came in his final year of
                mechanical engineering, and a year of redesign added the card system and
                in-machine recharge.
              </p>
              <p className="mt-4 text-pretty text-cream/80 max-w-[46ch]">
                The first unit stands at a relative's store on Kollimalai Road, filled with milk
                from his own cows and his neighbours' herds.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <div>
                  <span className="font-display font-bold text-ochre text-xl">24</span>{" "}
                  <span className="text-cream/70">years old</span>
                </div>
                <div>
                  <span className="font-display font-bold text-ochre text-xl">1</span>{" "}
                  <span className="text-cream/70">machine, made by hand</span>
                </div>
                <div>
                  <span className="font-display font-bold text-ochre text-xl">2</span>{" "}
                  <span className="text-cream/70">daily pour windows</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* press */}
        <section id="press" className="bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ochre">
              In the press
            </span>
            <h2 className="mt-3 font-display font-semibold text-balance leading-none text-4xl tracking-tight max-w-[30ch]">
              Covered, poured &amp; watched
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.thehindu.com/news/cities/Coimbatore/youth-designs-milk-vending-machine/article33570685.ece"
                target="_blank"
                rel="noreferrer"
                className="bg-milk rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-black/5 hover:ring-azure/40 transition"
              >
                The Hindu
              </a>
              <a
                href="https://www.vikatan.com/agriculture/farming/milk-vending-machine-namakkal-young-mans-effort"
                target="_blank"
                rel="noreferrer"
                className="bg-milk rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-black/5 hover:ring-azure/40 transition"
              >
                Pasumai Vikatan
              </a>
              <span className="bg-milk rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-black/5">
                YouTube demos
              </span>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-milk rounded-xl overflow-hidden ring-1 ring-black/5">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/579dIUy3q0c"
                  title="Milk vending machine field demo"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-azure">
                    Field demo
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">
                    The machine dispensing at a village stall, cash slot to clean pour.
                  </p>
                </div>
              </div>
              <div className="bg-milk rounded-xl overflow-hidden ring-1 ring-black/5">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/BRUoPmz0Y3E"
                  title="Milk vending machine workshop walkthrough"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-ochre">
                    Workshop
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">
                    Balamurugan walking through the steel build and the cooling model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* enquiry */}
        <section id="enquiry" className="bg-azure text-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] gap-10 lg:gap-14">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ochre">
                Enquiry
              </span>
              <h2 className="mt-3 font-display font-semibold text-balance leading-none text-4xl tracking-tight max-w-[24ch]">
                For farms &amp; traders
              </h2>
              <p className="mt-5 text-pretty text-cream/85 max-w-[40ch]">
                Considering a machine for your farm or a trade route? Send a note and the
                founder will reply.
              </p>
              <div className="mt-8 space-y-2 text-sm text-cream/80">
                <div className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-ochre shrink-0" />
                  Senthamangalam Taluk, Namakkal
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-ochre shrink-0" />
                  Replies within a couple of days
                </div>
              </div>
            </div>
            <form
              className="bg-milk text-foreground rounded-2xl p-7 ring-1 ring-black/5 grid gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Name
                  </span>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg bg-cream/60 ring-1 ring-black/10 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-azure"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </span>
                  <input
                    type="tel"
                    className="mt-1.5 w-full rounded-lg bg-cream/60 ring-1 ring-black/10 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-azure"
                    placeholder="Mobile number"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  I am a
                </span>
                <select className="mt-1.5 w-full rounded-lg bg-cream/60 ring-1 ring-black/10 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-azure">
                  <option>Farm / dairy producer</option>
                  <option>Trader / retailer</option>
                  <option>Village cooperative</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Message
                </span>
                <textarea
                  rows={3}
                  className="mt-1.5 w-full rounded-lg bg-cream/60 ring-1 ring-black/10 px-3.5 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-azure"
                  placeholder="Tell us about your herd, location or demand…"
                />
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-lg bg-ochre text-stone-900 px-5 py-3 text-sm font-semibold ring-1 ring-black/10"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-block size-7 rounded-full bg-milk grid place-items-center text-stone-900 font-display font-bold text-xs">
              iV
            </span>
            <span className="font-display font-semibold text-cream">
              Inno<span className="text-ochre">Vend</span>
            </span>

          </div>
          <p className="text-xs">
            A farmer-built milk vending machine · Namakkal, Tamil Nadu
          </p>
        </div>
      </footer>
    </div>
  );
}
