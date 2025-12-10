"use client"

import LogoAlt from "../../public/logo-alt.svg"
import Logo from "../../public/logo.svg"
import { Button } from "@heroui/react"
import { CalendarCheck } from "lucide-react"
import MenuModal from "@/components/MenuModal"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function Header() {
   const t = useTranslations("Header")
   return (
      <header className="relative z-40 w-full py-3">
         <div className="max-w-9xl mx-auto px-3">
            <div className="flex min-h-14 items-center gap-3">
               <div className="flex grow basis-0">
                  <MenuModal />
               </div>

               <div className="md:px-3">
                  <Link
                     href="/"
                     className="hidden shrink-0 md:block"
                     aria-label="Ambrosia griechisches restaurant"
                  >
                     <LogoAlt className="h-auto w-48" />
                  </Link>
                  <Link
                     href="/"
                     className="block shrink-0 md:hidden"
                     aria-label="Home mobile"
                  >
                     <Logo className="h-auto w-52" />
                  </Link>
               </div>
               <div className="flex grow basis-0 justify-end gap-3">
                  <Button variant="tertiary" asChild className="hidden md:flex">
                     <Link href="/reservation">
                        <CalendarCheck />
                        {t("booking")}
                     </Link>
                  </Button>
                  <Button
                     variant="tertiary"
                     isIconOnly
                     asChild
                     className="flex md:hidden"
                  >
                     <Link href="/reservation" aria-label={t("booking")}>
                        <CalendarCheck />
                     </Link>
                  </Button>
               </div>
            </div>
         </div>
      </header>
   )
}
