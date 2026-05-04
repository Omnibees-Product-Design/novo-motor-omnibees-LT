import type { Hotel } from '../types/hotel'
import { amenityIconFor, poiIconFor } from './Icons'

export function HotelInfo({ hotel }: { hotel: Hotel }) {
  return (
    <section className="pb-10 grid lg:grid-cols-[1fr_400px] gap-12">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-4">Sobre o hotel</h2>
        <p className="text-neutral-600 leading-relaxed mb-8 max-w-2xl">{hotel.description}</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-5 max-w-2xl">
          {hotel.amenities.map(a => {
            const Icon = amenityIconFor(a.icon)
            return (
              <div key={a.id} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-neutral-700">{a.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <aside className="rounded-2xl bg-neutral-50 p-7">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-5">
          Pontos de interesse
        </p>
        <div className="flex flex-col divide-y divide-neutral-200">
          {hotel.pointsOfInterest.map(poi => {
            const Icon = poiIconFor(poi.icon)
            return (
              <div key={poi.id} className="flex items-start gap-4 py-4">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 leading-tight">{poi.name}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {poi.distance} · {poi.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </aside>
    </section>
  )
}
