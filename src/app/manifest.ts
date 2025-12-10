import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: "Ambrosia Restaurant",
      short_name: "Ambrosia",
      description:
         "Griechisches Restaurant in Rückersdorf bei Nürnberg. Authentische griechische Küche, frische Zutaten und herzliche Gastfreundschaft.",
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
