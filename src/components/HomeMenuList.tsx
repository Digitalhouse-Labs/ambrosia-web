"use client"

import { MenuItem } from "@/lib/types"
import { Link } from "@/i18n/navigation"
import { buttonVariants } from "@heroui/react"
import { useTranslations } from "next-intl"

interface MenuListProps {
   items: MenuItem[]
}

export default function HomeMenuList({ items }: MenuListProps) {
   const t = useTranslations("HomePage")

   return (
      <>
         <ul className="divide-default flex flex-col divide-y *:py-4">
            {items.map((item, index) => (
               <li key={index} className="flex justify-between">
                  <div>
                     <h3 className="font-medium">{item.name}</h3>
                     <p className="text-foreground/75 text-sm">
                        {item.description}
                     </p>
                  </div>
                  <span className="font-semibold text-nowrap">
                     {item.price} &euro;
                  </span>
               </li>
            ))}
         </ul>
         <Link
            className={buttonVariants({
               size: "lg",
               variant: "ghost",
               className: "w-full",
            })}
            href="/menu"
         >
            {t("viewFullMenu")}
         </Link>
      </>
   )
}
