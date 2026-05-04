import { useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons'

export function Lightbox({
  photos,
  index,
  onClose,
  onNav,
}: {
  photos: string[]
  index: number
  onClose: () => void
  onNav: (delta: number) => void
}) {
  const thumbsRef = useRef<HTMLDivElement | null>(null)

  // Lock body scroll & wire keyboard nav
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNav(-1)
      if (e.key === 'ArrowRight') onNav(1)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose, onNav])

  // Centra thumb activa
  useEffect(() => {
    const active = thumbsRef.current?.children[index] as HTMLElement | undefined
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [index])

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm" onClick={onClose}>
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 lg:px-6 py-4 z-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <span className="text-white text-sm font-medium">
          {index + 1} / {photos.length}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose() }}
          aria-label="Fechar"
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Main image */}
      <div className="absolute inset-0 flex items-center justify-center p-4 pt-20 pb-32 lg:p-12 lg:pb-32 pointer-events-none">
        <img
          src={photos[index]}
          alt=""
          className="max-w-full max-h-full object-contain rounded-lg select-none pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1) }}
        aria-label="Anterior"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-10"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1) }}
        aria-label="Próxima"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-10"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Thumbs */}
      <div className="absolute bottom-0 inset-x-0 px-4 py-4 z-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
        <div
          ref={thumbsRef}
          className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onNav(i - index) }}
              className={`shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden transition-all ${
                i === index ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
