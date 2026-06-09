import {ImageSourcePropType} from 'react-native';

export type CascadesGuestStayLocationItem = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

export const CASCADES_GUEST_STAY_HOME_LOCATIONS: CascadesGuestStayLocationItem[] =
  [
    {
      id: 'live-jazz',
      badge: 'TONIGHT',
      title: 'Live Jazz Night',
      subtitle: 'The Cascade Lounge',
      image: require('../../../CascadesGuestStayAssets/StevensCocktailCornerBarKitchen.png'),
    },
    {
      id: 'poker',
      badge: 'SEATS AVAILABLE',
      title: 'Poker Tournament',
      subtitle: 'Main Casino Floor',
      image: require('../../../CascadesGuestStayAssets/MatchEateryPublicHouse.png'),
    },
    {
      id: 'rooftop',
      badge: 'NEW',
      title: 'Rooftop Bar Opens',
      subtitle: 'Sky Lounge Level 22',
      image: require('../../../CascadesGuestStayAssets/KingTapsWillowbrook.png'),
    },
  ];

export const CASCADES_GUEST_STAY_WEATHER = {
  city: 'LANGLEY, BC',
  temperature: 14,
  condition: 'Partly Cloudy',
  high: 17,
  low: 9,
};
