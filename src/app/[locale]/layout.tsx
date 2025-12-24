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
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister"
import Footer from "@/components/Footer"
import { siteConfig } from "@/config/site"

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
      metadataBase: new URL(siteConfig.url),
      alternates: {
         canonical: `/${locale}`,
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
         url: siteConfig.url,
         siteName: siteConfig.name,
         locale: locale === "de" ? "de_DE" : "en_US",
         type: "website",
         images: [
            {
               url: `${siteConfig.url}${siteConfig.ogImage}`,
               alt: siteConfig.name,
            },
         ],
      },
      twitter: {
         card: "summary_large_image",
      },
      appleWebApp: {
         capable: true,
         title: siteConfig.name,
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
   modal,
}: Readonly<{
   children: ReactNode
   modal: ReactNode
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
      name: siteConfig.name,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      address: {
         "@type": "PostalAddress",
         streetAddress: siteConfig.contact.street,
         addressLocality: siteConfig.contact.city,
         postalCode: siteConfig.contact.postalCode,
         addressCountry: siteConfig.contact.addressCountry,
      },
      geo: {
         "@type": "GeoCoordinates",
         latitude: siteConfig.geo.latitude,
         longitude: siteConfig.geo.longitude,
      },
      servesCuisine: "Greek",
      priceRange: "€€",
      openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
         "@type": "OpeningHoursSpecification",
         dayOfWeek: hours.days,
         opens: hours.opens,
         closes: hours.closes,
      })),
      menu:
         locale === "de"
            ? `${siteConfig.url}/de/speisekarte`
            : `${siteConfig.url}/en/menu`,
      acceptsReservations: "True",
   }

   return (
      <html
         suppressHydrationWarning
         lang={locale}
         className={`${inter.className}`}
      >
         <body className="bg-background text-foreground antialiased">
            <ServiceWorkerRegister />
            <ThemeProviderNext>
               <NextIntlClientProvider>
                  <Header />
                  <main>{children}</main>
                  {modal}
                  <Footer />
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
