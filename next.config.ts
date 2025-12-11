import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
   cacheComponents: true,
   reactCompiler: true,
   experimental: {
      optimizePackageImports: ["@heroui/react", "lucide-react"],
   },
   images: {
      formats: ["image/avif", "image/webp"],
   },
   turbopack: {
      rules: {
         "*.svg": {
            loaders: [
               {
                  loader: "@svgr/webpack",
                  options: {
                     dimensions: false,
                  },
               },
            ],
            as: "*.js",
         },
      },
   },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
