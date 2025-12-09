import Cover from "@/components/Cover"
import GoogleReviews from "@/components/GoogleReviews"
import { getReviews } from "@/lib/data"
import { Suspense } from "react"
import GoogleReviewsLoading from "@/components/GoogleReviewsLoading"
import { getTranslations } from "next-intl/server"

export default async function Home() {
   const t = await getTranslations("HomePage")
   const data = await getReviews()
   return (
      <>
         <div className="relative">
            <Cover />

            <div className="absolute inset-x-0 bottom-6">
               <div className="max-w-9xl mx-auto flex items-end justify-end px-3">
                  <Suspense fallback={<GoogleReviewsLoading />}>
                     <GoogleReviews data={data} />
                  </Suspense>
               </div>
            </div>
         </div>

         <div className="py-6 md:py-20">
            <div className="max-w-8xl mx-auto px-3">
               <h1 className="mb-6 text-6xl">Wo Tradition auf heute trifft</h1>
               <p className="w-full max-w-5xl text-left text-4xl leading-relaxed font-light text-balance">
                  {t("description")}
               </p>
            </div>
         </div>
      </>
   )
}
