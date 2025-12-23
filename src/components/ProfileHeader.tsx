"use client"

import { InfoModal } from "@/components/InfoModal"
import { siteConfig } from "@/config/site"

export default function ProfileHeader() {
   return (
      <div className="flex items-center justify-between">
         <h1 className="text-default-foreground text-xl font-bold">
            {siteConfig.name}
         </h1>
         <InfoModal />
      </div>
   )
}
