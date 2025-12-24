export interface GreekWord {
   id: string
   greek: string
   pronunciation: string
   german: string
}

export const greekWords: GreekWord[] = [
   {
      id: "kalimera",
      greek: "Καλημέρα",
      pronunciation: "Kali-Méra",
      german: "Guten Morgen",
   },
   {
      id: "kalispera",
      greek: "Καλησπέρα",
      pronunciation: "Kali-Spéra",
      german: "Guten Abend",
   },
   {
      id: "yiasas",
      greek: "Γεια σας",
      pronunciation: "Ja sas",
      german: "Hallo",
   },
   {
      id: "parakalo",
      greek: "Παρακαλώ",
      pronunciation: "Para-kaló",
      german: "Bitte",
   },
   {
      id: "efcharisto",
      greek: "Ευχαριστώ",
      pronunciation: "Ef-cha-ris-TÓ",
      german: "Danke",
   },
   {
      id: "poli-oreo",
      greek: "Πολύ ωραίο",
      pronunciation: "Po-lí o-ré-o",
      german: "Sehr lecker",
   },
   {
      id: "stin-ygia-sas",
      greek: "Στην υγειά σας",
      pronunciation: "Stin i-γi-A sas",
      german: "Prost",
   },
   {
      id: "adio",
      greek: "Αντίο",
      pronunciation: "Adío",
      german: "Auf Wiedersehen",
   },
   {
      id: "ti-protinete",
      greek: "Τι προτείνετε;",
      pronunciation: "Ti pro-tí-ne-te?",
      german: "Was empfehlen Sie?",
   },
   {
      id: "logarismos",
      greek: "Τον λογαριασμό, παρακαλώ",
      pronunciation: "Ton lo-ga-ri-as-MÓ para-kaló",
      german: "Die Rechnung, bitte",
   },
]
