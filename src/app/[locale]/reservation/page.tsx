import { ReservationForm } from "@/components/ReservationForm"
import { use } from "react"
import { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Metadata } from "next"
import { RecaptchaProvider } from "@/components/RecaptchaProvider"

type Props = {
   params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { locale } = await params
   const t = await getTranslations({ locale, namespace: "ReservationPage" })

   return {
      title: t("metaTitle"),
      description: t("metaDescription"),
   }
}

export default function Page({ params }: Props) {
   const { locale } = use(params)
   setRequestLocale(locale as Locale)

   return (
      <RecaptchaProvider>
         <ReservationForm />
      </RecaptchaProvider>
   )
}
