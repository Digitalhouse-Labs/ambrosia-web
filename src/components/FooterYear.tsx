import { getCurrentYear } from "@/lib/utils"

export default async function FooterYear() {
   const year = await getCurrentYear()
   return <>{year}</>
}
