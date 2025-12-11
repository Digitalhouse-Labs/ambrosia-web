import { Skeleton } from "@heroui/react"

export function MenuListSkeleton() {
   return (
      <>
         <Skeleton className="my-6 h-10 w-full rounded-full" />
         <div className="flex flex-col gap-8">
            {[1, 2, 3].map((categoryIndex) => (
               <section key={categoryIndex} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                     <Skeleton className="h-4 w-48 rounded-full" />
                     <Skeleton className="h-4 w-96 rounded-full" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                     {[1, 2, 3, 4].map((itemIndex) => (
                        <div key={itemIndex}>
                           <Skeleton className="h-32 w-full rounded-3xl" />
                        </div>
                     ))}
                  </div>
               </section>
            ))}
         </div>
      </>
   )
}
