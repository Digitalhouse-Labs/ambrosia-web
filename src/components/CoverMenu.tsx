"use client"

import Image from "next/image"
import cover from "../../public/cover.jpg"

export default function CoverMenu() {
   return (
      <div className="relative -mt-20 h-[25svh] overflow-hidden md:h-[30svh]">
         <Image
            src={cover}
            fill
            fetchPriority="high"
            sizes="100vw"
            alt="Ambrosia restaurant"
            className="object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-transparent" />
      </div>
   )
}
