import { useEffect, useRef, useState } from 'react'

/**
 * Carrossel horizontal mobile + grid mosaic desktop.
 * Devolve `onPhotoClick(photoIndex)` quando o utilizador toca numa imagem,
 * para que o caller possa abrir a lightbox.
 */
export function PhotoCarousel({
  photos,
  onPhotoClick,
  onShowAll,
  totalCount,
  variant = 'hero',
}: {
  photos: string[]
  onPhotoClick: (index: number) => void
  onShowAll?: () => void
  totalCount?: number
  variant?: 'hero' | 'room'
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth)
      setActiveIdx(idx)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  if (variant === 'hero') {
    return (
      <div className="relative">
        <div
          ref={ref}
          className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-2 lg:overflow-hidden h-[280px] lg:h-[560px] rounded-2xl no-scrollbar"
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className={`snap-center shrink-0 w-full lg:w-auto overflow-hidden group cursor-pointer ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => onPhotoClick(i)}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <Dots count={photos.length} activeIdx={activeIdx} className="lg:hidden" />

        {onShowAll && (
          <button
            onClick={onShowAll}
            className="absolute bottom-3 right-3 bg-white text-neutral-900 text-xs font-semibold px-3 lg:px-4 py-2 rounded-full shadow-md hover:shadow transition-shadow flex items-center gap-1.5"
          >
            <CameraSmall className="lg:hidden" />
            <span className="lg:hidden">{totalCount ?? photos.length}</span>
            <span className="hidden lg:inline">Mostrar todas ({totalCount ?? photos.length})</span>
          </button>
        )}
      </div>
    )
  }

  // Room variant — single aspect-ratio card with carousel
  return (
    <div className="aspect-[5/4] rounded-2xl overflow-hidden relative group">
      <div
        ref={ref}
        className="flex overflow-x-auto snap-x snap-mandatory h-full no-scrollbar"
      >
        {photos.map((src, i) => (
          <div key={i} className="snap-center shrink-0 w-full overflow-hidden cursor-pointer">
            <img
              src={src}
              alt=""
              onClick={() => onPhotoClick(i)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Dots count={photos.length} activeIdx={activeIdx} />

      {onShowAll && (
        <button
          onClick={(e) => { e.stopPropagation(); onShowAll() }}
          className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-neutral-900 text-xs font-semibold px-2.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 cursor-pointer"
        >
          <CameraSmall />
          <span>{photos.length}</span>
        </button>
      )}
    </div>
  )
}

function Dots({ count, activeIdx, className = '' }: { count: number; activeIdx: number; className?: string }) {
  return (
    <div
      className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`rounded-full transition-all ${
            i === activeIdx ? 'w-2.5 h-2.5 bg-white' : 'w-2 h-2 bg-white/60'
          }`}
        />
      ))}
    </div>
  )
}

function CameraSmall({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}
