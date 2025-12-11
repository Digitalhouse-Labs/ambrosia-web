import { getTranslations } from "next-intl/server"
import { Metadata } from "next"
import { useTranslations } from "next-intl"

type Props = {
   params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { locale } = await params
   const t = await getTranslations({ locale, namespace: "ImpressumPage" })

   return {
      title: t("metaTitle"),
      description: t("metaDescription"),
   }
}

export default function ImpressumPage() {
   const t = useTranslations("ImpressumPage")

   return (
      <div className="mx-auto max-w-5xl px-3 py-16">
         <div className="mb-16">
            <div className="mx-auto max-w-5xl space-y-1 text-center md:space-y-6">
               <h1 className="text-3xl font-bold text-balance break-all md:text-5xl">
                  {t("title")}
               </h1>
            </div>
         </div>

         <article className="prose dark:prose-invert max-w-none">
            <section>
               <h2>Angaben gemäß § 5 TMG</h2>
               <div className="not-prose not-italic">
                  <p>
                     <strong>Ambrosia Restaurant</strong>
                  </p>
                  <p>Hauptstraße 37</p>
                  <p>90607 Rückersdorf</p>
                  <p>Deutschland</p>
               </div>
            </section>

            <section>
               <h2>Kontakt</h2>
               <div className="not-prose not-italic">
                  <p>Telefon: +49 911 860 442 77</p>
                  <p>E-Mail: info@ambrosia-rueckersdorf.de</p>
               </div>
            </section>

            <section>
               <h2>Vertreten durch</h2>
               <p>Antonia Siouta</p>
            </section>

            <section>
               <h2>Umsatzsteuer-ID</h2>
               <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz:
               </p>
               <p>DE370541669</p>
            </section>

            <section>
               <h2>Zuständige Aufsichtsbehörde</h2>
               <div className="not-prose not-italic">
                  <p>Landratsamt Nürnberger Land</p>
                  <p>Waldluststraße 1</p>
                  <p>91207 Lauf an der Pegnitz</p>
               </div>
            </section>

            <section>
               <h2>EU-Streitschlichtung</h2>
               <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                     href="https://ec.europa.eu/consumers/odr/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     https://ec.europa.eu/consumers/odr/
                  </a>
               </p>
               <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>

            <section>
               <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
               <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
               </p>
            </section>

            <section>
               <h2>Haftung für Inhalte</h2>
               <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
               </p>
               <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                  möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
               </p>
            </section>

            <section>
               <h2>Haftung für Links</h2>
               <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                  zum Zeitpunkt der Verlinkung nicht erkennbar.
               </p>
               <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                  ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                  nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
               </p>
            </section>

            <section>
               <h2>Urheberrecht</h2>
               <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers. Downloads und Kopien dieser Seite sind nur für den
                  privaten, nicht kommerziellen Gebrauch gestattet.
               </p>
               <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                  erstellt wurden, werden die Urheberrechte Dritter beachtet.
                  Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                  aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                  Inhalte umgehend entfernen.
               </p>
            </section>
         </article>
      </div>
   )
}
