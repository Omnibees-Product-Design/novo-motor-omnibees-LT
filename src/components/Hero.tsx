import type { Hotel } from '../types/hotel'
import { PinIcon, ShareIcon, StarIcon } from './Icons'
import { PhotoCarousel } from './PhotoCarousel'

export function Hero({
  hotel,
  onPhotoClick,
  onShowAll,
}: {
  hotel: Hotel
  onPhotoClick: (idx: number) => void
  onShowAll: () => void
}) {
  return (
    <section className="pt-5 pb-8 lg:pt-8 lg:pb-12">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 lg:gap-8 mb-6 lg:mb-8">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: hotel.starCount }).map((_, i) => (
                <StarIcon key={i} className="w-[18px] h-[18px] lg:w-5 lg:h-5" />
              ))}
            </div>
            <button
              aria-label="Compartilhar"
              className="lg:hidden w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-400 transition-colors shrink-0"
            >
              <ShareIcon className="w-3.5 h-3.5" />
            </button>
          </div>
          <h1
            className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-[1.1] lg:leading-[1.05]"
            style={{ letterSpacing: '-0.04em' }}
          >
            {hotel.name}, {hotel.city}
          </h1>
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-3 lg:mt-4 text-sm text-neutral-600">
            <span className="flex items-center gap-1.5">
              <PinIcon className="w-3.5 h-3.5" />
              {hotel.address}
            </span>
            <a href="#" className="text-brand-500 font-semibold hover:underline underline-offset-4 transition-colors">
              Ver no mapa
            </a>
          </div>
          {/* Mobile: rating row */}
          <div className="lg:hidden flex items-center gap-2 mt-4">
            <span className="bg-brand-500 text-white text-sm font-bold px-2 py-0.5 rounded-md">
              {hotel.rating.toFixed(1)}
            </span>
            <span className="text-sm text-neutral-700 font-medium">{hotel.ratingLabel}</span>
            <span className="text-sm text-neutral-500">· {hotel.reviewCount.toLocaleString('pt-BR')} reviews</span>
          </div>
        </div>
        {/* Desktop: rating + share */}
        <div className="hidden lg:flex items-start gap-6 shrink-0">
          <div className="text-right">
            <div className="text-4xl font-bold tracking-tight">{hotel.rating.toFixed(1)}</div>
            <p className="text-xs text-neutral-500 mt-1">
              {hotel.ratingLabel} · {hotel.reviewCount.toLocaleString('pt-BR')} reviews
            </p>
          </div>
          <button
            aria-label="Compartilhar"
            className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-400 transition-colors"
          >
            <ShareIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <PhotoCarousel
        photos={hotel.heroPhotos}
        onPhotoClick={onPhotoClick}
        onShowAll={onShowAll}
        totalCount={hotel.totalPhotoCount}
      />
    </section>
  )
}
