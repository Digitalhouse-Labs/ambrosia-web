"use client"

import { Key, useEffect, useMemo, useRef, useState } from "react"
import {
   Button,
   Label,
   ListBox,
   Modal,
   Tabs,
   useOverlayState,
} from "@heroui/react"
import { Category } from "@/lib/types"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { ListChevronsDownUp } from "lucide-react"

interface CategoryTabsProps {
   categories: Category[]
}

export function CategoryTabs({ categories }: CategoryTabsProps) {
   const ids = useMemo(() => categories.map((c) => c.id), [categories])
   const activeId = useScrollSpy(ids)
   const modal = useOverlayState()
   const listRef = useRef<HTMLDivElement>(null)
   const stickyRef = useRef<HTMLDivElement>(null)
   const [isSticky, setIsSticky] = useState(false)

   useEffect(() => {
      const el = stickyRef.current
      if (!el) return

      const observer = new IntersectionObserver(
         ([entry]) => {
            setIsSticky(!entry.isIntersecting)
         },
         { threshold: 1, rootMargin: "-1px 0px 0px 0px" },
      )

      observer.observe(el)
      return () => observer.disconnect()
   }, [])

   useEffect(() => {
      const container = listRef.current
      if (!container) return

      const tab = container.querySelector<HTMLButtonElement>(
         `[data-selected="true"]`,
      )
      if (!tab) return

      const tabRect = tab.getBoundingClientRect()
      const scrollLeft =
         tab.offsetLeft - container.offsetWidth / 2 + tabRect.width / 2

      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
   }, [activeId])

   const handleSelectionChange = (key: Key) => {
      document
         .getElementById(`category-${key}`)
         ?.scrollIntoView({ behavior: "smooth", block: "start" })
   }

   const handleListBoxAction = (key: Key) => {
      modal.close()

      setTimeout(() => {
         document
            .getElementById(`category-${key}`)
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 50)
   }

   return (
      <>
         <div ref={stickyRef} className="h-0" />
         <div
            className={`sticky top-0 z-40 my-6 transition-all ${
               isSticky
                  ? "before:from-background/80 py-2 before:absolute before:inset-y-0 before:-right-3 before:-left-3 before:-z-10 before:bg-gradient-to-b before:to-transparent before:[mask-image:linear-gradient(to_bottom,black_70%,transparent)] before:backdrop-blur-3xl before:content-['']"
                  : ""
            }`}
         >
            <div className="relative flex items-center gap-2">
               <Tabs
                  className="min-w-0 flex-1"
                  selectedKey={activeId}
                  onSelectionChange={handleSelectionChange}
               >
                  <Tabs.ListContainer
                     ref={listRef}
                     className="scrollbar-hidden w-full max-w-full overflow-x-auto rounded-[calc(var(--radius-2xl)+0.25rem)]"
                  >
                     <Tabs.List
                        aria-label="Menu categories"
                        className="w-fit rounded-none"
                     >
                        {categories.map((category) => (
                           <Tabs.Tab
                              key={category.id}
                              id={category.id}
                              className="text-nowrap"
                           >
                              {category.name}
                              <Tabs.Indicator className="rounded-full" />
                           </Tabs.Tab>
                        ))}
                     </Tabs.List>
                  </Tabs.ListContainer>
               </Tabs>
               <Button
                  isIconOnly
                  variant="tertiary"
                  aria-label="Όλες οι κατηγορίες"
                  onPress={modal.open}
               >
                  <ListChevronsDownUp />
               </Button>
               <Modal.Container
                  isOpen={modal.isOpen}
                  onOpenChange={modal.setOpen}
                  placement="auto"
               >
                  <Modal.Dialog className="sm:min-w-[560px]">
                     <Modal.CloseTrigger />
                     <Modal.Header>
                        <Modal.Heading className="font-semibold">
                           Κατηγορίες
                        </Modal.Heading>
                     </Modal.Header>
                     <Modal.Body>
                        <ListBox
                           aria-label="Category navigation"
                           selectionMode="none"
                           onAction={handleListBoxAction}
                        >
                           {categories.map((category) => (
                              <ListBox.Item
                                 key={category.id}
                                 id={category.id}
                                 textValue={category.name}
                                 className={
                                    activeId === category.id ? "bg-default" : ""
                                 }
                              >
                                 <Label>{category.name}</Label>
                              </ListBox.Item>
                           ))}
                        </ListBox>
                     </Modal.Body>
                  </Modal.Dialog>
               </Modal.Container>
            </div>
         </div>
      </>
   )
}
