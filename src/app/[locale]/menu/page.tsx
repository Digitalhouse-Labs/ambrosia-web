import LogoCircle from "../../../../public/logo-circle.svg"
import ProfileHeader from "@/components/ProfileHeader"
import { getMenu } from "@/lib/products"
import { MenuList } from "@/components/MenuList"
import { CategoryTabs } from "@/components/CategoryTabs"
import GoogleReview from "@/components/GoogleReviewButton"
import CoverMenu from "@/components/CoverMenu"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Metadata } from "next"
import { Suspense } from "react"
import { MenuListSkeleton } from "@/components/MenuListSkeleton"

type Props = {
   params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { locale } = await params
   const t = await getTranslations({ locale, namespace: "MenuPage" })

   return {
      title: t("metaTitle"),
      description: t("metaDescription"),
   }
}

async function MenuContent() {
   const menu = await getMenu()

   return (
      <>
         <CategoryTabs categories={menu} />
         <MenuList menu={menu} />
      </>
   )
}

export default async function Page({ params }: Props) {
   const { locale } = await params
   setRequestLocale(locale)

   return (
      <main>
         <CoverMenu />
         <div className="relative -mt-12">
            <div className="mx-auto max-w-5xl px-3">
               <div className="flex flex-col gap-y-3">
                  <div className="bg-background border-surface size-20 rounded-full border">
                     <div className="flex h-full items-center justify-center">
                        <LogoCircle className="fill-foreground h-auto w-14 shrink-0 md:w-16" />
                     </div>
                  </div>
                  <ProfileHeader />
               </div>

               <Suspense fallback={<MenuListSkeleton />}>
                  <MenuContent />
               </Suspense>

               <div className="py-12">
                  <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                     <p className="text-xs">
                        Alle Preise inkl. MwSt., angegeben in Euro (&euro;).
                     </p>
                  </div>
               </div>

               <GoogleReview />
            </div>
         </div>
      </main>
   )
}
