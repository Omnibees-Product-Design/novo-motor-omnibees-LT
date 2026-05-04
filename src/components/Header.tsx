import { useEffect, useRef, useState } from 'react'
import type { Stay } from '../types/hotel'
import { MenuIcon, SearchIcon, UserIcon } from './Icons'
import { Logo } from './Logo'
import { useScrolledPastSearch } from '../hooks/useScrolledPastSearch'

export function Header({ stay }: { stay: Stay }) {
  const scrolled = useScrolledPastSearch()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [menuOpen])

  return (
    <header className={`bg-white border-b border-neutral-200 sticky top-0 z-30 ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="px-4 lg:px-8">
        <div className="header-top-row h-14 lg:h-16 flex items-center justify-between gap-4 lg:gap-8">
          <Logo />

          {/* Compact search pill (mobile) */}
          <button className="compact-search-mobile flex-1 items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-2xl px-4 h-[42px] text-left">
            <SearchIcon className="w-3.5 h-3.5 shrink-0" color="var(--color-brand-500)" />
            <span className="text-sm font-medium text-neutral-900 truncate">
              {stay.destination.split(',')[0]} · {stay.checkIn} · {stay.guests} hóspedes
            </span>
          </button>

          {/* Compact search pill (desktop) */}
          <button className="compact-search-desktop flex-1 max-w-2xl items-center bg-neutral-50 border border-neutral-200 rounded-2xl">
            <span className="flex-1 min-w-0 px-5 py-2.5 text-sm font-medium text-neutral-900 truncate text-left">
              {stay.destination}
            </span>
            <span className="w-px h-6 bg-neutral-200 shrink-0" />
            <span className="flex-1 min-w-0 px-5 py-2.5 text-sm text-neutral-700 truncate text-left">
              {stay.checkIn} — {stay.checkOut}
            </span>
            <span className="w-px h-6 bg-neutral-200 shrink-0" />
            <span className="flex-1 min-w-0 px-5 py-2.5 text-sm text-neutral-700 truncate text-left">
              {stay.guests} hóspedes · {stay.roomsRequested} quarto
            </span>
            <span className="bg-brand-500 hover:bg-brand-600 text-white w-10 h-10 m-1 rounded-xl flex items-center justify-center transition-colors shrink-0">
              <SearchIcon className="w-3.5 h-3.5" />
            </span>
          </button>

          <nav className="flex items-center gap-4 lg:gap-6 shrink-0">
            <a href="#" className="hidden lg:block text-sm font-medium text-neutral-700 hover:text-neutral-900">
              Buscas
            </a>
            <a href="#" className="hidden lg:block text-sm font-medium text-neutral-700 hover:text-neutral-900">
              Ofertas
            </a>
            <span className="hidden lg:block text-sm font-medium text-neutral-700">PT · R$</span>

            <div className="relative" ref={menuRef}>
              <button
                aria-label="Menu"
                onClick={(e) => { e.stopPropagation(); setMenuOpen(v => !v) }}
                className="flex items-center gap-2 border border-neutral-200 rounded-2xl p-1 pl-3 hover:shadow-md transition-shadow"
              >
                <MenuIcon className="w-3.5 h-3.5 text-neutral-700" />
                <span className="w-8 h-8 rounded-full bg-neutral-700 text-white flex items-center justify-center">
                  <UserIcon className="w-3.5 h-3.5" />
                </span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-neutral-200 rounded-2xl shadow-lg overflow-hidden py-2 z-40">
                  <a href="#" className="block px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">Cadastre-se</a>
                  <a href="#" className="block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Entrar</a>
                  <div className="my-1 h-px bg-neutral-200" />
                  <a href="#" className="lg:hidden block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Buscas</a>
                  <a href="#" className="lg:hidden block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Ofertas</a>
                  <a href="#" className="lg:hidden block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">PT · R$</a>
                  <div className="lg:hidden my-1 h-px bg-neutral-200" />
                  <a href="#" className="block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Minhas reservas</a>
                  <a href="#" className="block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Favoritos</a>
                  <a href="#" className="block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Ajuda</a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
