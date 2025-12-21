import { cacheLife } from "next/cache"

export async function getReviews() {
   "use cache"

   cacheLife("weeks")

   const placeId = process.env.GOOGLE_PLACE_ID!
   const apiKey = process.env.GOOGLE_PLACES_API_KEY!

   const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,dineIn,takeout,reservable,servesBeer,servesWine,servesCocktails,servesVegetarianFood,outdoorSeating,goodForGroups,accessibilityOptions.wheelchairAccessibleEntrance,parkingOptions.freeStreetParking,allowsDogs,goodForChildren&key=${apiKey}`,
   )

   if (!response.ok) {
      throw new Error("Failed to fetch reviews")
   }

   const data = await response.json()

   return {
      rating: data.rating,
      totalReviews: data.userRatingCount,
      dineIn: data.dineIn,
      takeout: data.takeout,
      reservable: data.reservable,
      servesBeer: data.servesBeer,
      servesWine: data.servesWine,
      servesCocktails: data.servesCocktails,
      servesVegetarianFood: data.servesVegetarianFood,
      outdoorSeating: data.outdoorSeating,
      goodForGroups: data.goodForGroups,
      wheelchairAccessibleEntrance:
         data.accessibilityOptions?.wheelchairAccessibleEntrance,
      freeStreetParking: data.parkingOptions?.freeStreetParking,
      allowsDogs: data.allowsDogs,
      goodForChildren: data.goodForChildren,
   }
}
