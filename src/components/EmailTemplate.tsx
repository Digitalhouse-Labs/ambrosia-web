// components/EmailTemplate.tsx
import {
   Body,
   Container,
   Head,
   Heading,
   Html,
   Img,
   Preview,
   Section,
   Tailwind,
   Text,
} from "@react-email/components"

interface ReservationEmailProps {
   firstName: string
   lastName: string
   email: string
   telephone: string
   persons: string
   date: string
   time: string
   occasion: string
   description?: string
}

const occasionLabels: Record<string, string> = {
   birthday: "Geburtstagsfeier",
   anniversary: "Jahrestag",
   business: "Geschäftstreffen",
   date: "Verabredungsabend",
   family: "Familientreffen",
   other: "Andere",
}

const EmailTemplate = ({
   firstName,
   lastName,
   email,
   telephone,
   persons,
   date,
   time,
   occasion,
   description,
}: ReservationEmailProps) => {
   const previewText = `Neue Reservierung von ${firstName} ${lastName}`

   return (
      <Html>
         <Head />
         <Preview>{previewText}</Preview>
         <Tailwind>
            <Body className="m-auto bg-black font-sans">
               <Container className="mx-auto mb-10 max-w-[465px] p-5">
                  <Section className="mt-10">
                     <Img
                        src="https://ambrosia-rueckersdorf.de/logo-circle.svg"
                        width="60"
                        height="60"
                        alt="Ambrosia Logo"
                        className="mx-auto my-0"
                     />
                  </Section>
                  <Heading className="mx-0 my-8 p-0 text-center text-2xl font-normal text-white">
                     Neue Reservierung
                  </Heading>
                  <Text className="text-start text-sm text-white">
                     Hallo Ambrosia,
                  </Text>
                  <Text className="text-start text-sm leading-relaxed text-white">
                     Sie haben eine neue Reservierung von:
                  </Text>
                  <Section className="my-6 rounded-lg bg-white/10 p-4">
                     <Text className="m-0 text-sm text-white">
                        <strong>Name:</strong> {firstName} {lastName}
                     </Text>
                     <Text className="m-0 mt-2 text-sm text-white">
                        <strong>E-Mail:</strong> {email}
                     </Text>
                     <Text className="m-0 mt-2 text-sm text-white">
                        <strong>Telefon:</strong> {telephone}
                     </Text>
                     <Text className="m-0 mt-2 text-sm text-white">
                        <strong>Anzahl der Personen:</strong> {persons}
                     </Text>
                     <Text className="m-0 mt-2 text-sm text-white">
                        <strong>Datum:</strong> {date}
                     </Text>
                     <Text className="m-0 mt-2 text-sm text-white">
                        <strong>Uhrzeit:</strong> {time}
                     </Text>
                     <Text className="m-0 mt-2 text-sm text-white">
                        <strong>Anlass:</strong>{" "}
                        {occasionLabels[occasion] || occasion}
                     </Text>
                     {description && (
                        <Text className="m-0 mt-2 text-sm text-white">
                           <strong>Beschreibung:</strong> {description}
                        </Text>
                     )}
                  </Section>
                  <Text className="text-start text-sm leading-relaxed text-white">
                     Bitte überprüfen und bestätigen Sie die Reservierung so
                     bald wie möglich.
                  </Text>
                  <Text className="mt-8 text-start text-sm text-white">
                     Mit freundlichen Grüßen,
                     <br />
                     Ambrosia Reservierungssystem
                  </Text>
               </Container>
            </Body>
         </Tailwind>
      </Html>
   )
}

export default EmailTemplate
