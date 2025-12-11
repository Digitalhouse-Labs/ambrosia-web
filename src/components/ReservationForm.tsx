"use client"

import { useActionState, useCallback, useEffect, useTransition } from "react"
import { useTranslations } from "next-intl"
import {
   Button,
   Card,
   Checkbox,
   Description,
   FieldError,
   Form,
   Input,
   Label,
   ListBox,
   Select,
   Spinner,
   TextArea,
   TextField,
} from "@heroui/react"
import { type EmailState, sendEmail } from "@/app/actions/send-email"
import Image from "next/image"
import confetti from "canvas-confetti"
import { Check } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const initialState: EmailState = {
   success: false,
   error: null,
   data: null,
}

export function ReservationForm() {
   const { executeRecaptcha } = useGoogleReCaptcha()

   const t = useTranslations("ReservationForm")
   const [state, formAction] = useActionState(sendEmail, initialState)
   const [isPending, startTransition] = useTransition()

   const today = new Date().toISOString().split("T")[0]

   const occasions = [
      { id: "birthday", name: t("occasionBirthday") },
      { id: "anniversary", name: t("occasionAnniversary") },
      { id: "business", name: t("occasionBusiness") },
      { id: "date", name: t("occasionDate") },
      { id: "family", name: t("occasionFamily") },
      { id: "other", name: t("occasionOther") },
   ]

   useEffect(() => {
      if (state.success) {
         confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
         })
      }
   }, [state.success])

   const handleSubmit = useCallback(
      async (formData: FormData) => {
         if (!executeRecaptcha) return

         const token = await executeRecaptcha("reservation")
         formData.append("recaptchaToken", token)

         startTransition(() => {
            formAction(formData)
         })
      },
      [executeRecaptcha, formAction],
   )

   return (
      <div className="relative -z-0 flex min-h-[calc(100svh-5rem)] items-center justify-start py-3 md:py-6">
         <div className="absolute inset-y-0 right-0 hidden w-1/2 mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-right md:block">
            <Image
               src="/food.jpg"
               alt="Ambrosia food"
               fill
               className="object-cover"
               priority
            />
         </div>
         <div className="max-w-9xl relative z-10 mx-auto px-3">
            {state.success ? (
               <Card className="w-full md:max-w-md">
                  <Card.Content className="flex flex-col items-center gap-6 py-3 text-center md:py-12">
                     <div className="bg-default flex size-20 items-center justify-center rounded-full">
                        <Check className="text-success size-12" />
                     </div>
                     <div className="space-y-2">
                        <h2 className="text-2xl font-bold">
                           {t("successTitle")}
                        </h2>
                        <p>{t("successMessage")}</p>
                     </div>
                     <Button variant="tertiary" asChild>
                        <Link href="/">{t("backToHome")}</Link>
                     </Button>
                  </Card.Content>
               </Card>
            ) : (
               <Card className="w-full md:max-w-lg">
                  <Card.Header>
                     <Card.Title>{t("title")}</Card.Title>
                     <Card.Description>{t("descriptionForm")}</Card.Description>
                  </Card.Header>
                  <Form action={handleSubmit}>
                     <Card.Content className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                           <TextField isRequired name="firstName">
                              <Label>{t("firstName")}</Label>
                              <Input
                                 className="h-14 text-base"
                                 placeholder={t("firstNamePlaceholder")}
                              />
                              <FieldError />
                           </TextField>

                           <TextField isRequired name="lastName">
                              <Label>{t("lastName")}</Label>
                              <Input
                                 className="h-14 text-base"
                                 placeholder={t("lastNamePlaceholder")}
                              />
                              <FieldError />
                           </TextField>
                        </div>

                        <TextField isRequired name="email" type="email">
                           <Label>{t("email")}</Label>
                           <Input
                              className="h-14 text-base"
                              placeholder={t("emailPlaceholder")}
                           />
                           <FieldError />
                        </TextField>

                        <TextField isRequired name="telephone" type="tel">
                           <Label>{t("telephone")}</Label>
                           <Input
                              type="tel"
                              className="h-14 text-base"
                              pattern="[\+]?[0-9\s\-]{6,18}"
                              placeholder="+49 123 4567890"
                           />
                           <FieldError />
                        </TextField>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                           <TextField isRequired name="date" type="date">
                              <Label>{t("date")}</Label>
                              <Input min={today} className="h-14 text-base" />
                              <FieldError />
                           </TextField>

                           <TextField isRequired name="time" type="time">
                              <Label>{t("time")}</Label>
                              <Input className="h-14 text-base" />
                              <FieldError />
                           </TextField>
                        </div>

                        <TextField isRequired name="persons" type="number">
                           <Label>{t("persons")}</Label>
                           <Input
                              min={1}
                              max={20}
                              className="h-14 text-base"
                              placeholder={t("personsPlaceholder")}
                           />
                           <FieldError />
                        </TextField>

                        <Select
                           isRequired
                           className="w-full"
                           name="occasion"
                           placeholder={t("occasionPlaceholder")}
                        >
                           <Label>{t("occasion")}</Label>
                           <Select.Trigger className="flex h-14 items-center">
                              <Select.Value />
                              <Select.Indicator />
                           </Select.Trigger>
                           <Select.Popover>
                              <ListBox>
                                 {occasions.map((occasion) => (
                                    <ListBox.Item
                                       key={occasion.id}
                                       id={occasion.id}
                                       textValue={occasion.name}
                                    >
                                       {occasion.name}
                                       <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                 ))}
                              </ListBox>
                           </Select.Popover>
                           <FieldError />
                        </Select>

                        <TextField name="description">
                           <Label>{t("description")}</Label>
                           <TextArea
                              rows={6}
                              className="text-base"
                              placeholder={t("descriptionPlaceholder")}
                           />
                           <FieldError />
                        </TextField>

                        <Checkbox isRequired name="terms">
                           <Checkbox.Control>
                              <Checkbox.Indicator />
                           </Checkbox.Control>
                           <Checkbox.Content>
                              <Label>{t("termsLabel")}</Label>
                              <Description>
                                 {t("termsDescription")}{" "}
                                 <Link href="/privacy" className="underline">
                                    {t("privacyPolicy")}
                                 </Link>
                              </Description>
                           </Checkbox.Content>
                        </Checkbox>

                        <Button
                           type="submit"
                           size="lg"
                           variant="tertiary"
                           className="w-full"
                           isDisabled={isPending}
                        >
                           {isPending ? (
                              <>
                                 <Spinner color="current" size="sm" />
                                 {t("submitting")}
                              </>
                           ) : (
                              t("submit")
                           )}
                        </Button>
                     </Card.Content>
                  </Form>
               </Card>
            )}

            {state.error && (
               <div className="text-danger bg-default mt-4 rounded-lg p-4">
                  {t("error")}: {state.error}
               </div>
            )}
         </div>
      </div>
   )
}
