"use server"

import { Resend } from "resend"
import EmailTemplate from "@/components/EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)

export type EmailState = {
   success: boolean
   error: string | null
   data: { id: string } | null
}

export async function sendEmail(
   prevState: EmailState,
   formData: FormData,
): Promise<EmailState> {
   const firstName = formData.get("firstName") as string
   const lastName = formData.get("lastName") as string
   const email = formData.get("email") as string
   const telephone = formData.get("telephone") as string
   const persons = formData.get("persons") as string
   const date = formData.get("date") as string
   const time = formData.get("time") as string
   const occasion = formData.get("occasion") as string
   const description = formData.get("description") as string

   if (
      !firstName ||
      !lastName ||
      !email ||
      !telephone ||
      !persons ||
      !date ||
      !time ||
      !occasion
   ) {
      return {
         success: false,
         error: "All required fields must be filled",
         data: null,
      }
   }

   try {
      const { data, error } = await resend.emails.send({
         from: "reservierung@notifications.ambrosia-rueckersdorf.de",
         to: ["info@ambrosia-rueckersdorf.de"],
         subject: `Neue Reservierung von ${firstName} ${lastName}`,
         react: EmailTemplate({
            firstName,
            lastName,
            email,
            telephone,
            persons,
            date,
            time,
            occasion,
            description,
         }),
      })

      if (error) {
         return { success: false, error: error.message, data: null }
      }

      return { success: true, error: null, data: data }
   } catch (error) {
      return { success: false, error: "Failed to send email", data: null }
   }
}
