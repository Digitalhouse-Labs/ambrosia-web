"use client"

import Image from "next/image"
import cover from "../../public/cover.jpg"

export default function CoverMenu() {
   return (
      <div className="relative -mt-20 h-[25svh] overflow-hidden md:h-[30svh]">
         <Image
            src={cover}
            fill
            priority
            loading="eager"
            alt="Ambrosia restaurant"
            className="object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-transparent" />
      </div>
   )
}
