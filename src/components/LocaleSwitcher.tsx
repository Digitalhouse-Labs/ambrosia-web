"use client"

import { Locale, useLocale, useTranslations } from "next-intl"
import { routing } from "@/i18n/routing"
import { useParams } from "next/navigation"
import { useTransition } from "react"
import { usePathname, useRouter } from "@/i18n/navigation"
import type { Selection } from "@heroui/react"
import { Button, Dropdown, Label } from "@heroui/react"
import { ChevronRight, Languages } from "lucide-react"

export default function LocaleSwitcher() {
   const t = useTranslations("LocaleSwitcher")
   const locale = useLocale()
   const router = useRouter()
   const [isPending, startTransition] = useTransition()
   const pathname = usePathname()
   const params = useParams()

   function onLocaleChange(keys: Selection) {
      const value = Array.from(keys)[0]
      if (!value) return

      const nextLocale = value as Locale
      startTransition(() => {
         router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: nextLocale },
         )
      })
   }

   return (
      <Dropdown>
         <Button
            variant="ghost"
            isDisabled={isPending}
            aria-label={t("label")}
            className="min-h-13 w-full justify-start gap-4 px-4 text-left text-[16px] opacity-70"
         >
            <Languages className="size-6" />
            <span className="grow">{t("changeLanguage")}</span>
            <ChevronRight className="size-4" />
         </Button>
         <Dropdown.Popover placement="top right">
            <Dropdown.Menu
               aria-label={t("label")}
               selectedKeys={[locale]}
               selectionMode="single"
               onSelectionChange={onLocaleChange}
            >
               {routing.locales.map((cur) => (
                  <Dropdown.Item
                     key={cur}
                     id={cur}
                     textValue={t("locale", { locale: cur })}
                  >
                     <Dropdown.ItemIndicator />
                     <Label>{t("locale", { locale: cur })}</Label>
                  </Dropdown.Item>
               ))}
            </Dropdown.Menu>
         </Dropdown.Popover>
      </Dropdown>
   )
}
