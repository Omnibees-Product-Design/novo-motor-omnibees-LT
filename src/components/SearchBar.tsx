import type { Stay } from '../types/hotel'
import { CalendarIcon, PinIcon, SearchIcon, UsersIcon } from './Icons'

export function SearchBar({ stay }: { stay: Stay }) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-3 lg:pt-4">
      {/* Desktop full bar */}
      <div className="hidden lg:flex items-center bg-neutral-50 border border-neutral-200 rounded-2xl">
        <SearchField
          icon={<PinIcon className="w-4 h-4 shrink-0" color="var(--color-brand-500)" />}
          label="Onde"
          value={stay.destination}
        />
        <Divider />
        <SearchField
          icon={<CalendarIcon className="w-4 h-4 shrink-0" color="var(--color-brand-500)" />}
          label="Quando"
          value={`${stay.checkIn} — ${stay.checkOut}`}
        />
        <Divider />
        <SearchField
          icon={<UsersIcon className="w-4 h-4 shrink-0" color="var(--color-brand-500)" />}
          label="Quem"
          value={`${stay.guests} hóspedes · ${stay.roomsRequested} quarto`}
        />
        <button
          aria-label="Buscar"
          className="bg-brand-500 hover:bg-brand-600 text-white flex items-center justify-center gap-2 transition-colors shrink-0 px-5 h-10 m-1.5 rounded-xl text-sm font-semibold"
        >
          <SearchIcon className="w-4 h-4" />
          Buscar
        </button>
      </div>

      {/* Mobile full bar */}
      <button className="lg:hidden w-full flex items-center bg-neutral-50 border border-neutral-200 rounded-2xl">
        <div className="flex items-center gap-3 px-4 py-3 flex-1 min-w-0 text-left">
          <PinIcon className="w-4 h-4 shrink-0" color="var(--color-brand-500)" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-neutral-900 truncate">{stay.destination}</p>
            <p className="text-xs text-neutral-500 truncate">
              {stay.checkIn} — {stay.checkOut} · {stay.guests} hóspedes
            </p>
          </div>
        </div>
        <span className="bg-brand-500 text-white w-10 h-10 m-1.5 rounded-xl flex items-center justify-center shrink-0">
          <SearchIcon className="w-3.5 h-3.5" />
        </span>
      </button>
    </section>
  )
}

function SearchField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <button className="flex-1 min-w-0 px-5 py-2.5 text-left hover:bg-white transition-colors flex items-center gap-3 first:rounded-l-2xl">
      {icon}
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-500 mb-0.5">{label}</p>
        <p className="text-sm font-medium text-neutral-900 truncate">{value}</p>
      </div>
    </button>
  )
}

function Divider() {
  return <div className="w-px h-10 bg-neutral-200" />
}
