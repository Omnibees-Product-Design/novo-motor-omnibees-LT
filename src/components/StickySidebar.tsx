import type { Hotel, Stay } from '../types/hotel'
import type { CartLine } from '../App'
import { CheckIcon } from './Icons'

export function StickySidebar({
  hotel,
  stay,
  cart,
  total,
}: {
  hotel: Hotel
  stay: Stay
  cart: CartLine[]
  total: number
}) {
  const hasItems = cart.length > 0
  const fmt = (n: number) => `R$ ${n.toFixed(2).replace('.', ',')}`

  return (
    <aside className="hidden lg:block sticky top-28 space-y-4">
      <div className="border border-neutral-200 rounded-2xl p-7">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-3">Resumo</p>
        <h4 className="text-lg font-semibold tracking-tight">{hotel.name}</h4>
        <p className="text-sm text-neutral-500 mt-1">
          {stay.checkIn} — {stay.checkOut} · {stay.nights} noites
        </p>

        {!hasItems && (
          <div className="py-6 mt-5 border-t border-dashed border-neutral-300 text-center">
            <p className="text-sm text-neutral-400">Selecione um quarto</p>
          </div>
        )}

        {hasItems && (
          <div className="border-t border-neutral-200 pt-5 mt-5">
            <div className="flex flex-col gap-4">
              {cart.map(line => (
                <div key={line.rateId} className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-900 leading-snug truncate">{line.roomName}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {line.rateName}
                      {line.qty > 1 && (
                        <>
                          {' · '}
                          <span className="font-medium text-neutral-700">×{line.qty}</span>
                        </>
                      )}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-neutral-900 whitespace-nowrap">
                    {fmt(line.subtotal)}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 mt-4">Impostos não inclusos</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
              <span className="text-sm font-semibold">Total</span>
              <span className="text-lg font-bold tracking-tight">{fmt(total)}</span>
            </div>
          </div>
        )}

        <button
          disabled={!hasItems}
          className={`mt-5 w-full text-sm font-semibold py-3.5 rounded-full transition-all ${
            hasItems
              ? 'bg-brand-500 hover:bg-brand-600 text-white cursor-pointer'
              : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
          }`}
        >
          Reservar
        </button>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6 space-y-4">
        <Benefit label="Melhor preço garantido" />
        <Benefit label="Pagamento seguro" />
        <Benefit label="Suporte 24h" />
      </div>
    </aside>
  )
}

function Benefit({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-neutral-700">
      <CheckIcon className="w-3.5 h-3.5" color="var(--color-brand-500)" strokeWidth={2.5} />
      <span>{label}</span>
    </div>
  )
}
