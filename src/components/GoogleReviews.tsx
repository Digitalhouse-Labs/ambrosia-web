"use client"

import GoogleLogo from "../../public/google-icon-logo.svg"
import { Star, StarHalf } from "lucide-react"
import { Card, Separator } from "@heroui/react"
import { useTranslations } from "next-intl"

interface GoogleReviewsProps {
   data: {
      rating: number
      totalReviews: number
   }
}

export default function GoogleReviews({ data }: GoogleReviewsProps) {
   const rating = data.rating || 0
   const fullStars = Math.floor(rating)
   const hasHalfStar = rating % 1 >= 0.5
   const t = useTranslations("GoogleReviews")

   return (
      <Card
         variant="secondary"
         className="w-full max-w-full p-4 sm:max-w-md md:p-6"
      >
         {/* Stars */}
         <div className="flex items-center justify-between gap-3">
            <div className="relative">
               {/* Background stars (empty) */}
               <div className="flex gap-2">
                  {Array.from({ length: 5 }, (_, i) => (
                     <Star
                        key={`bg-${i}`}
                        className="size-6 md:size-8"
                        fill="#555"
                        strokeWidth={0}
                     />
                  ))}
               </div>

               {/* Foreground stars (filled) */}
               <div className="absolute top-0 flex gap-2">
                  {Array.from({ length: fullStars }, (_, i) => (
                     <Star
                        key={`full-${i}`}
                        className="size-6 md:size-8"
                        strokeWidth={0}
                        fill="#ccb187"
                     />
                  ))}
                  {hasHalfStar && (
                     <StarHalf
                        className="size-6 md:size-8"
                        strokeWidth={0}
                        fill="#ccb187"
                     />
                  )}
               </div>
            </div>
            <GoogleLogo className="size-6 shrink-0" />
         </div>

         <Separator className="my-1" />

         <Card.Footer className="mt-auto flex w-full items-end justify-between gap-3">
            <div className="flex gap-2">
               <span className="text-4xl font-medium">{rating.toFixed(1)}</span>
               <span className="text-sm">/ 5</span>
            </div>
            <div className="flex flex-col gap-y-1">
               <div className="text-lg md:text-xl">{t("excellent")}</div>
               <div className="text-sm font-light">
                  {t("basedOn", {
                     count: data.totalReviews,
                     reviews: data.totalReviews?.toLocaleString(),
                  })}
               </div>
            </div>
         </Card.Footer>
      </Card>
   )
}
