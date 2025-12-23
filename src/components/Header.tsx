"use client"

import LogoAlt from "../../public/logo-alt.svg"
import Logo from "../../public/logo.svg"
import { buttonVariants } from "@heroui/react"
import { CalendarCheck } from "lucide-react"
import MenuModal from "@/components/MenuModal"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { siteConfig } from "@/config/site"

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
                     aria-label={`${siteConfig.shortName} griechisches restaurant`}
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
                  <Link
                     className={buttonVariants({
                        variant: "tertiary",
                        className: "hidden md:flex",
                     })}
                     href="/reservation"
                     aria-label={t("booking")}
                  >
                     <CalendarCheck />
                     {t("booking")}
                  </Link>

                  <Link
                     className={buttonVariants({
                        variant: "tertiary",
                        isIconOnly: true,
                        className: "flex md:hidden",
                     })}
                     href="/reservation"
                     aria-label={t("booking")}
                  >
                     <CalendarCheck />
                  </Link>
               </div>
            </div>
         </div>
      </header>
   )
}
