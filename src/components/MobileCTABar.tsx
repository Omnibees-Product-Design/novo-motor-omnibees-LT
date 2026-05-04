export function MobileCTABar({ total }: { total: number }) {
  if (total <= 0) return null
  const fmt = (n: number) => `R$ ${n.toFixed(2).replace('.', ',')}`
  return (
    <div className="fixed bottom-0 inset-x-0 lg:hidden bg-white border-t border-neutral-200 px-5 py-4 z-40 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-neutral-500 mb-0.5">Total estimado</p>
          <p className="text-base font-bold tracking-tight text-neutral-900">{fmt(total)}</p>
        </div>
        <button className="bg-brand-500 text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors hover:bg-brand-600 shrink-0">
          Reservar
        </button>
      </div>
    </div>
  )
}
