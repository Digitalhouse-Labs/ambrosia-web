import Cover from "@/components/Cover"
import GoogleReviews from "@/components/GoogleReviews"
import { getReviews } from "@/lib/data"
import { Suspense } from "react"
import GoogleReviewsLoading from "@/components/GoogleReviewsLoading"
import { getTranslations } from "next-intl/server"
import { getMenu } from "@/lib/products"
import LogoCircle from "../../../public/logo-circle.svg"
import HomeMenuList from "@/components/HomeMenuList"
import Gallery from "@/components/ImageSlider"

export default async function Home() {
   const t = await getTranslations("HomePage")
   const reviews = await getReviews()

   const menu = await getMenu()
   const category = menu.find((c) => c.id === "10")

   if (!category) return <p>Category not found</p>

   return (
      <>
         <div className="relative">
            <Cover />

            <div className="absolute inset-x-0 bottom-3 md:bottom-6">
               <div className="max-w-9xl mx-auto flex items-end justify-end px-3">
                  <Suspense fallback={<GoogleReviewsLoading />}>
                     <GoogleReviews data={reviews} />
                  </Suspense>
               </div>
            </div>
         </div>

         <div className="py-16 md:py-28">
            <div className="max-w-8xl mx-auto px-3">
               <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-20">
                  <div className="space-y-6">
                     <div className="flex items-start justify-between gap-3">
                        <h2 className="text-5xl font-extralight">
                           {t("houseFavorites")}
                        </h2>
                        <LogoCircle className="h-auto w-10 shrink-0" />
                     </div>
                     <HomeMenuList items={category.menuItems} />
                  </div>
                  <div className="lg:p-6">
                     <h1 className="mb-6 text-center text-5xl font-extralight text-balance md:text-left">
                        Wo Tradition auf heute trifft
                     </h1>
                     <p className="w-full text-center text-lg leading-relaxed font-light text-balance md:max-w-5xl md:text-left">
                        {t("description")}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <Gallery />
      </>
   )
}
