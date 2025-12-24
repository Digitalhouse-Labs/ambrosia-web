import { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { getTranslations } from "next-intl/server"

type Props = {
   params: Promise<{ locale: string }>
}

export default async function manifest({
   params,
}: Props): Promise<MetadataRoute.Manifest> {
   const { locale } = await params
   const t = await getTranslations({ locale, namespace: "Manifest" })

   return {
      name: siteConfig.name,
      short_name: siteConfig.shortName,
      description: t("description"),
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#000000",
      icons: [
         {
            src: "/icon.png",
            sizes: "512x512",
            type: "image/png",
         },
         {
            src: "/icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
         },
      ],
   }
}
