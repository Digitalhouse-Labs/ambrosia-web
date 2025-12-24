import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
   locales: ["de", "en"],
   defaultLocale: "de",
   pathnames: {
      "/": "/",
      "/menu": {
         de: "/speisekarte",
         en: "/menu",
      },
      "/reservation": {
         de: "/reservierung",
         en: "/reservation",
      },
      "/imprint": {
         de: "/impressum",
         en: "/imprint",
      },
      "/privacy": {
         de: "/datenschutz",
         en: "/privacy",
      },
      "/learn-greek": {
         de: "/griechisch-lernen",
         en: "/learn-greek",
      },
   },
})
