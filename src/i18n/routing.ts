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
   },
})
