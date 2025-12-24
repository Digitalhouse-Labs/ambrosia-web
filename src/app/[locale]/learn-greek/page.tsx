import { Metadata } from "next"
import { use } from "react"
import { Locale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { GraduationCap } from "lucide-react"
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

export default function LearnGreekPage({ params }: Props) {
   const { locale } = use(params)
   setRequestLocale(locale as Locale)

   return (
      <div className="mx-auto max-w-3xl px-3 py-16">
         <div className="mb-8 text-center">
            <div className="bg-primary/10 text-primary mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
               <GraduationCap className="size-8" />
            </div>
            <h1 className="text-3xl font-bold">Μάθε Ελληνικά</h1>
            <p className="text-foreground/70 mt-2">Learn Greek</p>
         </div>
         <LearnGreekContent />
      </div>
   )
}
