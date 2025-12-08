"use client"

import { InfoModal } from "@/components/InfoModal"

export default function ProfileHeader() {
   return (
      <div className="flex items-center justify-between">
         <h1 className="text-default-foreground text-xl font-bold">
            Ambrosia Restaurant
         </h1>
         <InfoModal />
      </div>
   )
}
