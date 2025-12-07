import { Skeleton, Surface } from "@heroui/react"

export default function GoogleReviewsLoading() {
   return (
      <Surface
         variant="secondary"
         className="flex w-full max-w-md flex-col gap-3 rounded-3xl p-6"
      >
         {/* Stars skeleton */}
         <div className="border-foreground/5 flex items-center justify-between gap-3 border-b pb-6">
            <div className="flex gap-2">
               {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="size-8 rounded-full" />
               ))}
            </div>
            <Skeleton className="size-8 rounded-full" />
         </div>

         {/* Footer skeleton */}
         <div className="mt-auto flex w-full items-end justify-between gap-3">
            <div className="flex gap-2">
               <Skeleton className="h-10 w-20 rounded" />
            </div>
            <div className="flex flex-col gap-y-1 pt-4">
               <Skeleton className="h-4 w-32 rounded-full" />
               <Skeleton className="h-4 w-48 rounded-full" />
            </div>
         </div>
      </Surface>
   )
}
