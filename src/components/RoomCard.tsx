import type { Room } from '../types/hotel'
import { BedIcon, RoomSizeIcon, UsersIcon } from './Icons'
import { PhotoCarousel } from './PhotoCarousel'
import { RateLine } from './RateLine'

export function RoomCard({
  room,
  qtyByRateId,
  onSelectRate,
  onChangeQty,
  onPhotoClick,
}: {
  room: Room
  qtyByRateId: Record<string, number>
  onSelectRate: (rateId: string) => void
  onChangeQty: (rateId: string, delta: number) => void
  onPhotoClick: (photos: string[], idx: number) => void
}) {
  return (
    <article>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <PhotoCarousel
          variant="room"
          photos={room.photos}
          onPhotoClick={(i) => onPhotoClick(room.photos, i)}
          onShowAll={() => onPhotoClick(room.photos, 0)}
        />
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-3">{room.name}</h3>
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
            <span className="flex items-center gap-1.5">
              <UsersIcon className="w-3.5 h-3.5" />
              {room.guests} hóspedes
            </span>
            <span className="flex items-center gap-1.5">
              <RoomSizeIcon className="w-3.5 h-3.5" />
              {room.sizeM2} m²
            </span>
            <span className="flex items-center gap-1.5">
              <BedIcon className="w-3.5 h-3.5" />
              {room.bedConfig}
            </span>
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed mb-5">{room.description}</p>
          <button className="text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-brand-500 transition-colors">
            Detalhes do quarto
          </button>
        </div>
      </div>

      <div className="border-t border-neutral-200 mt-2 rates-carousel no-scrollbar">
        {room.rates.map(rate => (
          <RateLine
            key={rate.id}
            rate={rate}
            selectedQty={qtyByRateId[rate.id] ?? 0}
            onSelect={() => onSelectRate(rate.id)}
            onChangeQty={(d) => onChangeQty(rate.id, d)}
          />
        ))}
      </div>
    </article>
  )
}
