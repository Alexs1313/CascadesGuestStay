import {ImageSourcePropType} from 'react-native';

export type CascadesGuestStayExploreCategory =
  | 'all'
  | 'familyFun'
  | 'liveShows'
  | 'nightlife';

export type CascadesGuestStayVenue = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<CascadesGuestStayExploreCategory, 'all'>;
  image: ImageSourcePropType;
  latitude: number;
  longitude: number;
  rating: number;
  reviewCount: number;
  distanceLabel: string;
  hours: string;
  tags: string[];
};

export const CASCADES_GUEST_STAY_EXPLORE_CATEGORIES: {
  key: CascadesGuestStayExploreCategory;
  label: string;
  icon: string;
}[] = [
  {key: 'all', label: 'All Locations', icon: '✨'},
  {key: 'familyFun', label: 'Family Fun', icon: '🎳'},
  {key: 'liveShows', label: 'Live Shows', icon: '🎭'},
  {key: 'nightlife', label: 'Nightlife', icon: '🍻'},
];

export const CASCADES_GUEST_STAY_CATEGORY_BADGE: Record<
  Exclude<CascadesGuestStayExploreCategory, 'all'>,
  string
> = {
  familyFun: 'Family Fun',
  liveShows: 'Live Shows',
  nightlife: 'Nightlife',
};

