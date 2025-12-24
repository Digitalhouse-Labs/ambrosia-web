"use client"

import { Modal } from "@heroui/react"
import { useRouter } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { GraduationCap } from "lucide-react"
import LearnGreekContent from "@/components/LearnGreekContent"

export default function LearnGreekModal() {
   const router = useRouter()
   const t = useTranslations("LearnGreek")

   return (
      <Modal.Backdrop
         isOpen={true}
         onOpenChange={(open) => {
            if (!open) router.back()
         }}
      >
         <Modal.Container size="lg">
            <Modal.Dialog className="h-140">
               <Modal.CloseTrigger />
               <Modal.Header>
                  <Modal.Icon className="bg-default">
                     <GraduationCap className="size-5" />
                  </Modal.Icon>
                  <Modal.Heading>{t("title")}</Modal.Heading>
               </Modal.Header>
               <Modal.Body>
                  <p className="text-foreground/70 mb-4">{t("description")}</p>
                  <LearnGreekContent />
               </Modal.Body>
            </Modal.Dialog>
         </Modal.Container>
      </Modal.Backdrop>
   )
}
