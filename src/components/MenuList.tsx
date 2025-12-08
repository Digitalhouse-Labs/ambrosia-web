"use client"

import { Card, Chip } from "@heroui/react"
import { Category } from "@/lib/types"
import { BottleWine, Wine } from "lucide-react"

interface MenuListProps {
   menu: Category[]
}

export function MenuList({ menu }: MenuListProps) {
   return (
      <div className="relative z-30 flex flex-col gap-8">
         {menu.map((category) => (
            <section
               key={category.id}
               id={`category-${category.id}`}
               className="flex scroll-mt-32 flex-col gap-6"
            >
               {/* Category Header */}
               <div className="flex flex-col gap-0.5">
                  <h2 className="text-lg font-semibold">{category.name}</h2>
                  {category.description && (
                     <p className="text-muted text-sm/relaxed">
                        {category.description}
                     </p>
                  )}
                  {category.schedule && (
                     <p className="text-muted text-xs italic">
                        {category.schedule}
                     </p>
                  )}
               </div>

               {/* Menu Items */}
               <div className="grid gap-4 sm:grid-cols-2">
                  {category.menuItems.map((item, index) => (
                     <Card key={`${category.id}-${index}`}>
                        <Card.Header>
                           <Card.Title className="flex items-center gap-2 font-semibold">
                              {item.name}
                              {item.isPremium && <Chip size="sm">Premium</Chip>}
                           </Card.Title>
                           {item.subtitle && (
                              <Card.Description>
                                 {item.subtitle && <span>{item.subtitle}</span>}
                              </Card.Description>
                           )}
                           {item.isAgeRestricted && (
                              <div className="absolute top-4 right-4">
                                 <Chip size="sm">18+</Chip>
                              </div>
                           )}
                        </Card.Header>
                        {item.description && (
                           <Card.Content>
                              <p className="text-sm/relaxed">
                                 {item.description}
                              </p>
                           </Card.Content>
                        )}
                        <Card.Footer>
                           {item.priceBottle ? (
                              <div className="flex items-center gap-4">
                                 <div className="flex items-center gap-2">
                                    <Wine strokeWidth={1} size="18" />
                                    <p className="text-sm font-semibold">
                                       {item.price} &euro;
                                    </p>
                                 </div>
                                 <div className="flex items-center gap-2">
                                    <BottleWine strokeWidth={1} size="18" />
                                    <p className="text-sm font-semibold">
                                       {item.priceBottle} &euro;
                                    </p>
                                 </div>
                              </div>
                           ) : (
                              <p className="text-sm font-semibold">
                                 {item.price} &euro;
                              </p>
                           )}
                        </Card.Footer>
                     </Card>
                  ))}
               </div>
            </section>
         ))}
      </div>
   )
}
