import type {ImageSourcePropType} from 'react-native';

import type {MainTabParamList} from '../navigation/types';

export const icons = {
  homeLogo: require('../assets/guest_stay_icon_home_logo.png'),
  loaderBg: require('../assets/guest_stay_loader_bg.png'),
  loaderLogo: require('../assets/guest_stay_loader_logo.png'),
  frame: require('../assets/guest_stay_icon_frame.png'),
  remove: require('../assets/guest_stay_icon_remove.png'),
};

export const mapPins = {
  gold: require('../assets/guest_stay_pin_gold.png'),
  green: require('../assets/guest_stay_pin_green.png'),
  purple: require('../assets/guest_stay_pin_purple.png'),
};

export const tabIcons: Record<keyof MainTabParamList, ImageSourcePropType> = {
  HomeTab: require('../assets/guest_stay_tab_home.png'),
  RequestsTab: require('../assets/guest_stay_tab_requests.png'),
  ExploreTab: require('../assets/guest_stay_tab_explore.png'),
  SavedTab: require('../assets/guest_stay_tab_saved.png'),
  MapTab: require('../assets/guest_stay_tab_map.png'),
};

export const onboardingArt = {
  step1: require('../assets/guest_stay_onboard_hero_1.png') as ImageSourcePropType,
  step2: require('../assets/guest_stay_onboard_hero_2.png') as ImageSourcePropType,
  step3: require('../assets/guest_stay_onboard_hero_3.png') as ImageSourcePropType,
  step4: require('../assets/guest_stay_onboard_hero_4.png') as ImageSourcePropType,
  step5: require('../assets/guest_stay_onboard_hero_5.png') as ImageSourcePropType,
};

export const venueImages = {
  theGreatEscape: require('../assets/guest_stay_venue_the_great_escape.png'),
  extremeAirPark: require('../assets/guest_stay_venue_extreme_air_park_langley.png'),
  willowbrookLanes: require('../assets/guest_stay_venue_willowbrook_lanes.png'),
  canadianMuseumOfFlight: require('../assets/guest_stay_venue_canadian_museum_of_flight.png'),
  langleyEventsCentre: require('../assets/guest_stay_venue_langley_events_centre.png'),
  langleyEventsCentreAlt: require('../assets/guest_stay_venue_langley_events_centre_1.png'),
  twilightDriveIn: require('../assets/guest_stay_venue_twilight_drive_in_theatre.png'),
  theatreInTheCountry: require('../assets/guest_stay_venue_theatre_in_the_country.png'),
  bezArtsHub: require('../assets/guest_stay_venue_bez_arts_hub.png'),
  spiritSquare: require('../assets/guest_stay_venue_spirit_square.png'),
  roseGellertHall: require('../assets/guest_stay_venue_rose_gellert_hall.png'),
  coastConventionCentre: require('../assets/guest_stay_venue_coast_langley_city_hotel_convention_centre.png'),
  matchEatery: require('../assets/guest_stay_venue_match_eatery_public_house.png'),
  stevensCocktailCorner: require('../assets/guest_stay_venue_stevens_cocktail_corner_bar_kitchen.png'),
  kingTapsWillowbrook: require('../assets/guest_stay_venue_king_taps_willowbrook.png'),
  rendezvousPub: require('../assets/guest_stay_venue_rendezvous_pub.png'),
  newlandsBarGrill: require('../assets/guest_stay_venue_newlands_bar_grill.png'),
  steakFishLounge: require('../assets/guest_stay_venue_steak_fish_lounge.png'),
} satisfies Record<string, ImageSourcePropType>;

export const menuImages = {
  classicCanadianBreakfast: require('../assets/guest_stay_menu_classic_canadian_breakfast.png'),
  smokedSalmonBagel: require('../assets/guest_stay_menu_smoked_salmon_bagel.png'),
  blueberryPancakeStack: require('../assets/guest_stay_menu_blueberry_pancake_stack.png'),
  avocadoBreakfastToast: require('../assets/guest_stay_menu_avocado_breakfast_toast.png'),
  breakfastBurrito: require('../assets/guest_stay_menu_breakfast_burrito.png'),
  cascadesSignatureBurger: require('../assets/guest_stay_menu_cascades_signature_burger.png'),
  grilledChickenCaesarSalad: require('../assets/guest_stay_menu_grilled_chicken_caesar_salad.png'),
  pacificSalmonBowl: require('../assets/guest_stay_menu_pacific_salmon_bowl.png'),
  steakSandwich: require('../assets/guest_stay_menu_steak_sandwich.png'),
  margheritaFlatbread: require('../assets/guest_stay_menu_margherita_flatbread.png'),
  premiumRibeyeSteak: require('../assets/guest_stay_menu_premium_ribeye_steak.png'),
  atlanticLobsterTail: require('../assets/guest_stay_menu_atlantic_lobster_tail.png'),
  herbCrustedSalmon: require('../assets/guest_stay_menu_herb_crusted_salmon.png'),
  chickenSupreme: require('../assets/guest_stay_menu_chicken_supreme.png'),
  truffleMushroomPasta: require('../assets/guest_stay_menu_truffle_mushroom_pasta.png'),
} satisfies Record<string, ImageSourcePropType>;
