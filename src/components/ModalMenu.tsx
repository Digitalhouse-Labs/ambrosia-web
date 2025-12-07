"use client"

import { Button, CloseButton, Modal } from "@heroui/react"
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

export default function ModalMenu() {
   const router = useRouter()
   const locale = useLocale()
   const pathname = usePathname()
   const t = useTranslations("Navigation")
   const isHome = pathname === `/${locale}` || pathname === "/"

   const handleNavigateHome = (close: () => void) => {
      close()
      router.push("/")
   }

   return (
      <Modal>
         <Modal.Trigger>
            <div className="group flex items-center gap-3">
               <Hamburger className="ease-out-quart text-accent size-8 group-hover:scale-[0.97] group-hover:transition-transform md:size-11" />
               <span className="hidden font-medium text-white uppercase md:block">
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
                        <Link
                           href="/menu"
                           className="button button--md button--ghost min-h-13 w-full justify-start gap-4 px-4 text-[16px] opacity-70"
                        >
                           <BookOpen className="size-6" />
                           {t("menuCard")}
                        </Link>
                        <Link
                           href="/reservation"
                           className="button button--md button--ghost min-h-13 w-full justify-start gap-4 px-4 text-[16px] opacity-70"
                        >
                           <CalendarCheck className="size-6" />
                           {t("reservation")}
                        </Link>
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
                     </Modal.Body>
                     {/*<Modal.Footer>*/}
                     {/*   <Button variant="tertiary" onPress={close}>*/}
                     {/*      {t("close")}*/}
                     {/*   </Button>*/}
                     {/*</Modal.Footer>*/}
                  </>
               )}
            </Modal.Dialog>
         </Modal.Container>
      </Modal>
   )
}
