"use client"

import Image from "next/image"
import cover from "../../public/cover.jpg"

export default function Cover() {
   return (
      <div className="relative -mt-20 h-[80svh] overflow-hidden md:h-svh">
         <Image
            src={cover}
            fill
            loading="eager"
            fetchPriority="high"
            alt="Ambrosia restaurant"
            className="object-cover"
            sizes="100vw"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-transparent" />
      </div>
   )
}
