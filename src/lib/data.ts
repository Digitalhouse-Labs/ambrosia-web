import { cacheLife } from "next/cache"

export async function getReviews() {
   "use cache"

   cacheLife("weeks")

   const placeId = process.env.GOOGLE_PLACE_ID!
   const apiKey = process.env.GOOGLE_PLACES_API_KEY!

   const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${apiKey}`,
   )

   if (!response.ok) {
      throw new Error("Failed to fetch reviews")
   }

   const data = await response.json()

   return {
      rating: data.rating,
      totalReviews: data.userRatingCount,
   }
}
