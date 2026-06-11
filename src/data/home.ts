import {ImageSourcePropType} from 'react-native';

import {venueImages} from './assets';

export type LocationItem = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

export const HOME_LOCATIONS: LocationItem[] =
  [
    {
      id: 'live-jazz',
      badge: 'TONIGHT',
      title: 'Live Jazz Night',
      subtitle: 'The Cascade Lounge',
      image: venueImages.stevensCocktailCorner,
    },
    {
      id: 'evening-dining',
      badge: 'THIS EVENING',
      title: 'Resort Dining Hour',
      subtitle: 'Match Eatery & Public House',
      image: venueImages.matchEatery,
    },
    {
      id: 'rooftop',
      badge: 'NEW',
      title: 'Rooftop Bar Opens',
      subtitle: 'Sky Lounge Level 22',
      image: venueImages.kingTapsWillowbrook,
    },
  ];

export const WEATHER = {
  city: 'LANGLEY, BC',
  temperature: 14,
  condition: 'Partly Cloudy',
  high: 17,
  low: 9,
};
