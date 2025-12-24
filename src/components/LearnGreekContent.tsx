"use client"

import { Button, Surface } from "@heroui/react"
import { Volume2 } from "lucide-react"
import { GreekWord, greekWords } from "@/data/greek-words"
import { useTranslations } from "next-intl"

export default function LearnGreekContent() {
   const t = useTranslations("LearnGreek")

   const speak = (text: string) => {
      if ("speechSynthesis" in window) {
         speechSynthesis.cancel()

         const utterance = new SpeechSynthesisUtterance(text)
         utterance.lang = "el-GR"
         utterance.rate = 0.8
         speechSynthesis.speak(utterance)
      }
   }

   return (
      <div className="grid gap-2 sm:grid-cols-2">
         {greekWords.map((word) => (
            <WordCard key={word.id} word={word} onSpeak={speak} t={t} />
         ))}
      </div>
   )
}

function WordCard({
   word,
   onSpeak,
   t,
}: {
   word: GreekWord
   onSpeak: (text: string) => void
   t: (key: string) => string
}) {
   return (
      <Surface variant="tertiary" className="rounded-2xl p-4">
         <div className="flex items-start justify-between gap-3">
            <div className="*:text-foreground flex-1">
               <p className="font-semibold">{word.greek}</p>
               <p className="text-muted text-sm/6 italic">
                  {word.pronunciation}
               </p>
               <p className="mt-2 text-sm">{word.german}</p>
            </div>
            <Button
               variant="tertiary"
               isIconOnly
               onPress={() => onSpeak(word.greek)}
               aria-label={t("listen")}
            >
               <Volume2 className="size-4" />
            </Button>
         </div>
      </Surface>
   )
}
