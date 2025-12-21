import { Skeleton } from "@heroui/react"

export default function BusinessHighlightsSkeleton() {
   return (
      <div className="flex flex-1 items-center gap-3 overflow-hidden">
         {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-13 w-36 shrink-0 rounded-2xl" />
         ))}
      </div>
   )
}
