"use client"

import {
   Key,
   useEffect,
   useEffectEvent,
   useMemo,
   useRef,
   useState,
} from "react"
import {
   Button,
   Label,
   ListBox,
   Modal,
   ScrollShadow,
   Tabs,
   useOverlayState,
} from "@heroui/react"
import { Category } from "@/lib/types"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { ListChevronsDownUp } from "lucide-react"
import { useTranslations } from "next-intl"

interface CategoryTabsProps {
   categories: Category[]
}

export function CategoryTabs({ categories }: CategoryTabsProps) {
   const ids = useMemo(() => categories.map((c) => c.id), [categories])
   const activeId = useScrollSpy(ids)
   const modal = useOverlayState()
   const listRef = useRef<HTMLDivElement>(null)
   const modalListRef = useRef<HTMLDivElement>(null)
   const stickyRef = useRef<HTMLDivElement>(null)
   const [isSticky, setIsSticky] = useState(false)
   const t = useTranslations("Menu")

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

   const scrollToActiveInModal = useEffectEvent(() => {
      const container = modalListRef.current
      if (!container) return

      setTimeout(() => {
         const activeItem =
            container.querySelector<HTMLElement>(`[data-id="${activeId}"]`) ||
            container.querySelector<HTMLElement>(".bg-default")

         if (activeItem) {
            activeItem.scrollIntoView({ behavior: "smooth", block: "center" })
         }
      }, 100)
   })

   useEffect(() => {
      if (!modal.isOpen) return
      scrollToActiveInModal()
   }, [modal.isOpen])

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
                  <Tabs.ListContainer className="scrollbar-hidden w-full max-w-full overflow-x-auto rounded-[calc(var(--radius-2xl)+0.25rem)]">
                     <ScrollShadow
                        ref={listRef}
                        hideScrollBar
                        orientation="horizontal"
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
                     </ScrollShadow>
                  </Tabs.ListContainer>
               </Tabs>
               <Button
                  isIconOnly
                  variant="tertiary"
                  aria-label={t("categories")}
                  onPress={modal.open}
               >
                  <ListChevronsDownUp />
               </Button>
               <Modal.Backdrop
                  isOpen={modal.isOpen}
                  onOpenChange={modal.setOpen}
               >
                  <Modal.Container>
                     <Modal.Dialog className="h-140">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                           <Modal.Heading className="font-semibold">
                              {t("categories")}
                           </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                           <ScrollShadow
                              hideScrollBar
                              size={80}
                              ref={modalListRef}
                              className="h-full"
                           >
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
                                          activeId === category.id
                                             ? "bg-default"
                                             : ""
                                       }
                                    >
                                       <Label>{category.name}</Label>
                                    </ListBox.Item>
                                 ))}
                              </ListBox>
                           </ScrollShadow>
                        </Modal.Body>
                     </Modal.Dialog>
                  </Modal.Container>
               </Modal.Backdrop>
            </div>
         </div>
      </>
   )
}
