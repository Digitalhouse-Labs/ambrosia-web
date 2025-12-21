"use client"

import { useCallback, useSyncExternalStore } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@heroui/react"

export default function Gallery() {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: false,
      align: "start",
      slidesToScroll: 1,
   })

   const t = useTranslations("Gallery")

   const images = [
      { src: "/gallery/1.jpg", alt: t("alt1") },
      { src: "/gallery/2.jpg", alt: t("alt2") },
      { src: "/gallery/3.jpg", alt: t("alt3") },
      { src: "/gallery/14.jpg", alt: t("alt14") },
      { src: "/gallery/4.jpg", alt: t("alt4") },
      { src: "/gallery/5.jpg", alt: t("alt5") },
      { src: "/gallery/6.jpg", alt: t("alt6") },
      { src: "/gallery/7.jpg", alt: t("alt7") },
      { src: "/gallery/8.jpg", alt: t("alt8") },
      { src: "/gallery/9.jpg", alt: t("alt9") },
      { src: "/gallery/10.jpg", alt: t("alt10") },
      { src: "/gallery/11.jpg", alt: t("alt11") },
      { src: "/gallery/12.jpg", alt: t("alt12") },
      { src: "/gallery/13.jpg", alt: t("alt13") },
   ]

   const subscribe = useCallback(
      (callback: () => void) => {
         if (!emblaApi) return () => {}
         emblaApi.on("select", callback)
         emblaApi.on("reInit", callback)
         return () => {
            emblaApi.off("select", callback)
            emblaApi.off("reInit", callback)
         }
      },
      [emblaApi],
   )

   const canScrollPrev = useSyncExternalStore(
      subscribe,
      () => emblaApi?.canScrollPrev() ?? false,
      () => false,
   )

   const canScrollNext = useSyncExternalStore(
      subscribe,
      () => emblaApi?.canScrollNext() ?? true,
      () => true,
   )

   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
   }, [emblaApi])

   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
   }, [emblaApi])

   return (
      <div className="pb-16 md:pb-28">
         <div className="max-w-8xl mx-auto px-3">
            <div className="mb-6 overflow-hidden" ref={emblaRef}>
               <div className="flex">
                  {images.map((image, index) => (
                     <div
                        key={index}
                        className="mr-4 min-w-0 flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%]"
                     >
                        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                           <Image
                              priority={index < 3}
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex items-start justify-between">
               <div className="flex flex-col gap-y-3">
                  <h2 className="text-4xl font-light md:text-5xl">
                     {t("galleryTitle")}
                  </h2>
                  <p className="text-balance">{t("galleryDescription")}</p>
               </div>
               <div className="flex gap-2">
                  <Button
                     isIconOnly
                     variant="tertiary"
                     onClick={scrollPrev}
                     isDisabled={!canScrollPrev}
                     aria-label="Previous slide"
                  >
                     <ChevronLeft />
                  </Button>
                  <Button
                     isIconOnly
                     variant="tertiary"
                     onClick={scrollNext}
                     isDisabled={!canScrollNext}
                     aria-label="Next slide"
                  >
                     <ChevronRight />
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}
