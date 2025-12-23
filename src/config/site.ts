export const siteConfig = {
   name: "Ambrosia Restaurant",
   shortName: "Ambrosia",
   url: process.env.NEXT_PUBLIC_SITE_URL || "localhost:3000",
   ogImage: "/og-image.jpg",
   links: {
      facebook: "https://facebook.com/resambrosia",
      instagram: "https://instagram.com/resambrosia",
      googleMaps: "https://maps.app.goo.gl/YM72KkujVzyrEVzM6",
      googleReview: "https://g.page/r/CS26eyD7IXecEAE/review",
   },
   contact: {
      phone: "+49 911 86044277",
      email: "info@ambrosia-rueckersdorf.de",
      street: "Hauptstraße 37",
      city: "Rückersdorf",
      postalCode: "90607",
      addressCountry: "DE",
   },
   geo: {
      latitude: 49.4935788,
      longitude: 11.2414898,
   },
   openingHours: [
      {
         days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         opens: "17:00",
         closes: "23:00",
      },
      {
         days: ["Sunday"],
         opens: "17:00",
         closes: "22:00",
      },
   ],
   legal: {
      representedBy: "Antonia Siouta",
      vatId: "DE370541669",
      privacyLastUpdated: "11. Dezember 2025",
      authority: {
         name: "Landratsamt Nürnberger Land",
         street: "Waldluststraße 1",
         postalCode: "91207",
         city: "Lauf an der Pegnitz",
      },
   },
} as const

export type SiteConfig = typeof siteConfig
