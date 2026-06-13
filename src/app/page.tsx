const offers = [
  {
    title: "Subscriptions",
    text: "Monthly website subscriptions, service plans and recurring offers with a cleaner sales journey.",
  },
  {
    title: "One-time Purchases",
    text: "Standalone offers, premium digital products and clearly framed purchase pages without studio content noise.",
  },
  {
    title: "Sales SEO",
    text: "Dedicated landing pages prepared for transactional intent, offer clarity and stronger conversion performance.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "Genesis Market",
  description:
    "Dedicated website for premium subscriptions, purchases and digital offers.",
  url: "https://market.example.com",
};

export default function HomePage() {
  return (
    <main>
      <div className="shell">
        <header className="nav">
          <div className="logo">Genesis Market</div>
          <div className="nav-links">
            <span>Offers</span>
            <span>Subscriptions</span>
            <span>Purchases</span>
            <span>Support</span>
          </div>
        </header>

        <section className="hero">
          <p className="eyebrow">Focused Commerce Platform</p>
          <h1>A separate site dedicated only to subscriptions, purchases and offers.</h1>
          <p>
            Genesis Market isolates every commercial journey into its own lightweight platform so pricing,
            buying intent, SEO, checkout flows and offer clarity are no longer mixed with the flagship site.
          </p>
          <div className="actions">
            <a className="button" href="mailto:hello@genesisconnectstudio.com">Contact</a>
            <a className="button" href="#offers">Explore offers</a>
          </div>
        </section>

        <section id="offers" className="grid">
          {offers.map((offer) => (
            <article key={offer.title} className="card">
              <p className="eyebrow">Genesis Market</p>
              <h2>{offer.title}</h2>
              <p>{offer.text}</p>
            </article>
          ))}
        </section>

        <section className="grid">
          <article className="card">
            <p className="eyebrow">Conversion</p>
            <h3>Clearer buying journeys</h3>
            <p>
              Visitors land directly on commercial content without navigating through unrelated studio,
              editorial or training sections.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">SEO</p>
            <h3>Transactional intent pages</h3>
            <p>
              The structure is ready for targeted sales pages, offer clusters, keyword-specific landings
              and better SEO alignment with purchase intent.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Responsive</p>
            <h3>Mobile-first checkout context</h3>
            <p>
              The layout stays simple, readable and action-oriented on mobile so subscriptions and purchases
              remain friction-light.
            </p>
          </article>
        </section>

        <p className="footer-copy">
          Genesis Market is intentionally separated from the flagship website to keep offer discovery,
          pricing structure and conversion logic fully focused.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
