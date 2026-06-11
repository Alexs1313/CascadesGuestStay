import {ImageSourcePropType} from 'react-native';

import {onboardingArt} from './assets';

export type OnboardingStep = {
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  buttonLabel: string;
  image: ImageSourcePropType;
};

export const ONBOARDING_STEPS: OnboardingStep[] =
  [
    {
      badge: 'GUEST STAY',
      subtitle: 'Your Guest Experience',
      title: 'Welcome to Cascades Casino Resort',
      description:
        'Your personal companion for a seamless stay at Cascades Resort. Manage your room, dining, entertainment, and guest services — all from one place.',
      buttonLabel: 'Next',
      image: onboardingArt.step1,
    },
    {
      badge: 'YOUR STAY',
      subtitle: 'Seamless Room Management',
      title: 'Everything at Your Fingertips',
      description:
        'Check in digitally, access your room QR code, control your climate settings, and manage your entire stay from one elegant interface.',
      buttonLabel: 'Next',
      image: onboardingArt.step2,
    },
    {
      badge: 'DINING',
      subtitle: 'Chef-Curated Menus',
      title: 'In-Room Dining',
      description:
        'Browse breakfast, lunch, and dinner menus crafted by our resort chefs. Order with a tap and track your meal to your door.',
      buttonLabel: 'Next',
      image: onboardingArt.step3,
    },
    {
      badge: 'ENTERTAINMENT',
      subtitle: 'Venues, Shows & More',
      title: 'Explore the Resort',
      description:
        'Discover live entertainment venues, family activities, nightlife hotspots, and everything Cascades Resort has to offer with our interactive map.',
      buttonLabel: 'Next',
      image: onboardingArt.step4,
    },
    {
      badge: 'CONCIERGE',
      subtitle: 'Requests Made Simple',
      title: 'Guest Services',
      description:
        'Housekeeping, maintenance, amenity requests, and special arrangements — submit and track your requests from one place.',
      buttonLabel: 'Get Started',
      image: onboardingArt.step5,
    },
  ];

export const ONBOARDING_PERSIST_KEY =
  '@guest_stay/onboarding_complete';
