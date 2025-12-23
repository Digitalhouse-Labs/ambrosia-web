import { Metadata } from "next"
import { use } from "react"
import { Locale, useTranslations } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { siteConfig } from "@/config/site"

type Props = {
   params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { locale } = await params
   const t = await getTranslations({ locale, namespace: "PrivacyPage" })

   return {
      title: t("metaTitle"),
      description: t("metaDescription"),
   }
}

export default function PrivacyPage({ params }: Props) {
   const { locale } = use(params)
   setRequestLocale(locale as Locale)
   const t = useTranslations("PrivacyPage")

   return (
      <div className="mx-auto max-w-5xl px-3 py-16">
         <div className="mb-16">
            <div className="mx-auto max-w-5xl space-y-1 text-center md:space-y-6">
               <h1 className="text-3xl font-bold text-balance break-all md:text-5xl">
                  {t("title")}
               </h1>
               <span className="text-foreground/75 text-sm">
                  {t("lastUpdated")}: {siteConfig.legal.privacyLastUpdated}
               </span>
            </div>
         </div>

         <article className="prose dark:prose-invert max-w-none">
            <section>
               <h2>1. Verantwortlicher</h2>
               <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website
                  ist:
               </p>
               <div className="not-prose not-italic">
                  <p>
                     <strong>{siteConfig.name}</strong>
                  </p>
                  <p>{siteConfig.contact.street}</p>
                  <p>
                     {siteConfig.contact.postalCode} {siteConfig.contact.city}
                  </p>
                  <p>Deutschland</p>
                  <p className="mt-4">Telefon: {siteConfig.contact.phone}</p>
                  <p>E-Mail: {siteConfig.contact.email}</p>
               </div>
            </section>

            <section>
               <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
               <h3>2.1 Beim Besuch der Website</h3>
               <p>
                  Beim Aufrufen unserer Website werden durch den auf Ihrem
                  Endgerät zum Einsatz kommenden Browser automatisch
                  Informationen an den Server unserer Website gesendet. Diese
                  Informationen werden temporär in einem sogenannten Logfile
                  gespeichert.
               </p>
               <ul>
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>
                     Website, von der aus der Zugriff erfolgt (Referrer-URL)
                  </li>
                  <li>
                     Verwendeter Browser und ggf. das Betriebssystem Ihres
                     Rechners
                  </li>
               </ul>
               <p>
                  Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs.
                  1 S. 1 lit. f DSGVO.
               </p>

               <h3>2.2 Bei Nutzung unseres Reservierungsformulars</h3>
               <p>
                  Wenn Sie eine Tischreservierung über unser Online-Formular
                  vornehmen, erheben wir folgende Daten:
               </p>
               <ul>
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer (optional)</li>
                  <li>Gewünschtes Datum und Uhrzeit</li>
                  <li>Anzahl der Personen</li>
                  <li>Besondere Wünsche oder Anmerkungen</li>
               </ul>
               <p>
                  Diese Daten werden ausschließlich zur Bearbeitung Ihrer
                  Reservierung verwendet. Die Rechtsgrundlage ist Art. 6 Abs. 1
                  S. 1 lit. b DSGVO (Vertragsanbahnung).
               </p>
            </section>

            <section>
               <h2>3. E-Mail-Versand (Resend)</h2>
               <p>
                  Für den Versand von Reservierungsbestätigungen nutzen wir den
                  Dienst
                  <strong> Resend</strong> (Resend, Inc., USA). Wenn Sie eine
                  Reservierung vornehmen, wird Ihre E-Mail-Adresse an Resend
                  übermittelt, um Ihnen eine Bestätigung zu senden.
               </p>
               <p>
                  Resend verarbeitet Ihre Daten in unserem Auftrag und ist
                  vertraglich verpflichtet, Ihre Daten zu schützen und nicht für
                  eigene Zwecke zu verwenden. Die Datenübertragung in die USA
                  erfolgt auf Grundlage der EU-Standardvertragsklauseln.
               </p>
               <p>
                  Weitere Informationen:{" "}
                  <a
                     href="https://resend.com/legal/privacy-policy"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Datenschutzerklärung von Resend
                  </a>
               </p>
            </section>

            <section>
               <h2>4. Google reCAPTCHA</h2>
               <p>
                  Wir verwenden auf unserer Website den Dienst{" "}
                  <strong>Google reCAPTCHA v3</strong> (Google Ireland Limited,
                  Gordon House, Barrow Street, Dublin 4, Irland). Dieser Dienst
                  dient dem Schutz unseres Reservierungsformulars vor
                  missbräuchlicher automatisierter Nutzung (Spam, Bots).
               </p>
               <p>
                  reCAPTCHA analysiert das Verhalten des Website-Besuchers
                  anhand verschiedener Merkmale wie IP-Adresse, Verweildauer und
                  Mausbewegungen.
               </p>
               <p>
                  Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs.
                  1 S. 1 lit. f DSGVO.
               </p>
               <p>
                  Weitere Informationen:{" "}
                  <a
                     href="https://policies.google.com/privacy"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Datenschutzerklärung von Google
                  </a>
               </p>
            </section>

            <section>
               <h2>5. Google Analytics</h2>
               <p>
                  Diese Website nutzt <strong>Google Analytics 4</strong>, einen
                  Webanalysedienst der Google Ireland Limited. Google Analytics
                  verwendet Cookies, die eine Analyse der Benutzung der Website
                  ermöglichen.
               </p>
               <p>
                  Wir haben Google Analytics mit IP-Anonymisierung
                  implementiert. Die erhobenen Daten umfassen:
               </p>
               <ul>
                  <li>Besuchte Seiten und Verweildauer</li>
                  <li>Verwendetes Gerät und Browser</li>
                  <li>Ungefährer Standort (Stadt/Region)</li>
                  <li>Referrer (woher Sie kamen)</li>
               </ul>
               <p>
                  Die Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1
                  S. 1 lit. a DSGVO.
               </p>
               <p>
                  Weitere Informationen:{" "}
                  <a
                     href="https://policies.google.com/privacy"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Datenschutzerklärung von Google
                  </a>
               </p>
            </section>

            <section>
               <h2>6. Google Places API</h2>
               <p>
                  Wir nutzen die <strong>Google Places API</strong>, um aktuelle
                  Informationen wie Bewertungen und Öffnungszeiten unseres
                  Restaurants anzuzeigen.
               </p>
               <p>
                  Die Abfrage erfolgt serverseitig, sodass keine direkte
                  Verbindung zwischen Ihrem Browser und Google hergestellt wird.
                  Die abgerufenen Daten werden zwischengespeichert.
               </p>
               <p>Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
            </section>

            {/* Section 7 */}
            <section>
               <h2>7. Hosting (Vercel)</h2>
               <p>
                  Unsere Website wird bei <strong>Vercel Inc.</strong> (340 S
                  Lemon Ave #4133, Walnut, CA 91789, USA) gehostet.
               </p>
               <p>
                  Bei jedem Zugriff auf unsere Website werden automatisch
                  Informationen in Server-Logfiles gespeichert. Die
                  Datenübertragung in die USA erfolgt auf Grundlage der
                  EU-Standardvertragsklauseln.
               </p>
               <p>
                  Weitere Informationen:{" "}
                  <a
                     href="https://vercel.com/legal/privacy-policy"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Datenschutzerklärung von Vercel
                  </a>
               </p>
            </section>

            <section>
               <h2>8. Cookies</h2>
               <p>
                  Unsere Website verwendet Cookies. Cookies sind kleine
                  Textdateien, die auf Ihrem Endgerät gespeichert werden.
               </p>

               <h3>Technisch notwendige Cookies</h3>
               <p>
                  Diese Cookies sind für den Betrieb der Website erforderlich
                  (z.B. Sprachauswahl, Theme-Einstellung).
               </p>

               <h3>Analyse-Cookies</h3>
               <p>
                  Mit Ihrer Einwilligung setzen wir Cookies für Google Analytics
                  ein, um die Nutzung unserer Website zu analysieren.
               </p>
            </section>

            <section>
               <h2>9. Ihre Rechte</h2>
               <p>Sie haben folgende Rechte hinsichtlich Ihrer Daten:</p>
               <ul>
                  <li>
                     <strong>Auskunftsrecht</strong> (Art. 15 DSGVO)
                  </li>
                  <li>
                     <strong>Berichtigungsrecht</strong> (Art. 16 DSGVO)
                  </li>
                  <li>
                     <strong>Löschungsrecht</strong> (Art. 17 DSGVO)
                  </li>
                  <li>
                     <strong>Einschränkung der Verarbeitung</strong> (Art. 18
                     DSGVO)
                  </li>
                  <li>
                     <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
                  </li>
                  <li>
                     <strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)
                  </li>
                  <li>
                     <strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3
                     DSGVO)
                  </li>
               </ul>
               <p>
                  Sie haben das Recht, sich bei einer
                  Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                  personenbezogenen Daten zu beschweren.
               </p>
            </section>

            <section>
               <h2>10. Änderungen dieser Datenschutzerklärung</h2>
               <p>
                  Diese Datenschutzerklärung ist aktuell gültig (Stand: Dezember
                  2025). Durch die Weiterentwicklung unserer Website oder
                  aufgrund geänderter gesetzlicher Vorgaben kann es notwendig
                  werden, diese Datenschutzerklärung zu ändern.
               </p>
            </section>
         </article>
      </div>
   )
}
