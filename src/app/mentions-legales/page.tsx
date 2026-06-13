import Link from "next/link";

const company = {
  name: "Genesis Connect Studio",
  email: "hello@genesisconnectstudio.com",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://market.genesisconnectstudio.com",
  host: "Vercel Inc.",
  hostUrl: "https://vercel.com",
  siren: "849245899",
  siret: "84924589900018",
  naf: "6201Z - Programmation informatique",
};

const sections = [
  {
    title: "Editeur du site",
    items: [
      `Nom commercial : ${company.name}`,
      `Site concerne : Genesis Market`,
      `Contact : ${company.email}`,
      `SIREN : ${company.siren}`,
      `SIRET : ${company.siret}`,
      `Code NAF : ${company.naf}`,
      "Adresse postale : a completer avant publication finale",
    ],
  },
  {
    title: "Hebergement",
    items: [
      `Hebergeur : ${company.host}`,
      `Plateforme : ${company.hostUrl}`,
      "Infrastructure : deployment Vercel",
    ],
  },
  {
    title: "Objet du site",
    items: [
      "Genesis Market presente les produits, offres commerciales, abonnements et futurs parcours de paiement de l'ecosysteme Genesis.",
      "Les parcours transactionnels ont vocation a etre concentres sur ce site et non sur le site principal.",
    ],
  },
  {
    title: "Propriete intellectuelle",
    items: [
      "Les textes, visuels, offres, argumentaires et elements graphiques restent proteges par le droit de la propriete intellectuelle.",
      "Toute reproduction ou exploitation sans autorisation ecrite prealable est interdite.",
    ],
  },
];

export default function LegalNoticePage() {
  return (
    <main>
      <div className="shell">
        <header className="nav">
          <div className="logo">Genesis Market</div>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <span>Mentions legales</span>
          </div>
        </header>

        <section className="hero">
          <p className="eyebrow">Informations legales</p>
          <h1>Mentions legales de Genesis Market.</h1>
          <p>
            Cette page centralise les informations d&apos;identification de
            l&apos;editeur, l&apos;hebergement du site et le cadre juridique general de
            Genesis Market.
          </p>
        </section>

        <section className="stack">
          {sections.map((section) => (
            <article key={section.title} className="panel stack">
              <div>
                <p className="eyebrow">Genesis Market</p>
                <h2 className="section-title">{section.title}</h2>
              </div>
              <div className="list-grid">
                {section.items.map((item) => (
                  <div key={item} className="list-card">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <p className="footer-copy">
          Pour une mise en ligne definitive, pense a remplacer la mention
          d&apos;adresse postale par l&apos;adresse juridique complete de l&apos;entreprise.
        </p>
        <div className="footer-links">
          <Link href="/">Retour a l&apos;accueil</Link>
          <Link href="/conditions-generales">Conditions d&apos;utilisation</Link>
        </div>
      </div>
    </main>
  );
}
