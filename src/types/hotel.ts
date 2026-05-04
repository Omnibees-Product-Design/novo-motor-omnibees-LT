/**
 * Domínio do Motor LT.
 *
 * Esta é a interface que o serviço PULL (ligado pelo Pedro) tem de respeitar.
 * Os preços são por noite (não totais).
 */

export type Hotel = {
  id: string
  name: string
  city: string
  address: string
  rating: number              // ex: 8.4
  ratingLabel: string         // ex: "Muito Bom"
  reviewCount: number
  starCount: number
  description: string
  heroPhotos: string[]        // URLs
  totalPhotoCount: number     // ex: 37 (mostrado no botão "Mostrar todas")
  amenities: Amenity[]
  pointsOfInterest: PointOfInterest[]
  rooms: Room[]
}

export type Amenity = {
  id: string
  label: string
  icon: AmenityIcon
}

export type AmenityIcon =
  | 'parking'
  | 'wifi'
  | 'gym'
  | 'accessibility'
  | 'breakfast'
  | 'pool'
  | 'spa'
  | 'tv'
  | 'restaurant'

export type PointOfInterest = {
  id: string
  name: string
  distance: string            // ex: "5 min a pé"
  detail: string              // ex: "Rua do Infante Dom Henrique"
  icon: 'pin' | 'phone' | 'pool' | 'building'
}

export type Room = {
  id: string
  name: string
  description: string
  guests: number
  sizeM2: number
  bedConfig: string           // ex: "2 camas de solteiro", "Cama queen"
  photos: string[]
  rates: Rate[]
}

export type Rate = {
  id: string
  name: string                // ex: "Tarifa exclusiva"
  meal: string                // ex: "Café da manhã", "Meia pensão (café + jantar)"
  cancellable: boolean        // true → "Cancelamento grátis até X" / false → "Não-reembolsável"
  cancelLabel?: string        // ex: "Cancelamento grátis até 27 abr"
  perks: string[]             // chips: ["Wi-Fi gratuito", "Estacionamento", ...]
  pricePerNight: number       // BRL por noite
  originalPrice?: number      // se houver desconto, preço riscado
  discountPct?: number        // ex: 25 → mostra "-25%"
}

export type Stay = {
  destination: string         // ex: "Faro, Portugal"
  checkIn: string             // ex: "28 Abr"
  checkOut: string            // ex: "1 Mai"
  guests: number
  roomsRequested: number
  nights: number              // ex: 3
}
