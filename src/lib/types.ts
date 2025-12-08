export interface MenuItem {
   name: string
   subtitle?: string
   description?: string
   price: string
   priceBottle?: string
   isPremium?: boolean
   isAgeRestricted?: boolean
}

export interface Category {
   id: string
   name: string
   description?: string
   schedule?: string
   menuItems: MenuItem[]
}
