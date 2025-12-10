"use client"

import { Button, CloseButton, Modal, Surface } from "@heroui/react"
import Hamburger from "../../public/hamburger.svg"
import {
   BookOpen,
   CalendarCheck,
   ExternalLink,
   Home,
   PhoneCall,
   Route,
   X,
} from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import LogoCircle from "../../public/logo-circle.svg"
import LocaleSwitcher from "@/components/LocaleSwitcher"
import { ThemeSwitch } from "@/components/ThemeSwitch"

export default function MenuModal() {
   const router = useRouter()
   const locale = useLocale()
   const pathname = usePathname()
   const t = useTranslations("Navigation")
   const isHome = pathname === `/${locale}` || pathname === "/"
   const isMenu = pathname === `/${locale}/menu` || pathname === "/menu"
   const isReservation =
      pathname === `/${locale}/reservation` || pathname === "/reservation"

   const handleNavigateHome = (close: () => void) => {
      close()
      router.push("/")
   }

   return (
      <Modal key={pathname}>
         <Modal.Trigger>
            <div
               className={`group flex items-center gap-2 ${isHome || isMenu ? "text-white" : "text-foreground"}`}
            >
               <Hamburger className="ease-out-quart size-9 group-hover:scale-[0.97] group-hover:transition-transform" />
               <span className="hidden text-sm font-medium md:flex">
                  {t("menu")}
               </span>
            </div>
         </Modal.Trigger>
         <Modal.Container>
            <Modal.Dialog className="sm:min-w-[430px]">
               {({ close }) => (
                  <>
                     <Modal.Header className="pb-3">
                        <div className="flex items-center justify-between">
                           <LogoCircle className="size-6" />
                           <CloseButton onPress={close}>
                              <X />
                           </CloseButton>
                        </div>
                     </Modal.Header>
                     <Modal.Body className="flex flex-col gap-y-1 p-3">
                        <Button
                           variant="ghost"
                           onPress={() => handleNavigateHome(close)}
                           className={`min-h-13 w-full justify-start gap-4 px-4 text-[16px] opacity-70 transition-colors ${
                              isHome ? "bg-default/80" : ""
                           }`}
                        >
                           <Home className="size-6" />
                           {t("home")}
                        </Button>
                        <Button
                           variant="ghost"
                           asChild
                           className={`min-h-13 w-full justify-start gap-4 px-4 text-[16px] opacity-70 ${
                              isMenu ? "bg-default/80" : ""
                           }`}
                        >
                           <Link href="/menu">
                              <BookOpen className="size-6" />
                              {t("menuCard")}
                           </Link>
                        </Button>
                        <Button
                           variant="ghost"
                           asChild
                           className={`min-h-13 w-full justify-start gap-4 px-4 text-[16px] opacity-70 ${
                              isReservation ? "bg-default/80" : ""
                           }`}
                        >
                           <Link href="/reservation">
                              <CalendarCheck className="size-6" />
                              {t("reservation")}
                           </Link>
                        </Button>
                        <a
                           href="tel:+4991186044277"
                           className="button button--md button--ghost min-h-13 w-full justify-start gap-4 px-4 text-[16px] opacity-70"
                        >
                           <PhoneCall className="size-6" />
                           {t("callUs")}
                        </a>
                        <a
                           target="_blank"
                           rel="noopener noreferrer"
                           href="https://maps.app.goo.gl/YM72KkujVzyrEVzM6"
                           className="button button--md button--ghost min-h-13 w-full justify-start gap-4 px-4 text-[16px] opacity-70"
                        >
                           <Route className="size-6" />
                           <span className="grow">{t("directions")}</span>
                           <ExternalLink className="size-4" />
                        </a>
                        <LocaleSwitcher />
                        <Surface
                           variant="secondary"
                           className="mt-3 rounded-2xl p-3"
                        >
                           <div className="flex flex-col gap-y-3">
                              {t("appearance")}
                              <ThemeSwitch />
                           </div>
                        </Surface>
                     </Modal.Body>
                  </>
               )}
            </Modal.Dialog>
         </Modal.Container>
      </Modal>
   )
}
