import { useEffect, useState } from 'react'

/**
 * Devolve `true` quando o utilizador fez scroll para baixo o suficiente
 * para a search bar full-width sair de vista — usado para revelar a
 * compact search dentro do header.
 *
 * Mede a posição da search bar (via querySelector) em relação à altura
 * do header, em vez de assumir um threshold fixo.
 */
export function useScrolledPastSearch() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const header = document.querySelector('header')
    const fullSearch = document.querySelector('header + section')
    if (!header || !fullSearch) return

    let ticking = false
    const update = () => {
      const rect = fullSearch.getBoundingClientRect()
      const headerH = (header as HTMLElement).offsetHeight
      setScrolled(rect.bottom < headerH)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}
