import Cover from "@/components/Cover"
import GoogleReview from "@/components/GoogleReview"
import { getReviews } from "@/lib/data"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getMenu } from "@/lib/products"
import LogoCircle from "../../../public/logo-circle.svg"
import HomeMenuList from "@/components/HomeMenuList"
import Gallery from "@/components/ImageSlider"
import { Suspense } from "react"
import GoogleReviewLoading from "@/components/GoogleReviewSkeleton"
import { MenuHomeSkeleton } from "@/components/MenuHomeSkeleton"
import BusinessHighlights from "@/components/BusinessHighlights"
import BusinessHighlightsSkeleton from "@/components/BusinessHighlightsSkeleton"

type Props = {
   params: Promise<{ locale: string }>
}

async function GoogleReviewWrapper() {
   const reviews = await getReviews()
   return <GoogleReview data={reviews} />
}

async function HomeMenuListWrapper() {
   const menu = await getMenu()
   const category = menu.find((c) => c.id === "10")

   if (!category) return <p>Category not found</p>

   return <HomeMenuList items={category.menuItems} />
}

async function BusinessHighlightsWrapper() {
   const data = await getReviews()
   return <BusinessHighlights data={data} />
}

export default async function Home({ params }: Props) {
   const { locale } = await params
   setRequestLocale(locale)

   const t = await getTranslations({ locale, namespace: "HomePage" })

   return (
      <>
         <div className="relative">
            <Cover />

            <div className="absolute inset-x-0 bottom-3 md:bottom-6">
               <div className="max-w-9xl mx-auto flex items-end justify-end px-3">
                  <Suspense fallback={<GoogleReviewLoading />}>
                     <GoogleReviewWrapper />
                  </Suspense>
               </div>
            </div>
         </div>

         <div className="py-16 md:py-28">
            <div className="max-w-8xl mx-auto px-3">
               <div className="mb-16 md:mb-28">
                  <div className="flex flex-col gap-y-6">
                     <h2 className="text-3xl font-extralight">
                        {t("highlightTitle")}
                     </h2>
                     <Suspense fallback={<BusinessHighlightsSkeleton />}>
                        <BusinessHighlightsWrapper />
                     </Suspense>
                  </div>
               </div>
               <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-20">
                  <div className="space-y-6">
                     <div className="flex items-start justify-between gap-3">
                        <h2 className="text-5xl font-extralight">
                           {t("houseFavorites")}
                        </h2>
                        <LogoCircle className="h-auto w-10 shrink-0" />
                     </div>
                     <Suspense fallback={<MenuHomeSkeleton />}>
                        <HomeMenuListWrapper />
                     </Suspense>
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
