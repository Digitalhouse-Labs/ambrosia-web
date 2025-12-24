import { Metadata } from "next"
import { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import LearnGreekContent from "@/components/LearnGreekContent"

type Props = {
   params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { locale } = await params
   const t = await getTranslations({ locale, namespace: "LearnGreek" })

   return {
      title: t("metaTitle"),
      description: t("metaDescription"),
   }
}

export default async function LearnGreekPage({ params }: Props) {
   const { locale } = await params
   setRequestLocale(locale as Locale)
   const t = await getTranslations("LearnGreek")

   return (
      <section className="py-16 md:py-28">
         <div className="mx-auto max-w-3xl px-3">
            <div className="mb-12 flex flex-col items-center gap-y-2">
               <h1 className="text-3xl font-bold">{t("title")}</h1>
               <p>{t("subtitle")}</p>
            </div>
            <LearnGreekContent />
         </div>
      </section>
   )
}
