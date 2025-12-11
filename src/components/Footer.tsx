"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import Facebook from "../../public/facebook.svg"
import Instagram from "../../public/instagram.svg"

export default function Footer() {
   const t = useTranslations("Footer")

   return (
      <footer className="pt-16 pb-8 md:pt-28 md:pb-12">
         <div className="max-w-8xl mx-auto px-3">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
               <div className="flex flex-col items-center gap-1 text-center md:flex-row md:gap-4">
                  <span className="text-foreground/75 text-sm">
                     &copy; {new Date().getFullYear()} Ambrosia Restaurant.{" "}
                     {t("rights")}
                  </span>
                  <span className="hidden md:block" aria-hidden="true">
                     &middot;
                  </span>
                  <ul className="flex items-center gap-3 text-sm *:hover:underline *:hover:underline-offset-4">
                     <li>
                        <Link href="/imprint">{t("terms")}</Link>
                     </li>
                     <li>
                        <Link href="/privacy">{t("privacy")}</Link>
                     </li>
                  </ul>
               </div>
               <div className="flex items-center gap-x-6">
                  <Link
                     href="https://www.facebook.com/resambrosia"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Facebook className="text-foreground h-auto w-6 shrink-0" />
                  </Link>
                  <Link
                     href="https://www.instagram.com/resambrosia"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Instagram className="text-foreground h-auto w-6 shrink-0" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   )
}
