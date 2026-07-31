import { Gallery } from '@/types';

/**
 * Placeholder galleries — swap title/location/date/description and
 * replace each image's placeholder with a real photo when ready.
 * The `label` on each image is just a reference tag for slotting in art.
 */
export const galleries: Gallery[] = [
  {
    slug: 'location-01',
    title: 'Location 01',
    location: 'City, Country',
    date: '2026',
    description:
      'Placeholder description for this shoot — replace with a few lines about the location, the light, or what you were going for.',
    images: [
      { label: 'A' },
      { label: 'B' },
      { label: 'C' },
      { label: 'D' },
      { label: 'E' },
      { label: 'F' },
    ],
  },
  {
    slug: 'location-02',
    title: 'Location 02',
    location: 'City, Country',
    date: '2026',
    description:
      'Placeholder description for this shoot — replace with a few lines about the location, the light, or what you were going for.',
    images: [
      { label: 'A' },
      { label: 'B' },
      { label: 'C' },
      { label: 'D' },
      { label: 'E' },
    ],
  },
  {
    slug: 'location-03',
    title: 'Location 03',
    location: 'City, Country',
    date: '2026',
    description:
      'Placeholder description for this shoot — replace with a few lines about the location, the light, or what you were going for.',
    images: [
      { label: 'A' },
      { label: 'B' },
      { label: 'C' },
      { label: 'D' },
      { label: 'E' },
      { label: 'F' },
      { label: 'G' },
    ],
  },
  {
    slug: 'location-04',
    title: 'Location 04',
    location: 'City, Country',
    date: '2026',
    description:
      'Placeholder description for this shoot — replace with a few lines about the location, the light, or what you were going for.',
    images: [{ label: 'A' }, { label: 'B' }, { label: 'C' }, { label: 'D' }],
  },
];
