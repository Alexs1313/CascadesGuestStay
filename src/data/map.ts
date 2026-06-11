import {ImageSourcePropType} from 'react-native';

import {venueImages} from './assets';
import {
  MAP_PIN,
  MAP_PIN_GREEN,
  MAP_PIN_PURPLE,
} from '../constants/mapStyle';

export type MapCategory =
  | 'all'
  | 'familyFun'
  | 'liveShows'
  | 'nightlife';

export type MapVenue = {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<MapCategory, 'all'>;
  level: string;
  hours: string;
  rating: number;
  latitude: number;
  longitude: number;
  image: ImageSourcePropType;
};

export const MAP_CATEGORIES: {
  key: MapCategory;
  label: string;
}[] = [
  {key: 'all', label: 'All'},
  {key: 'familyFun', label: '🎳 Family'},
  {key: 'liveShows', label: '🎭 Shows'},
  {key: 'nightlife', label: '🍻 Nightlife'},
];

export const MAP_VENUES: MapVenue[] = [
  {
    id: 'cascade-lanes',
    title: 'Cascade Lanes',
    subtitle: 'Bowling Alley',
    category: 'familyFun',
    level: 'Level 1',
    hours: '10:00 AM – 12:00 AM',
    rating: 4.7,
    latitude: 49.1048,
    longitude: -122.6612,
    image: venueImages.willowbrookLanes,
  },
  {
    id: 'arcade-universe',
    title: 'Arcade Universe',
    subtitle: 'Arcade',
    category: 'familyFun',
    level: 'Level 1',
    hours: '11:00 AM – 11:00 PM',
    rating: 4.5,
    latitude: 49.1042,
    longitude: -122.6602,
    image: venueImages.extremeAirPark,
  },
  {
    id: 'the-grand-stage',
    title: 'The Grand Stage',
    subtitle: 'Live Theatre',
    category: 'liveShows',
    level: 'Level 2',
    hours: 'Doors open 1hr before show',
    rating: 4.9,
    latitude: 49.105,
    longitude: -122.6598,
    image: venueImages.langleyEventsCentre,
  },
  {
    id: 'jazz-blue-lounge',
    title: 'Jazz & Blue Lounge',
    subtitle: 'Live Music Lounge',
    category: 'liveShows',
    level: 'Level 3',
    hours: '7:00 PM – 2:00 AM',
    rating: 4.8,
    latitude: 49.1043,
    longitude: -122.6615,
    image: venueImages.bezArtsHub,
  },
  {
    id: 'cascade-nightclub',
    title: 'Cascade Nightclub',
    subtitle: 'Nightclub',
    category: 'nightlife',
    level: 'Level 4',
    hours: '10:00 PM – 4:00 AM',
    rating: 4.6,
    latitude: 49.1046,
    longitude: -122.66,
    image: venueImages.matchEatery,
  },
  {
    id: 'sky-lounge',
    title: 'Sky Lounge',
    subtitle: 'Rooftop Lounge',
    category: 'nightlife',
    level: 'Level 22',
    hours: '5:00 PM – 2:00 AM',
    rating: 4.9,
    latitude: 49.1052,
    longitude: -122.6605,
    image: venueImages.steakFishLounge,
  },
  {
    id: 'resort-bar',
    title: 'Resort Bar',
    subtitle: 'Cocktail Bar',
    category: 'nightlife',
    level: 'Level 1',
    hours: '4:00 PM – 1:00 AM',
    rating: 4.4,
    latitude: 49.104,
    longitude: -122.661,
    image: venueImages.stevensCocktailCorner,
  },
];

export function getMapVenues(
  category: MapCategory,
): MapVenue[] {
  if (category === 'all') {
    return MAP_VENUES;
  }
  return MAP_VENUES.filter(
    venue => venue.category === category,
  );
}

export function getMapCategoryColor(
  category: Exclude<MapCategory, 'all'>,
): string {
  switch (category) {
    case 'familyFun':
      return '#7ED8A4';
    case 'liveShows':
      return '#C096E8';
    case 'nightlife':
      return '#FABF14';
  }
}

export function getMapPinIcon(
  category: Exclude<MapCategory, 'all'>,
): ImageSourcePropType {
  switch (category) {
    case 'familyFun':
      return MAP_PIN_GREEN;
    case 'liveShows':
      return MAP_PIN_PURPLE;
    case 'nightlife':
      return MAP_PIN;
  }
}
