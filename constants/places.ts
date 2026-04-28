export type Spend = 'cheap' | 'mid' | 'splurge';

export type Place = {
  id: string;
  name: string;
  neighborhood: string;
  vibeTags: string[];
  spend: Spend;
  imageUrl: string;
  description: string;
};

export const VIBE_EMOJI: Record<string, string> = {
  aesthetic: '📸',
  indie: '🕯️',
  'study-friendly': '📖',
  'late-night': '🌙',
  brunch: '🍳',
  'pet-friendly': '🐾',
};

export const SPEND_SYMBOL: Record<Spend, string> = {
  cheap: '₹',
  mid: '₹₹',
  splurge: '₹₹₹',
};

export const PLACES: Place[] = [
  {
    id: '1',
    name: 'Blue Tokai',
    neighborhood: 'Khar West',
    vibeTags: ['aesthetic', 'study-friendly'],
    spend: 'mid',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    description:
      'Slow-roasted single-origin coffee in a sun-flooded warehouse. Big shared tables, plug points everywhere, the kind of soft jazz that lets you actually finish a chapter.',
  },
  {
    id: '2',
    name: 'Soft Serve Society',
    neighborhood: 'Bandra',
    vibeTags: ['aesthetic', 'brunch'],
    spend: 'mid',
    imageUrl: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=800',
    description:
      'Pastel walls, gelato on tap, and brunch plates designed for the camera. Bring a friend who actually eats — portions are generous, not just pretty.',
  },
  {
    id: '3',
    name: 'Bonobo',
    neighborhood: 'Bandra West',
    vibeTags: ['late-night', 'indie'],
    spend: 'splurge',
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800',
    description:
      'Rooftop perch with fairy lights and a DJ booth. Cocktails lean experimental — ask the bartender what is on rotation. Best after 10pm on a weekday.',
  },
  {
    id: '4',
    name: 'Kala Ghoda Cafe',
    neighborhood: 'Fort',
    vibeTags: ['indie', 'study-friendly'],
    spend: 'cheap',
    imageUrl: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800',
    description:
      'A heritage building turned literary cafe. Worn wood, slow service, strong filter coffee. Writers, students, and the occasional poet on a typewriter.',
  },
  {
    id: '5',
    name: 'Subko',
    neighborhood: 'Bandra',
    vibeTags: ['aesthetic', 'pet-friendly'],
    spend: 'splurge',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800',
    description:
      'Specialty coffee meets bakery meets concept store. Concrete floors, exposed beams, and a sourdough cult. Dogs welcome on the patio.',
  },
  {
    id: '6',
    name: 'Doolally',
    neighborhood: 'Khar',
    vibeTags: ['late-night', 'pet-friendly'],
    spend: 'mid',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
    description:
      'Microbrewery with a board-game shelf and zero pretense. Order the wheat beer, claim the corner booth, lose three hours to Codenames.',
  },
];
