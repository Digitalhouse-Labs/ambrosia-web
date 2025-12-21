import Link from "next/link"
import GoogleLogo from "../../public/google-icon-logo.svg"
import { useTranslations } from "next-intl"
import { buttonVariants } from "@heroui/react"

export default function GoogleReviewButton() {
   const t = useTranslations("InformationModal")

   return (
      <div className="sticky bottom-3 z-50">
         <Link
            target="_blank"
            className={buttonVariants({
               size: "lg",
               variant: "tertiary",
               className: "h-16 w-full gap-3",
            })}
            rel="noopener noreferrer"
            href="https://g.page/r/CS26eyD7IXecEAE/review"
         >
            <GoogleLogo className="size-4" />
            {t("review")}
         </Link>
      </div>
   )
}
