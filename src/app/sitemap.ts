import { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"

const baseUrl = "https://www.ambrosia-rueckersdorf.de"

export default function sitemap(): MetadataRoute.Sitemap {
   return Object.entries(routing.pathnames).map(([, pathConfig]) => {
      const dePath = typeof pathConfig === "string" ? pathConfig : pathConfig.de
      const enPath = typeof pathConfig === "string" ? pathConfig : pathConfig.en

      return {
         url: `${baseUrl}/de${dePath === "/" ? "" : dePath}`,
         lastModified: new Date(),
         alternates: {
            languages: {
               de: `${baseUrl}/de${dePath === "/" ? "" : dePath}`,
               en: `${baseUrl}/en${enPath === "/" ? "" : enPath}`,
            },
         },
      }
   })
}
