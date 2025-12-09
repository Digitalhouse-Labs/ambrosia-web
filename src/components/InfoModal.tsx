"use client"

import { Button, Modal, Surface, useOverlayState } from "@heroui/react"
import { Info } from "lucide-react"

import MasterCard from "../../public/cards/mastercard.svg"
import Visa from "../../public/cards/visa.svg"
import Maestro from "../../public/cards/maestro.svg"
import AmericanExpress from "../../public/cards/american-express.svg"
import ApplePay from "../../public/cards/apple-pay.svg"
import GooglePay from "../../public/cards/google-pay.svg"
import Facebook from "../../public/facebook.svg"
import Instagram from "../../public/instagram.svg"
import Link from "next/link"
import { useTranslations } from "next-intl"

export function InfoModal() {
   const state = useOverlayState()
   const t = useTranslations("Footer")

   return (
      <>
         <Button variant="tertiary" size="sm" onPress={state.toggle}>
            <Info />
            {t("information")}
         </Button>
         <Modal.Container isOpen={state.isOpen} onOpenChange={state.setOpen}>
            <Modal.Dialog className="sm:max-w-[400px]">
               <>
                  <Modal.CloseTrigger />
                  <Modal.Header>
                     <Modal.Icon className="bg-default text-foreground">
                        <Info className="size-5" />
                     </Modal.Icon>
                     <Modal.Heading>{t("information")}</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body className="flex flex-col gap-y-4">
                     <p>{t("informationDescription")}</p>
                     <Surface variant="secondary" className="rounded-2xl p-4">
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
                     <Surface variant="secondary" className="rounded-2xl p-4">
                        <h3 className="text-foreground mb-3 font-semibold">
                           {t("followUs")}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4">
                           <Link
                              href="https://www.facebook.com/resambrosia"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Facebook className="text-foreground h-auto w-6 shrink-0" />
                           </Link>
                           <Link
                              href="https://www.instagram.com/resambrosia"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Instagram className="text-foreground h-auto w-6 shrink-0" />
                           </Link>
                        </div>
                     </Surface>
                     <Surface variant="secondary" className="rounded-2xl p-4">
                        <h3 className="text-foreground mb-3">
                           {t("businessInformation")}
                        </h3>
                        <address className="flex flex-wrap items-center gap-x-4 not-italic">
                           <ul className="*:text-muted flex flex-col gap-y-1 *:text-xs">
                              <li>{t("companyName")}: Ambrosia Restaurant</li>
                              <li>
                                 Email:{" "}
                                 <a href="mailto:info@ambrosia-rueckersdorf.de">
                                    info@ambrosia-rueckersdorf.de
                                 </a>
                              </li>
                              <li>{t("phone")}: +49 911 860 442 77</li>
                              <li>
                                 {t("address")}: Hauptstraße 37, 90607
                                 Rückersdorf
                              </li>
                              <li>{t("taxId")}: 221/274 70670</li>
                           </ul>
                        </address>
                     </Surface>
                  </Modal.Body>
               </>
            </Modal.Dialog>
         </Modal.Container>
      </>
   )
}
