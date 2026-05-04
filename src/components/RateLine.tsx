import type { Rate } from '../types/hotel'
import { CheckIcon, CoffeeIcon, MinusIcon, PlusIcon, TrashIcon, XCircleIcon } from './Icons'

export type SelectedRate = { roomId: string; rateId: string; qty: number }

export function RateLine({
  rate,
  selectedQty,
  onSelect,
  onChangeQty,
}: {
  rate: Rate
  selectedQty: number    // 0 quando não seleccionado
  onSelect: () => void
  onChangeQty: (delta: number) => void
}) {
  const selected = selectedQty > 0
  const fmt = (n: number) => `R$ ${n.toFixed(2).replace('.', ',')}`

  return (
    <div
      className={`rate-line flex flex-col gap-7 lg:grid lg:grid-cols-12 lg:gap-2 lg:items-center ${
        selected ? 'is-selected' : ''
      }`}
      onClick={() => { if (!selected) onSelect() }}
    >
      <div className="col-span-7">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold text-neutral-900">{rate.name}</span>
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-sm text-neutral-600">
            <CoffeeIcon className="w-3 h-3" />
            {rate.meal}
          </span>
          {rate.cancellable ? (
            <span className="flex items-center gap-1.5 text-sm text-green-600">
              <CheckIcon className="w-3 h-3" />
              {rate.cancelLabel ?? 'Cancelamento grátis'}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-red-500">
              <XCircleIcon className="w-3 h-3" />
              Não-reembolsável
            </span>
          )}
          <div className="flex flex-wrap gap-1.5 mt-0.5">
            {rate.perks.map(perk => (
              <span
                key={perk}
                className="rate-amenity-chip text-sm text-neutral-600 bg-neutral-100 rounded-full px-2 py-0.5"
              >
                {perk}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rate-cta-row flex items-center justify-between lg:col-span-5">
        <div className="rate-price-block flex flex-col items-start w-[160px]">
          {rate.discountPct != null && (
            <span className="text-[10px] font-bold bg-red-500 text-white rounded-full px-2 py-0.5 mb-1 inline-block">
              -{rate.discountPct}%
            </span>
          )}
          {rate.originalPrice != null && (
            <p className="text-xs text-neutral-400 line-through">{fmt(rate.originalPrice)}</p>
          )}
          <p className="text-2xl font-bold tracking-tight whitespace-nowrap">
            {fmt(rate.pricePerNight)}
            <span className="text-sm font-medium text-neutral-500"> /noite</span>
          </p>
        </div>

        {!selected ? (
          <button
            className="btn-adicionar bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full px-5 py-2.5 transition-colors"
            onClick={(e) => { e.stopPropagation(); onSelect() }}
          >
            Adicionar
          </button>
        ) : (
          <div className="qty-selector flex items-center bg-brand-50 border border-brand-500 rounded-full px-1 py-1 gap-1">
            <button
              onClick={(e) => { e.stopPropagation(); onChangeQty(-1) }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-500/20 text-brand-500 hover:bg-brand-500/30 transition-colors"
            >
              {selectedQty <= 1 ? (
                <TrashIcon className="w-3.5 h-3.5" color="var(--color-brand-500)" />
              ) : (
                <MinusIcon className="w-3.5 h-3.5" color="var(--color-brand-500)" />
              )}
            </button>
            <span className="qty-val w-7 text-center font-semibold text-sm text-brand-600">{selectedQty}</span>
            <button
              onClick={(e) => { e.stopPropagation(); onChangeQty(1) }}
              className="w-8 h-8 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center hover:bg-brand-500/30 transition-colors"
            >
              <PlusIcon className="w-3.5 h-3.5" color="var(--color-brand-500)" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
