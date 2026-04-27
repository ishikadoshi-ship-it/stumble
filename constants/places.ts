export type Spend = 'cheap' | 'mid' | 'splurge';

export type Place = {
  id: string;
  name: string;
  neighborhood: string;
  vibeTags: string[];
  spend: Spend;
  imageUrl: string;
};

export const PLACES: Place[] = [
  {
    id: '1',
    name: 'Blue Tokai',
    neighborhood: 'Khar West',
    vibeTags: ['aesthetic', 'study-friendly'],
    spend: 'mid',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
  },
  {
    id: '2',
    name: 'Soft Serve Society',
    neighborhood: 'Bandra',
    vibeTags: ['aesthetic', 'brunch'],
    spend: 'mid',
    imageUrl: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=800',
  },
  {
    id: '3',
    name: 'Bonobo',
    neighborhood: 'Bandra West',
    vibeTags: ['late-night', 'indie'],
    spend: 'splurge',
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800',
  },
  {
    id: '4',
    name: 'Kala Ghoda Cafe',
    neighborhood: 'Fort',
    vibeTags: ['indie', 'study-friendly'],
    spend: 'cheap',
    imageUrl: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800',
  },
  {
    id: '5',
    name: 'Subko',
    neighborhood: 'Bandra',
    vibeTags: ['aesthetic', 'pet-friendly'],
    spend: 'splurge',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800',
  },
  {
    id: '6',
    name: 'Doolally',
    neighborhood: 'Khar',
    vibeTags: ['late-night', 'pet-friendly'],
    spend: 'mid',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800',
  },
];
