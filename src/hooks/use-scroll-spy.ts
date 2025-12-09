"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[], offset = 0.2) {
   const [activeId, setActiveId] = useState<string>(ids[0] ?? "")

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            const intersecting = entries.filter((e) => e.isIntersecting)
            if (intersecting.length > 0) {
               const topEntry = intersecting.reduce((prev, curr) =>
                  prev.boundingClientRect.top < curr.boundingClientRect.top
                     ? prev
                     : curr,
               )
               const id = topEntry.target.id.replace("category-", "")
               setActiveId(id)
            }
         },
         {
            root: null,
            rootMargin: `-${offset * 100}% 0px -${(1 - offset) * 100 - 10}% 0px`,
            threshold: 0,
         },
      )

      ids.forEach((id) => {
         const el = document.getElementById(`category-${id}`)
         if (el) observer.observe(el)
      })

      return () => observer.disconnect()
   }, [ids, offset])

   return activeId
}
