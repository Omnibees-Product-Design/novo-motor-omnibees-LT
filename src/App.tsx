import { useMemo, useState } from 'react'
import { hotel, stay } from './data/hotel'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { Hero } from './components/Hero'
import { HotelInfo } from './components/HotelInfo'
import { RoomCard } from './components/RoomCard'
import { StickySidebar } from './components/StickySidebar'
import { Lightbox } from './components/Lightbox'
import { MobileCTABar } from './components/MobileCTABar'
import { Footer } from './components/Footer'

export type CartLine = {
  roomId: string
  roomName: string
  rateId: string
  rateName: string
  pricePerNight: number
  qty: number
  subtotal: number   // pricePerNight * qty * stay.nights
}

type LightboxState = { photos: string[]; index: number } | null

export default function App() {
  // Map de qty por rateId. Se não estiver presente → não seleccionado.
  const [qtyByRate, setQtyByRate] = useState<Record<string, number>>({})
  const [lightbox, setLightbox] = useState<LightboxState>(null)

  const selectRate = (rateId: string) =>
    setQtyByRate(prev => ({ ...prev, [rateId]: 1 }))

  const changeQty = (rateId: string, delta: number) =>
    setQtyByRate(prev => {
      const next = (prev[rateId] ?? 0) + delta
      const copy = { ...prev }
      if (next < 1) delete copy[rateId]
      else copy[rateId] = Math.min(9, next)
      return copy
    })

  // Deriva o carrinho a partir do qtyByRate + dados do hotel
  const cart: CartLine[] = useMemo(() => {
    const lines: CartLine[] = []
    for (const room of hotel.rooms) {
      for (const rate of room.rates) {
        const qty = qtyByRate[rate.id]
        if (!qty) continue
        lines.push({
          roomId: room.id,
          roomName: room.name,
          rateId: rate.id,
          rateName: rate.name,
          pricePerNight: rate.pricePerNight,
          qty,
          subtotal: rate.pricePerNight * qty * stay.nights,
        })
      }
    }
    return lines
  }, [qtyByRate])

  const total = cart.reduce((acc, line) => acc + line.subtotal, 0)

  const openHeroGallery = (idx: number) =>
    setLightbox({ photos: hotel.heroPhotos, index: idx })

  const openRoomGallery = (photos: string[], idx: number) =>
    setLightbox({ photos, index: idx })

  return (
    <>
      <Header stay={stay} />
      <SearchBar stay={stay} />

      <main className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <Hero
          hotel={hotel}
          onPhotoClick={openHeroGallery}
          onShowAll={() => openHeroGallery(0)}
        />

        <HotelInfo hotel={hotel} />

        <section className="border-t border-neutral-200 py-12 grid lg:grid-cols-[1fr_360px] gap-12 items-start rooms-grid">
          <div>
            <div className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-3">
                Acomodações
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2"
                style={{ letterSpacing: '-0.04em' }}
              >
                Escolha o seu quarto
              </h2>
              <p className="text-sm text-neutral-500">
                {hotel.rooms.length} disponíveis · {stay.nights} noites · {stay.guests} hóspedes
              </p>
            </div>

            <div className="space-y-20">
              {hotel.rooms.map(room => (
                <RoomCard
                  key={room.id}
                  room={room}
                  qtyByRateId={qtyByRate}
                  onSelectRate={selectRate}
                  onChangeQty={changeQty}
                  onPhotoClick={openRoomGallery}
                />
              ))}
            </div>
          </div>

          <StickySidebar hotel={hotel} stay={stay} cart={cart} total={total} />
        </section>
      </main>

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNav={(delta) =>
            setLightbox(prev =>
              prev
                ? {
                    ...prev,
                    index: (prev.index + delta + prev.photos.length) % prev.photos.length,
                  }
                : null
            )
          }
        />
      )}

      <MobileCTABar total={total} />
      <Footer />
    </>
  )
}
