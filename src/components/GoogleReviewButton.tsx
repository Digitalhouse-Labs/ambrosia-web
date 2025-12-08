import Link from "next/link"
import GoogleLogo from "../../public/google-icon-logo.svg"

export default function GoogleReviewButton() {
   return (
      <div className="sticky bottom-3 z-50">
         <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://g.page/r/CS26eyD7IXecEAE/review"
            className="button button--lg button--tertiary h-16 w-full gap-3"
         >
            <GoogleLogo className="size-4" />
            Γράψτε μας κριτική
         </Link>
      </div>
   )
}
