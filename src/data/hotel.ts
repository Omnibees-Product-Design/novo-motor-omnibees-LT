import type { Hotel, Stay } from '../types/hotel'

export const stay: Stay = {
  destination: 'Faro, Portugal',
  checkIn: '28 Abr',
  checkOut: '1 Mai',
  guests: 2,
  roomsRequested: 1,
  nights: 3,
}

export const hotel: Hotel = {
  id: 'ux-faro-hotel',
  name: 'UX Faro Hotel',
  city: 'Faro',
  address: 'Rua Alfredo Bueno, 1500 · Faro, SP',
  rating: 8.4,
  ratingLabel: 'Muito Bom',
  reviewCount: 1247,
  starCount: 3,
  description:
    'Localizado a poucos minutos do centro de Faro, o UX Faro Hotel oferece estrutura completa para viagens de lazer e negócios — academia 24h, restaurante, piscina e amplo estacionamento. Quartos amplos e silenciosos, com vista para a área verde.',
  heroPhotos: [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=85',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
    'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80',
  ],
  totalPhotoCount: 37,
  amenities: [
    { id: 'parking',       label: 'Estacionamento gratuito', icon: 'parking' },
    { id: 'wifi',          label: 'Wi-Fi gratuito',          icon: 'wifi' },
    { id: 'gym',           label: 'Academia 24h',            icon: 'gym' },
    { id: 'accessibility', label: 'Acessibilidade',          icon: 'accessibility' },
    { id: 'breakfast',     label: 'Café da manhã',           icon: 'breakfast' },
    { id: 'pool',          label: 'Piscina exterior',        icon: 'pool' },
    { id: 'spa',           label: 'Spa & bem-estar',         icon: 'spa' },
    { id: 'tv',            label: 'Smart TV',                icon: 'tv' },
    { id: 'restaurant',    label: 'Restaurante no hotel',    icon: 'restaurant' },
  ],
  pointsOfInterest: [
    { id: 'centro',     name: 'Centro Histórico de Faro', distance: '5 min a pé',     detail: 'Rua do Infante Dom Henrique', icon: 'pin' },
    { id: 'aeroporto',  name: 'Aeroporto de Faro',        distance: '8 min de carro', detail: 'FAO',                         icon: 'phone' },
    { id: 'praia',      name: 'Praia de Faro',            distance: '15 min de carro', detail: 'Ilha Barreira',              icon: 'pool' },
    { id: 'ria',        name: 'Ria Formosa',              distance: '10 min a pé',     detail: 'Parque Natural',             icon: 'building' },
  ],
  rooms: [
    {
      id: 'duas-camas-solteiro',
      name: 'Duas camas de solteiro',
      description:
        'Quarto confortável com duas camas de solteiro, ar-condicionado, TV LED e escrivaninha de trabalho. Vista para a área verde do hotel.',
      guests: 3,
      sizeM2: 17,
      bedConfig: '2 camas de solteiro',
      photos: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      ],
      rates: [
        {
          id: 'r1-exclusiva',
          name: 'Tarifa exclusiva',
          meal: 'Café da manhã',
          cancellable: false,
          perks: ['Wi-Fi gratuito', 'Estacionamento'],
          pricePerNight: 270,
          originalPrice: 360,
          discountPct: 25,
        },
        {
          id: 'r1-flexivel',
          name: 'Tarifa flexível',
          meal: 'Café da manhã',
          cancellable: true,
          cancelLabel: 'Cancelamento grátis até 27 abr',
          perks: ['Wi-Fi gratuito', 'Estacionamento', 'Early check-in'],
          pricePerNight: 316.80,
        },
      ],
    },
    {
      id: 'adaptado',
      name: 'Quarto adaptado',
      description:
        'Quarto adaptado para hóspedes com mobilidade reduzida. Banheiro com barras de apoio, espaço amplo de circulação e cama queen.',
      guests: 2,
      sizeM2: 27,
      bedConfig: 'Cama queen',
      photos: [
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
      ],
      rates: [
        {
          id: 'r2-exclusiva',
          name: 'Tarifa exclusiva',
          meal: 'Café da manhã',
          cancellable: false,
          perks: ['Wi-Fi gratuito', 'Estacionamento'],
          pricePerNight: 270,
        },
        {
          id: 'r2-flexivel',
          name: 'Tarifa flexível',
          meal: 'Café da manhã',
          cancellable: true,
          cancelLabel: 'Cancelamento grátis até 27 abr',
          perks: ['Wi-Fi gratuito', 'Estacionamento', 'Early check-in'],
          pricePerNight: 316.80,
        },
      ],
    },
    {
      id: 'suite-hidromassagem',
      name: 'Suíte com hidromassagem',
      description:
        'Suíte espaçosa com cama king, banheira de hidromassagem privativa, sala de estar e varanda com vista panorâmica. Roupões e amenities premium inclusos.',
      guests: 2,
      sizeM2: 35,
      bedConfig: 'Cama king',
      photos: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      ],
      rates: [
        {
          id: 'r3-exclusiva',
          name: 'Tarifa exclusiva',
          meal: 'Meia pensão (café + jantar)',
          cancellable: false,
          perks: ['Wi-Fi gratuito', 'Champagne de boas-vindas', 'Roupão premium', 'Late check-out'],
          pricePerNight: 420,
          originalPrice: 560,
          discountPct: 25,
        },
      ],
    },
  ],
}
