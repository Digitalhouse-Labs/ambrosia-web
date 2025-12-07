"use client"

import LogoAlt from "../../public/logo-alt.svg"
import Logo from "../../public/logo.svg"
import Link from "next/link"
import { Button } from "@heroui/react"
import { CalendarCheck } from "lucide-react"
import ModalMenu from "@/components/ModalMenu"
import { useTranslations } from "next-intl"

export default function Header() {
   const t = useTranslations("Header")
   return (
      <header className="relative z-40 w-full py-3">
         <div className="max-w-9xl mx-auto px-3">
            <div className="flex min-h-14 items-center gap-3">
               <div className="basis-0 md:flex md:grow">
                  <ModalMenu />
               </div>

               <div className="md:px-3">
                  <Link
                     href="/"
                     className="hidden shrink-0 md:block"
                     aria-label="Home desktop"
                  >
                     <LogoAlt className="h-auto w-48" />
                  </Link>
                  <Link
                     href="/"
                     className="block shrink-0 md:hidden"
                     aria-label="Home mobile"
                  >
                     <Logo className="h-auto w-40" />
                  </Link>
               </div>
               <div className="flex grow basis-0 justify-end gap-3">
                  <Button variant="tertiary" className="hidden md:flex">
                     <CalendarCheck />
                     {t("booking")}
                  </Button>
                  <Button
                     isIconOnly
                     variant="tertiary"
                     className="flex md:hidden"
                  >
                     <CalendarCheck />
                  </Button>
               </div>
            </div>
         </div>
      </header>
   )
}
