import Link from "next/link";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://market.genesisconnectstudio.com";

const ecosystemLinks = [
  { label: "Studio", href: process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? "http://localhost:3000/fr" },
  { label: "Academy", href: process.env.NEXT_PUBLIC_GENESIS_ACADEMY_URL ?? "http://localhost:3001/" },
  { label: "Aide", href: process.env.NEXT_PUBLIC_GENESIS_AIDE_URL ?? "http://localhost:3003/" },
];

const offres = [
  {
    title: "Abonnements",
    text: "Des formules mensuelles pour la gestion, l'evolution et l'optimisation continue des presences digitales.",
  },
  {
    title: "Produits digitaux",
    text: "Des ressources payantes, packs, templates et outils vendus sans brouiller le site studio.",
  },
  {
    title: "Offres commerciales",
    text: "Des pages dediees pour presenter clairement une prestation, un tarif ou une solution a forte intention d'achat.",
  },
];

const organisation = [
  "Produits et offres presentes avec une logique de vente plus directe.",
  "Abonnements et futurs paiements centralises sur Genesis Market uniquement.",
  "Pages SEO transactionnelles preparees pour les intentions d'achat et de devis.",
];

const avantages = [
  {
    title: "Lecture immediate",
    text: "Le visiteur comprend tout de suite qu'il est dans l'espace des offres, produits et souscriptions.",
  },
  {
    title: "Tunnel plus propre",
    text: "Les pages commerciales ne sont plus melangees avec le portfolio, la narration studio ou les contenus formation.",
  },
  {
    title: "Vercel et domaine dedies",
    text: "Le site est pret a vivre sur son propre projet, son propre sous-domaine et ses propres variables d'environnement.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "Genesis Market",
  description:
    "Site dedie aux abonnements, produits digitaux, achats et offres commerciales de l'ecosysteme Genesis.",
  url: siteUrl,
};

export default function HomePage() {
  return (
    <main>
      <div className="shell">
        <header className="nav">
          <div className="logo">Genesis Market</div>
          <div className="nav-links">
            <span>Produits et offres</span>
            {ecosystemLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </header>

        <section className="hero hero-grid">
          <div className="stack">
            <p className="eyebrow">Commerce Digital</p>
            <h1>Un site dedie aux produits, abonnements et offres commerciales Genesis.</h1>
            <p>
              Genesis Market concentre tous les parcours d&apos;achat. L&apos;identite reste premium et coherente
              avec l&apos;univers Genesis, mais le decor est plus clair, plus commercial et plus lisible que
              le site principal.
            </p>
            <p>
              Le but est simple: permettre a un visiteur de comprendre une offre, un prix, un format ou
              un abonnement sans passer par les contenus studio ou les pages de formation.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#offres">
                Voir les offres
              </a>
              <a className="button" href="mailto:hello@genesisconnectstudio.com">
                Demander un devis
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <p className="eyebrow">Ce qui doit vivre ici</p>
            <h2>Paiements et produits concentres sur Market</h2>
            <ul className="list">
              <li>Abonnements et prestations recurrentes</li>
              <li>Produits digitaux et achats ponctuels</li>
              <li>Pages d&apos;offres, devis et futurs checkouts</li>
            </ul>
          </aside>
        </section>

        <section id="offres" className="grid">
          {offres.map((offer) => (
            <article key={offer.title} className="card">
              <p className="eyebrow">Genesis Market</p>
              <h2>{offer.title}</h2>
              <p>{offer.text}</p>
            </article>
          ))}
        </section>

        <section className="panel stack">
          <div>
            <p className="eyebrow">Organisation commerciale</p>
            <h2 className="section-title">Une base propre pour vendre sans confusion.</h2>
          </div>
          <div className="list-grid">
            {organisation.map((item) => (
              <div key={item} className="list-card">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid">
          {avantages.map((item) => (
            <article key={item.title} className="card">
              <p className="eyebrow">Avantage</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <p className="footer-copy">
          Genesis Market est separe du site principal pour garder une lecture plus claire des produits,
          un tunnel d&apos;achat autonome et une meilleure organisation des offres a connecter sur Vercel.
        </p>
        <div className="footer-links">
          <Link href="/mentions-legales">Mentions legales</Link>
          <Link href="/conditions-generales">Conditions d&apos;utilisation</Link>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
