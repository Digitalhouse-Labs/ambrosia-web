import { ReservationForm } from "@/components/ReservationForm"
import { getTranslations } from "next-intl/server"
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

export default function Page() {
   return (
      <RecaptchaProvider>
         <ReservationForm />
      </RecaptchaProvider>
   )
}
