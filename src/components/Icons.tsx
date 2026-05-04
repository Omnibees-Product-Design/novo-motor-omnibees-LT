/**
 * Ícones SVG inline. Sem dependências externas — controlo total de cor/tamanho.
 * Aceitam className (para tamanho) e color (para stroke).
 */
type IconProps = { className?: string; color?: string; strokeWidth?: number }

const base = (p: IconProps) => ({
  className: p.className ?? 'w-4 h-4',
  fill: 'none',
  stroke: p.color ?? 'currentColor',
  strokeWidth: p.strokeWidth ?? 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
})

export const SearchIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: p.strokeWidth ?? 2.5 })}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

export const UserIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
)

export const ShareIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
)

export const StarIcon = ({ className = 'w-4 h-4', color = '#F59E0B' }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export const CameraIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

export const CheckIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: p.strokeWidth ?? 2.5 })}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const XCircleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
)

export const CoffeeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2" />
    <path d="M18 2v3a2 2 0 0 0 4 0V2" />
    <path d="M21 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  </svg>
)

export const PlusIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: p.strokeWidth ?? 2.5 })}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export const MinusIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: p.strokeWidth ?? 2.5 })}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export const TrashIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
)

export const ChevronLeftIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: p.strokeWidth ?? 2.5 })}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: p.strokeWidth ?? 2.5 })}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export const CloseIcon = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: p.strokeWidth ?? 2.5 })}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 17a19.44 19.44 0 0 1-4.59-4.59A19.79 19.79 0 0 1 3 3.18 2 2 0 0 1 5 1h2.09a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6.99 7l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 17z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
    <path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
)

export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

export const PoolIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 12h20" />
    <path d="M2 17c2-2.5 4-3.5 6-3.5s4 2 6 2 4-1 6-3.5" />
    <path d="M2 7c2 2.5 4 3.5 6 3.5s4-2 6-2 4 1 6 3.5" />
  </svg>
)

/* Amenity-specific icons */
export const ParkingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M5 11V7a7 7 0 0 1 14 0v4" />
  </svg>
)

export const WifiIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
)

export const GymIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.5 6.5l11 11" />
    <path d="M21 21l-1-1" />
    <path d="M3 3l1 1" />
    <path d="M18 22l4-4" />
    <path d="M2 6l4-4" />
    <path d="M3 10l7-7" />
    <path d="M14 21l7-7" />
  </svg>
)

export const AccessibilityIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="4" r="2" />
    <path d="M19 13v-2a7 7 0 0 0-14 0v2" />
    <path d="M9 21l3-6 3 6" />
    <path d="M5 21h14" />
  </svg>
)

export const BreakfastIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
)

export const SpaIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

export const TvIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

export const RestaurantIcon = BuildingIcon

/* Room detail icons */
export const RoomSizeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
)

export const BedIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4" />
    <path d="M2 9h20" />
    <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9" />
    <path d="M6 9V5" />
    <path d="M18 9V5" />
  </svg>
)

import type { AmenityIcon } from '../types/hotel'

export function amenityIconFor(name: AmenityIcon) {
  switch (name) {
    case 'parking':       return ParkingIcon
    case 'wifi':          return WifiIcon
    case 'gym':           return GymIcon
    case 'accessibility': return AccessibilityIcon
    case 'breakfast':     return BreakfastIcon
    case 'pool':          return PoolIcon
    case 'spa':           return SpaIcon
    case 'tv':            return TvIcon
    case 'restaurant':    return RestaurantIcon
  }
}

export function poiIconFor(name: 'pin' | 'phone' | 'pool' | 'building') {
  switch (name) {
    case 'pin':      return PinIcon
    case 'phone':    return PhoneIcon
    case 'pool':     return PoolIcon
    case 'building': return BuildingIcon
  }
}
