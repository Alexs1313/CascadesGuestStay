import {ImageSourcePropType} from 'react-native';
import {
  CASCADES_GUEST_STAY_MAP_PIN,
  CASCADES_GUEST_STAY_MAP_PIN_GREEN,
  CASCADES_GUEST_STAY_MAP_PIN_PURPLE,
} from '../CascadesGuestStayMapStyle/CascadesGuestStayMapStyle';

export type CascadesGuestStayMapCategory =
  | 'all'
  | 'familyFun'
  | 'liveShows'
  | 'nightlife';

export type CascadesGuestStayMapVenue = {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<CascadesGuestStayMapCategory, 'all'>;
  level: string;
  hours: string;
  rating: number;
  latitude: number;
  longitude: number;
  image: ImageSourcePropType;
};

export const CASCADES_GUEST_STAY_MAP_CATEGORIES: {
  key: CascadesGuestStayMapCategory;
  label: string;
}[] = [
  {key: 'all', label: 'All'},
  {key: 'familyFun', label: '🎳 Family'},
  {key: 'liveShows', label: '🎭 Shows'},
  {key: 'nightlife', label: '🍻 Nightlife'},
];

export const CASCADES_GUEST_STAY_MAP_VENUES: CascadesGuestStayMapVenue[] = [
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
    image: require('../../../CascadesGuestStayAssets/GuestStayWillowbrookLanes.png'),
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
    image: require('../../../CascadesGuestStayAssets/GuestStayExtremeAirParkLangley.png'),
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
    image: require('../../../CascadesGuestStayAssets/GuestStayLangleyEventsCentre.png'),
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
    image: require('../../../CascadesGuestStayAssets/GuestStayBezArtsHub.png'),
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
    image: require('../../../CascadesGuestStayAssets/GuestStayMatchEateryPublicHouse.png'),
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
    image: require('../../../CascadesGuestStayAssets/GuestStaySteakFishLounge.png'),
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
    image: require('../../../CascadesGuestStayAssets/GuestStayStevensCocktailCornerBarKitchen.png'),
  },
];

export function cascadesGuestStayGetMapVenues(
  category: CascadesGuestStayMapCategory,
): CascadesGuestStayMapVenue[] {
  if (category === 'all') {
    return CASCADES_GUEST_STAY_MAP_VENUES;
  }
  return CASCADES_GUEST_STAY_MAP_VENUES.filter(
    venue => venue.category === category,
  );
}

export function cascadesGuestStayGetMapCategoryColor(
  category: Exclude<CascadesGuestStayMapCategory, 'all'>,
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

export function cascadesGuestStayGetMapPinIcon(
  category: Exclude<CascadesGuestStayMapCategory, 'all'>,
): ImageSourcePropType {
  switch (category) {
    case 'familyFun':
      return CASCADES_GUEST_STAY_MAP_PIN_GREEN;
    case 'liveShows':
      return CASCADES_GUEST_STAY_MAP_PIN_PURPLE;
    case 'nightlife':
      return CASCADES_GUEST_STAY_MAP_PIN;
  }
}
