"use client"

import {
   Accessibility,
   Baby,
   Beer,
   CalendarCheck,
   ChevronRight,
   Dog,
   Leaf,
   Martini,
   ParkingCircle,
   ShoppingBag,
   Sun,
   Users,
   Utensils,
   Wine,
} from "lucide-react"
import { useTranslations } from "next-intl"
import { Button, Modal, ScrollShadow, Surface } from "@heroui/react"

interface BusinessHighlightsProps {
   data: {
      dineIn?: boolean
      takeout?: boolean
      reservable?: boolean
      servesBeer?: boolean
      servesWine?: boolean
      servesCocktails?: boolean
      servesVegetarianFood?: boolean
      outdoorSeating?: boolean
      goodForGroups?: boolean
      goodForChildren?: boolean
      allowsDogs?: boolean
      wheelchairAccessibleEntrance?: boolean
      freeStreetParking?: boolean
   }
}

export default function BusinessHighlights({ data }: BusinessHighlightsProps) {
   const t = useTranslations("BusinessHighlights")

   const highlights = [
      { key: "dineIn", icon: Utensils, label: t("dineIn"), value: data.dineIn },
      {
         key: "takeout",
         icon: ShoppingBag,
         label: t("takeout"),
         value: data.takeout,
      },
      {
         key: "reservable",
         icon: CalendarCheck,
         label: t("reservable"),
         value: data.reservable,
      },
      {
         key: "servesBeer",
         icon: Beer,
         label: t("servesBeer"),
         value: data.servesBeer,
      },
      {
         key: "servesWine",
         icon: Wine,
         label: t("servesWine"),
         value: data.servesWine,
      },
      {
         key: "servesCocktails",
         icon: Martini,
         label: t("servesCocktails"),
         value: data.servesCocktails,
      },
      {
         key: "servesVegetarianFood",
         icon: Leaf,
         label: t("servesVegetarianFood"),
         value: data.servesVegetarianFood,
      },
      {
         key: "outdoorSeating",
         icon: Sun,
         label: t("outdoorSeating"),
         value: data.outdoorSeating,
      },
      {
         key: "goodForGroups",
         icon: Users,
         label: t("goodForGroups"),
         value: data.goodForGroups,
      },
      {
         key: "goodForChildren",
         icon: Baby,
         label: t("goodForChildren"),
         value: data.goodForChildren,
      },
      {
         key: "allowsDogs",
         icon: Dog,
         label: t("allowsDogs"),
         value: data.allowsDogs,
      },
      {
         key: "wheelchairAccessible",
         icon: Accessibility,
         label: t("wheelchairAccessible"),
         value: data.wheelchairAccessibleEntrance,
      },
      {
         key: "freeParking",
         icon: ParkingCircle,
         label: t("freeParking"),
         value: data.freeStreetParking,
      },
   ].filter((item) => item.value === true)

   if (highlights.length === 0) return null

   return (
      <div className="flex flex-col gap-y-6">
         <h2 className="text-3xl font-extralight">{t("title")}</h2>

         <div className="flex items-center gap-3">
            <ScrollShadow orientation="horizontal" hideScrollBar>
               <div className="flex items-center gap-2">
                  {highlights.map((item) => (
                     <Surface
                        key={item.key}
                        className="flex min-h-13 items-center gap-2 rounded-xl px-4"
                     >
                        <item.icon className="size-4" />
                        <span className="text-sm text-nowrap">
                           {item.label}
                        </span>
                     </Surface>
                  ))}
               </div>
            </ScrollShadow>

            <Modal>
               <Modal.Trigger>
                  <Button
                     variant="tertiary"
                     className="min-h-13 shrink-0 rounded-2xl"
                  >
                     {t("showAll")}
                     <ChevronRight className="size-4" />
                  </Button>
               </Modal.Trigger>
               <Modal.Backdrop>
                  <Modal.Container>
                     <Modal.Dialog className="max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                           <Modal.Heading>{t("title")}</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                           <ScrollShadow
                              size={80}
                              hideScrollBar
                              className="h-full"
                           >
                              <div className="divide-foreground/5 grid grid-cols-1 divide-y">
                                 {highlights.map((item) => (
                                    <div
                                       key={item.key}
                                       className="flex items-center gap-3 py-6"
                                    >
                                       <item.icon className="text-foreground size-6" />
                                       <span className="text-foreground">
                                          {item.label}
                                       </span>
                                    </div>
                                 ))}
                              </div>
                           </ScrollShadow>
                        </Modal.Body>
                     </Modal.Dialog>
                  </Modal.Container>
               </Modal.Backdrop>
            </Modal>
         </div>
      </div>
   )
}
