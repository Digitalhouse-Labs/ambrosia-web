import { Suspense } from "react"
import LogoCircle from "../../../../public/logo-circle.svg"
import ProfileHeader from "@/components/ProfileHeader"

import { getMenu } from "@/lib/products"
import { MenuList } from "@/components/MenuList"
import { MenuListSkeleton } from "@/components/MenuListSkeleton"
import { CategoryTabs } from "@/components/CategoryTabs"
import GoogleReview from "@/components/GoogleReviewButton"
import CoverMenu from "@/components/CoverMenu"

export default async function Page() {
   const menu = await getMenu()
   return (
      <main>
         <CoverMenu />
         <div className="relative -mt-12">
            <div className="mx-auto max-w-5xl px-3">
               <div className="flex flex-col gap-y-3">
                  <div className="bg-background border-surface size-20 rounded-full border">
                     <div className="flex h-full items-center justify-center">
                        <LogoCircle className="fill-foreground h-auto w-14 shrink-0" />
                     </div>
                  </div>
                  <ProfileHeader />
               </div>

               <CategoryTabs categories={menu} />

               <Suspense fallback={<MenuListSkeleton />}>
                  <MenuList menu={menu} />
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
