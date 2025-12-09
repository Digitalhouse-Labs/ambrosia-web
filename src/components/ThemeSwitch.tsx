"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@heroui/react"
import { Monitor, MoonStar, SunMedium } from "lucide-react"

export function ThemeSwitch() {
   const { theme, setTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   // eslint-disable-next-line react-hooks/set-state-in-effect
   useEffect(() => setMounted(true), [])

   if (!mounted) return null

   return (
      <div className="flex gap-1">
         <Button
            isIconOnly
            variant={theme === "system" ? "tertiary" : "ghost"}
            onPress={() => setTheme("system")}
            aria-label="System theme"
            size="lg"
         >
            <Monitor className="size-5" />
         </Button>
         <Button
            isIconOnly
            variant={theme === "light" ? "tertiary" : "ghost"}
            onPress={() => setTheme("light")}
            aria-label="Light theme"
            size="lg"
         >
            <SunMedium className="size-5" />
         </Button>
         <Button
            isIconOnly
            variant={theme === "dark" ? "tertiary" : "ghost"}
            onPress={() => setTheme("dark")}
            aria-label="Dark theme"
            size="lg"
         >
            <MoonStar className="size-5" />
         </Button>
      </div>
   )
}
