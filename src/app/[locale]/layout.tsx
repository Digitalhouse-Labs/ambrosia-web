import { ReactNode } from "react"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import Header from "@/components/Header"
import { ThemeProviderNext } from "@/components/ThemeProviderNext"
import { GoogleAnalytics } from "@next/third-parties/google"

export const viewport: Viewport = {
   themeColor: [
      { color: "#f4f4f5", media: "(prefers-color-scheme: light)" },
      { color: "#111111", media: "(prefers-color-scheme: dark)" },
   ],
   initialScale: 1,
   maximumScale: 5,
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ locale: string }>
}): Promise<Metadata> {
   const { locale } = await params
   const t = await getTranslations({ locale, namespace: "Metadata" })

   return {
      metadataBase: new URL("https://www.ambrosia-rueckersdorf.de"),
      alternates: {
         canonical: "/",
         languages: {
            "de-DE": "/de",
            "en-US": "/en",
         },
      },
      icons: [
         {
            rel: "icon",
            type: "image/png",
            url: "/icon.png",
         },
         {
            rel: "apple-touch-icon",
            type: "image/png",
            url: "/icon.png",
         },
      ],
      title: t("title"),
      description: t("description"),
      keywords: t.raw("keywords"),
      openGraph: {
         title: t("title"),
         description: t("ogDescription"),
         url: "https://www.ambrosia-rueckersdorf.de",
         siteName: "Ambrosia Restaurant",
         locale: locale === "de" ? "de_DE" : "en_US",
         type: "website",
      },
      twitter: {
         card: "summary_large_image",
      },
      appleWebApp: {
         capable: true,
         title: "Ambrosia Restaurant",
         statusBarStyle: "default",
      },
      robots: {
         index: true,
         follow: true,
      },
   }
}

const inter = Inter({
   subsets: ["latin"],
})

export function generateStaticParams() {
   return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
   children,
   params,
}: Readonly<{
   children: ReactNode
   params: Promise<{ locale: string }>
}>) {
   const { locale } = await params
   if (!hasLocale(routing.locales, locale)) {
      notFound()
   }

   setRequestLocale(locale)

   const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Ambrosia Restaurant",
      image: "https://www.ambrosia-rueckersdorf.de/og-image.jpg",
      url: "https://www.ambrosia-rueckersdorf.de",
      telephone: "+49 911 86044277",
      address: {
         "@type": "PostalAddress",
         streetAddress: "Hauptstraße 37",
         addressLocality: "Rückersdorf",
         postalCode: "90607",
         addressCountry: "DE",
      },
      geo: {
         "@type": "GeoCoordinates",
         latitude: 49.4935788,
         longitude: 11.2414898,
      },
      servesCuisine: "Greek",
      priceRange: "€€",
      openingHoursSpecification: [
         {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
               "Tuesday",
               "Wednesday",
               "Thursday",
               "Friday",
               "Saturday",
            ],
            opens: "17:00",
            closes: "23:00",
         },
         {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "17:00",
            closes: "22:00",
         },
      ],
      menu:
         locale === "de"
            ? "https://www.ambrosia-rueckersdorf.de/de/speisekarte"
            : "https://www.ambrosia-rueckersdorf.de/en/menu",
      acceptsReservations: "True",
   }

   return (
      <html
         suppressHydrationWarning
         lang={locale}
         className={`${inter.className} scrollbar-hidden`}
      >
         <body className="bg-background text-foreground antialiased">
            <ThemeProviderNext>
               <NextIntlClientProvider>
                  <Header />
                  {children}
               </NextIntlClientProvider>
            </ThemeProviderNext>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
               }}
            />
         </body>
         {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
         )}
      </html>
   )
}
