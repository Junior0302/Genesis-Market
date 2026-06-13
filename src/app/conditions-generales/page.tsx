import Link from "next/link";

const conditions = [
  {
    title: "Acces au site",
    text: "Genesis Market est accessible pour consulter les offres, produits, abonnements et informations commerciales proposes par l'ecosysteme Genesis.",
  },
  {
    title: "Informations commerciales",
    text: "Les contenus, prix, formules et offres peuvent etre ajustes, completes ou modifies a tout moment en fonction de l'evolution de l'activite.",
  },
  {
    title: "Paiement et commande",
    text: "Les futurs parcours de paiement, d'abonnement et d'achat ont vocation a etre centralises sur Genesis Market. Les autres sites de l'ecosysteme n'ont pas vocation a porter ces flux commerciaux.",
  },
  {
    title: "Propriete intellectuelle",
    text: "Les textes, visuels, offres, interfaces et contenus de Genesis Market demeurent la propriete de Genesis Connect Studio sauf mention contraire.",
  },
  {
    title: "Responsabilite",
    text: "L'utilisateur reste responsable de l'usage qu'il fait des informations diffusees sur le site. Genesis Connect Studio ne peut etre tenu responsable d'un dommage indirect lie a l'usage du site.",
  },
];

export default function ConditionsPage() {
  return (
    <main>
      <div className="shell">
        <header className="nav">
          <div className="logo">Genesis Market</div>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <span>Conditions d&apos;utilisation</span>
          </div>
        </header>

        <section className="hero">
          <p className="eyebrow">Cadre d&apos;utilisation</p>
          <h1>Conditions generales d&apos;utilisation.</h1>
          <p>
            Ces conditions encadrent l&apos;acces et l&apos;utilisation du site Genesis
            Market ainsi que la consultation des contenus et offres presentes.
          </p>
        </section>

        <section className="grid">
          {conditions.map((condition) => (
            <article key={condition.title} className="card">
              <p className="eyebrow">Condition</p>
              <h2>{condition.title}</h2>
              <p>{condition.text}</p>
            </article>
          ))}
        </section>

        <p className="footer-copy">
          En poursuivant la navigation sur Genesis Market, l&apos;utilisateur accepte
          le cadre general d&apos;utilisation du site et le respect des droits de
          propriete intellectuelle de l&apos;editeur.
        </p>
        <div className="footer-links">
          <Link href="/">Retour a l&apos;accueil</Link>
          <Link href="/mentions-legales">Mentions legales</Link>
        </div>
      </div>
    </main>
  );
}
