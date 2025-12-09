import { promises as fs } from "fs"
import { Category } from "./types"

export async function getMenu(): Promise<Category[]> {
   const file = await fs.readFile(
      process.cwd() + "/src/app/[locale]/menu/menu.json",
      "utf8",
   )
   const data: Category[] = JSON.parse(file)
   return data
}
