import {ImageSourcePropType} from 'react-native';

export type CascadesGuestStayOnboardingStep = {
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  buttonLabel: string;
  image: ImageSourcePropType;
};

export const CASCADES_GUEST_STAY_ONBOARDING_STEPS: CascadesGuestStayOnboardingStep[] =
  [
    {
      badge: 'GUEST STAY',
      subtitle: 'Your Guest Experience',
      title: 'Welcome to Cascades Casino Resort',
      description:
        'Your personal companion for a seamless stay at Cascades Resort. Manage your room, dining, entertainment, and guest services — all from one place.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/GuestStayonboard1.png'),
    },
    {
      badge: 'YOUR STAY',
      subtitle: 'Seamless Room Management',
      title: 'Everything at Your Fingertips',
      description:
        'Check in digitally, access your room QR code, control your climate settings, and manage your entire stay from one elegant interface.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/GuestStayonboard2.png'),
    },
    {
      badge: 'DINING',
      subtitle: 'Chef-Curated Menus',
      title: 'In-Room Dining',
      description:
        'Browse breakfast, lunch, and dinner menus crafted by our resort chefs. Order with a tap and track your meal to your door.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/GuestStayonboard3.png'),
    },
    {
      badge: 'ENTERTAINMENT',
      subtitle: 'Venues, Shows & More',
      title: 'Explore the Resort',
      description:
        'Discover live entertainment venues, family activities, nightlife hotspots, and everything Cascades Resort has to offer with our interactive map.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/GuestStayonboard4.png'),
    },
    {
      badge: 'CONCIERGE',
      subtitle: 'Requests Made Simple',
      title: 'Guest Services',
      description:
        'Housekeeping, maintenance, amenity requests, and special arrangements — submit, track, and receive updates on all your requests in real time.',
      buttonLabel: 'Get Started',
      image: require('../../../CascadesGuestStayAssets/GuestStayonboard5.png'),
    },
  ];

export const CASCADES_GUEST_STAY_ONBOARDING_PERSIST_KEY =
  '@cascades_guest_stay/onboarding_complete';
