import type { Breed, Gender, Spec } from "./types"

export const specialization = ["ShowJumping", "Dressage", "Triathlon"] as const

export const specialization_labels: Record<Spec, string> = {
   ShowJumping: "Конкур",
    Dressage: "Выездка",
    Triathlon: "Троеборье"
}

export const breed = ["RWP", "OrlovTrotter", "Trakehner", "KWPN", "Budyonovskaya",
"Sangerschneider", "TrojanPony", "Crossbreed"] as const


export const breed_labels: Record<Breed, string> = {
  RWP:"РВП", 
OrlovTrotter: "Орловский рысак", 
Trakehner: "Тракененская", 
KWPN: "КВПН", 
Budyonovskaya:"Буденовская",
Sangerschneider: "Зангершнайде", 
TrojanPony: "Троянский пони", 
Crossbreed: "Помесь"
}


export const gender = ["Mare", "Stallion",  "Gelding"] as const

export const gender_labels: Record<Gender, string> = {
  Mare: "Кобыла", 
  Stallion: "Жеребец",  
  Gelding: "Мерен"
}