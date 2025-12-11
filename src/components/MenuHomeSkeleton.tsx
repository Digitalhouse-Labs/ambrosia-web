import { Skeleton } from "@heroui/react"

export function MenuHomeSkeleton() {
   return (
      <div className="mt-12 flex flex-col gap-6">
         {[1, 2, 3, 4, 5, 6, 7, 8].map((itemIndex) => (
            <div className="flex flex-col gap-2" key={itemIndex}>
               <div className="flex justify-between gap-3">
                  <Skeleton className="h-4 w-48 rounded-full" />
                  <Skeleton className="h-4 w-12 rounded-full" />
               </div>
               <Skeleton className="h-4 w-96 rounded-full" />
            </div>
         ))}
      </div>
   )
}
