import "server-only"
import { cache } from "react"

export const getReviews = cache(async () => {
   const placeId = process.env.GOOGLE_PLACE_ID!
   const apiKey = process.env.GOOGLE_PLACES_API_KEY!

   const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${apiKey}`,
      {
         next: {
            revalidate: 60 * 60 * 24 * 14,
         },
      },
   )

   if (!response.ok) {
      throw new Error("Failed to fetch reviews")
   }

   const data = await response.json()

   return {
      rating: data.rating,
      totalReviews: data.userRatingCount,
   }
})
