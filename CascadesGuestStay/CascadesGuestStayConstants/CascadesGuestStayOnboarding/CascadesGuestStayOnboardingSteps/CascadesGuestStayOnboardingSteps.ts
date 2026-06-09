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
      badge: 'DEMO APPLICATION',
      subtitle: 'Your Premium Guest Experience',
      title: 'Welcome to Cascades Casino Resort',
      description:
        'This is a demonstration application built to showcase the digital guest journey. It is not intended for real guest use and all data shown is fictional.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/onboard1.png'),
    },
    {
      badge: 'YOUR STAY',
      subtitle: 'Seamless Room Management',
      title: 'Everything at Your Fingertips',
      description:
        'Check in digitally, access your room QR code, control your climate settings, and manage your entire stay from one elegant interface.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/onboard2.png'),
    },
    {
      badge: 'DINING',
      subtitle: 'Chef-Curated Menus',
      title: 'World-Class In-Room Dining',
      description:
        'Browse breakfast, lunch, and dinner menus crafted by award-winning chefs. Order with a tap and track your meal to your door.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/onboard3.png'),
    },
    {
      badge: 'ENTERTAINMENT',
      subtitle: 'Venues, Shows & More',
      title: 'Explore the Resort',
      description:
        'Discover live entertainment venues, family activities, nightlife hotspots, and everything Cascades Resort has to offer with our interactive map.',
      buttonLabel: 'Next',
      image: require('../../../CascadesGuestStayAssets/onboard4.png'),
    },
    {
      badge: 'CONCIERGE',
      subtitle: 'Requests Handled Instantly',
      title: '24/7 Guest Services',
      description:
        'Housekeeping, maintenance, amenity requests, and special arrangements — submit, track, and receive updates on all your requests in real time.',
      buttonLabel: 'Get Started',
      image: require('../../../CascadesGuestStayAssets/onboard5.png'),
    },
  ];

export const CASCADES_GUEST_STAY_ONBOARDING_PERSIST_KEY =
  '@cascades_guest_stay/onboarding_complete';