export const CASCADES_GUEST_STAY_EXPLORE_VENUES: CascadesGuestStayVenue[] = [
  {
    id: 'the-great-escape',
    title: 'The Great Escape',
    subtitle: 'Escape Room',
    description:
      'One of Langley\'s most popular escape room venues. Guests can choose from several immersive themed rooms featuring puzzles, hidden clues, and interactive challenges suitable for families, friends, and team-building groups.',
    category: 'familyFun',
    image: require('../../../CascadesGuestStayAssets/GuestStayTheGreatEscape.png'),
    latitude: 49.1047,
    longitude: -122.6608,
    rating: 4.8,
    reviewCount: 412,
    distanceLabel: 'Downtown · 3 min walk',
    hours: '11:00 AM – 10:00 PM',
    tags: ['Escape Room', 'Family', 'Team Building'],
  },
  {
    id: 'extreme-air-park',
    title: 'Extreme Air Park Langley',
    subtitle: 'Trampoline Park',
    description:
      'Large indoor trampoline and activity center offering wall-to-wall trampolines, foam pits, dodgeball courts, climbing attractions, and dedicated family zones. A great destination for active entertainment regardless of weather.',
    category: 'familyFun',
    image: require('../../../CascadesGuestStayAssets/GuestStayExtremeAirParkLangley.png'),
    latitude: 49.1143,
    longitude: -122.6691,
    rating: 4.6,
    reviewCount: 891,
    distanceLabel: '1.3 km · 5 min drive',
    hours: '10:00 AM – 9:00 PM',
    tags: ['Trampolines', 'Family', 'Indoor'],
  },
  {
    id: 'willowbrook-lanes',
    title: 'Willowbrook Lanes',
    subtitle: 'Bowling Center',
    description:
      'Modern bowling center featuring multiple lanes, arcade games, food services, and family-friendly entertainment. Ideal for casual games, group outings, and evening recreation.',
    category: 'familyFun',
    image: require('../../../CascadesGuestStayAssets/GuestStayWillowbrookLanes.png'),
    latitude: 49.1149,
    longitude: -122.6767,
    rating: 4.5,
    reviewCount: 624,
    distanceLabel: '1.8 km · 6 min drive',
    hours: '10:00 AM – 12:00 AM',
    tags: ['Bowling', 'Family', 'Arcade'],
  },
  {
    id: 'canadian-museum-of-flight',
    title: 'Canadian Museum of Flight',
    subtitle: 'Aviation Museum',
    description:
      'Interactive aviation museum located at Langley Regional Airport. Visitors can explore historic aircraft, aviation exhibits, helicopters, and educational displays that appeal to both children and adults.',
    category: 'familyFun',
    image: require('../../../CascadesGuestStayAssets/GuestStayCanadianMuseumOfFlight.png'),
    latitude: 49.1008,
    longitude: -122.6308,
    rating: 4.7,
    reviewCount: 318,
    distanceLabel: '2.5 km · 7 min drive',
    hours: '10:00 AM – 4:00 PM',
    tags: ['Museum', 'Family', 'Education'],
  },
  {
    id: 'langley-events-centre-family',
    title: 'Langley Events Centre',
    subtitle: 'Sports & Entertainment',
    description:
      'A large multi-purpose sports and entertainment complex hosting sporting events, gymnastics competitions, community activities, family programs, and special seasonal events throughout the year.',
    category: 'familyFun',
    image: require('../../../CascadesGuestStayAssets/GuestStayLangleyEventsCentre.png'),
    latitude: 49.1336,
    longitude: -122.6615,
    rating: 4.4,
    reviewCount: 756,
    distanceLabel: '3.2 km · 8 min drive',
    hours: '9:00 AM – 10:00 PM',
    tags: ['Sports', 'Family', 'Events'],
  },
  {
    id: 'twilight-drive-in',
    title: 'Twilight Drive-In Theatre',
    subtitle: 'Drive-In Cinema',
    description:
      'One of the last remaining drive-in movie theaters in British Columbia. Families can enjoy movies from the comfort of their vehicle while experiencing a classic outdoor cinema atmosphere.',
    category: 'familyFun',
    image: require('../../../CascadesGuestStayAssets/GuestStayTwilightDriveInTheatre.png'),
    latitude: 49.0169,
    longitude: -122.4848,
    rating: 4.6,
    reviewCount: 523,
    distanceLabel: '17 km · 22 min drive',
    hours: '7:00 PM – 12:00 AM',
    tags: ['Movies', 'Family', 'Outdoor'],
  },
  {
    id: 'langley-events-centre-shows',
    title: 'Langley Events Centre',
    subtitle: 'Event Venue',
    description:
      'The largest entertainment and event venue in Langley. It hosts major sporting events, concerts, community festivals, exhibitions, tournaments, and large-scale live performances throughout the year.',
    category: 'liveShows',
    image: require('../../../CascadesGuestStayAssets/GuestStayLangleyEventsCentre-1.png'),
    latitude: 49.1468,
    longitude: -122.6697,
    rating: 4.5,
    reviewCount: 1204,
    distanceLabel: '4.8 km · 10 min drive',
    hours: 'Varies by event',
    tags: ['Concerts', 'Sports', 'Festivals'],
  },
  {
    id: 'theatre-in-the-country',
    title: 'Theatre in the Country',
    subtitle: 'Dinner Theatre',
    description:
      'A unique dinner theatre venue offering live musical productions, comedy performances, seasonal shows, and interactive entertainment in an intimate countryside setting.',
    category: 'liveShows',
    image: require('../../../CascadesGuestStayAssets/GuestStayTheatreInTheCountry.png'),
    latitude: 49.1037,
    longitude: -122.6578,
    rating: 4.8,
    reviewCount: 287,
    distanceLabel: '1.2 km · 4 min drive',
    hours: '5:00 PM – 11:00 PM',
    tags: ['Theatre', 'Dinner', 'Live Music'],
  },
  {
    id: 'bez-arts-hub',
    title: 'Bez Arts Hub',
    subtitle: 'Arts & Performance',
    description:
      'A modern arts and performance venue featuring live music concerts, cultural events, community performances, workshops, and intimate entertainment experiences.',
    category: 'liveShows',
    image: require('../../../CascadesGuestStayAssets/GuestStayBezArtsHub.png'),
    latitude: 49.1195,
    longitude: -122.656,
    rating: 4.7,
    reviewCount: 198,
    distanceLabel: '1.7 km · 5 min drive',
    hours: '6:00 PM – 11:00 PM',
    tags: ['Music', 'Arts', 'Culture'],
  },
  {
    id: 'spirit-square',
    title: 'Spirit Square',
    subtitle: 'Outdoor Performance',
    description:
      'An outdoor community performance space in downtown Langley that regularly hosts concerts, cultural celebrations, public performances, seasonal festivals, and special community events.',
    category: 'liveShows',
    image: require('../../../CascadesGuestStayAssets/GuestStaySpiritSquare.png'),
    latitude: 49.1041,
    longitude: -122.6602,
    rating: 4.3,
    reviewCount: 156,
    distanceLabel: 'Downtown · 2 min walk',
    hours: 'Varies by event',
    tags: ['Outdoor', 'Festivals', 'Free'],
  },
  {
    id: 'rose-gellert-hall',
    title: 'Rose Gellert Hall',
    subtitle: 'Concert Hall',
    description:
      'A concert and performing arts venue located within the Langley Community Music School. It hosts classical music performances, recitals, cultural programs, and special artistic events throughout the year.',
    category: 'liveShows',
    image: require('../../../CascadesGuestStayAssets/GuestStayRoseGellertHall.png'),
    latitude: 49.0908,
    longitude: -122.6609,
    rating: 4.6,
    reviewCount: 134,
    distanceLabel: '1.5 km · 5 min drive',
    hours: 'Varies by event',
    tags: ['Classical', 'Recitals', 'Arts'],
  },
  {
    id: 'coast-convention-centre',
    title: 'Coast Langley City Hotel & Convention Centre',
    subtitle: 'Convention Centre',
    description:
      'A major convention and event venue connected to Cascades Casino Resort. It hosts live entertainment, corporate events, banquets, conferences, special shows, and community gatherings.',
    category: 'liveShows',
    image: require('../../../CascadesGuestStayAssets/GuestStayCoastLangleyCityHotelConventionCentre.png'),
    latitude: 49.1045,
    longitude: -122.6607,
    rating: 4.4,
    reviewCount: 445,
    distanceLabel: 'On-site · 1 min walk',
    hours: 'Varies by event',
    tags: ['Conventions', 'Banquets', 'Shows'],
  },
  {
    id: 'match-eatery',
    title: 'Match Eatery & Public House',
    subtitle: 'Sports Bar & Eatery',
    description:
      'A lively social venue located inside Cascades Casino Resort. Guests can enjoy sports broadcasts, signature cocktails, live entertainment nights, and a vibrant atmosphere that makes it one of the most popular evening destinations in Langley.',
    category: 'nightlife',
    image: require('../../../CascadesGuestStayAssets/GuestStayMatchEateryPublicHouse.png'),
    latitude: 49.1045,
    longitude: -122.6607,
    rating: 4.5,
    reviewCount: 678,
    distanceLabel: 'On-site · 1 min walk',
    hours: '11:00 AM – 2:00 AM',
    tags: ['Sports', 'Cocktails', 'Live Music'],
  },
  {
    id: 'stevens-cocktail-corner',
    title: "Steven's Cocktail Corner Bar + Kitchen",
    subtitle: 'Cocktail Bar',
    description:
      'A trendy downtown cocktail destination known for its creative drinks, stylish interior, social atmosphere, and modern dining experience. Popular among locals looking for an upscale night out.',
    category: 'nightlife',
    image: require('../../../CascadesGuestStayAssets/GuestStayStevensCocktailCornerBarKitchen.png'),
    latitude: 49.1049,
    longitude: -122.6599,
    rating: 4.6,
    reviewCount: 342,
    distanceLabel: 'Downtown · 3 min walk',
    hours: '4:00 PM – 12:00 AM',
    tags: ['Cocktails', 'Dining', 'Upscale'],
  },
  {
    id: 'king-taps-willowbrook',
    title: 'King Taps Willowbrook',
    subtitle: 'Brewpub',
    description:
      'A modern social hotspot featuring craft beers, signature cocktails, large-screen sports viewing, and a spacious patio. The energetic atmosphere makes it a favorite gathering place during evenings and weekends.',
    category: 'nightlife',
    image: require('../../../CascadesGuestStayAssets/GuestStayKingTapsWillowbrook.png'),
    latitude: 49.1142,
    longitude: -122.6695,
    rating: 4.4,
    reviewCount: 512,
    distanceLabel: '1.3 km · 5 min drive',
    hours: '11:00 AM – 1:00 AM',
    tags: ['Craft Beer', 'Patio', 'Sports'],
  },
  {
    id: 'rendezvous-pub',
    title: 'Rendezvous Pub',
    subtitle: 'Neighborhood Pub',
    description:
      'A long-standing neighborhood pub offering live music, themed events, game nights, and a welcoming social environment. A great location for casual nightlife and meeting locals.',
    category: 'nightlife',
    image: require('../../../CascadesGuestStayAssets/GuestStayRendezvousPub.png'),
    latitude: 49.1038,
    longitude: -122.6692,
    rating: 4.3,
    reviewCount: 289,
    distanceLabel: '0.8 km · 3 min drive',
    hours: '11:00 AM – 12:00 AM',
    tags: ['Pub', 'Live Music', 'Games'],
  },
  {
    id: 'newlands-bar-grill',
    title: 'Newlands Bar & Grill',
    subtitle: 'Bar & Grill',
    description:
      'Popular evening destination featuring live entertainment, lounge-style seating, drinks, and social gatherings. The relaxed atmosphere attracts both visitors and local residents looking for a fun night out.',
    category: 'nightlife',
    image: require('../../../CascadesGuestStayAssets/GuestStayNewlandsBarGrill.png'),
    latitude: 49.0898,
    longitude: -122.6635,
    rating: 4.2,
    reviewCount: 201,
    distanceLabel: '1.6 km · 5 min drive',
    hours: '4:00 PM – 11:00 PM',
    tags: ['Lounge', 'Live Music', 'Grill'],
  },
  {
    id: 'steak-fish-lounge',
    title: 'Steak + Fish Lounge',
    subtitle: 'Cocktail Lounge',
    description:
      'An upscale cocktail and dining lounge located within Cascades Casino Resort. Known for premium cocktails, elegant surroundings, and sophisticated evening experiences suitable for guests seeking a refined social atmosphere.',
    category: 'nightlife',
    image: require('../../../CascadesGuestStayAssets/GuestStaySteakFishLounge.png'),
    latitude: 49.1045,
    longitude: -122.6607,
    rating: 4.7,
    reviewCount: 456,
    distanceLabel: 'On-site · 1 min walk',
    hours: '5:00 PM – 12:00 AM',
    tags: ['Cocktails', 'Fine Dining', 'Upscale'],
  },
];

export function cascadesGuestStayGetExploreVenues(
  category: CascadesGuestStayExploreCategory,
): CascadesGuestStayVenue[] {
  if (category === 'all') {
    return CASCADES_GUEST_STAY_EXPLORE_VENUES;
  }
  return CASCADES_GUEST_STAY_EXPLORE_VENUES.filter(
    venue => venue.category === category,
  );
}
