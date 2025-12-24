"use client"

import { Button, Modal, Surface, useOverlayState } from "@heroui/react"
import { Info } from "lucide-react"

import MasterCard from "../../public/cards/mastercard.svg"
import Visa from "../../public/cards/visa.svg"
import Maestro from "../../public/cards/maestro.svg"
import AmericanExpress from "../../public/cards/american-express.svg"
import ApplePay from "../../public/cards/apple-pay.svg"
import GooglePay from "../../public/cards/google-pay.svg"
import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"

export function InfoModal() {
   const state = useOverlayState()
   const t = useTranslations("InformationModal")

   return (
      <>
         <Button variant="tertiary" size="sm" onPress={state.toggle}>
            <Info />
            {t("information")}
         </Button>
         <Modal.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
            <Modal.Container size="sm">
               <Modal.Dialog>
                  <>
                     <Modal.CloseTrigger />
                     <Modal.Header>
                        <Modal.Icon className="bg-default">
                           <Info className="size-5" />
                        </Modal.Icon>
                        <Modal.Heading>{t("information")}</Modal.Heading>
                     </Modal.Header>
                     <Modal.Body className="flex flex-col gap-y-4">
                        <p>{t("informationDescription")}</p>
                        <Surface
                           variant="secondary"
                           className="rounded-2xl p-4"
                        >
                           <h3 className="text-foreground mb-3">
                              {t("paymentMethods")}
                           </h3>
                           <div className="flex flex-wrap items-center gap-3">
                              <MasterCard className="h-auto w-10 shrink-0" />
                              <Visa className="h-auto w-10 shrink-0" />
                              <Maestro className="h-auto w-10 shrink-0" />
                              <AmericanExpress className="h-auto w-10 shrink-0" />
                              <ApplePay className="h-auto w-10 shrink-0" />
                              <GooglePay className="h-auto w-10 shrink-0" />
                           </div>
                        </Surface>
                        <Surface
                           variant="secondary"
                           className="rounded-2xl p-4"
                        >
                           <h3 className="text-foreground mb-3">
                              {t("businessInformation")}
                           </h3>
                           <address className="flex flex-wrap items-center gap-x-4 not-italic">
                              <ul className="*:text-foreground/75 flex flex-col gap-y-1 *:text-xs">
                                 <li>
                                    {t("companyName")}: {siteConfig.name}
                                 </li>
                                 <li>
                                    Email:{" "}
                                    <a
                                       href={`mailto:${siteConfig.contact.email}`}
                                    >
                                       {siteConfig.contact.email}
                                    </a>
                                 </li>
                                 <li>
                                    {t("phone")}: {siteConfig.contact.phone}
                                 </li>
                                 <li>
                                    {t("address")}: {siteConfig.contact.street},{" "}
                                    {siteConfig.contact.postalCode}{" "}
                                    {siteConfig.contact.city}
                                 </li>
                              </ul>
                           </address>
                        </Surface>
                     </Modal.Body>
                  </>
               </Modal.Dialog>
            </Modal.Container>
         </Modal.Backdrop>
      </>
   )
}
