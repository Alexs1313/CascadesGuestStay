import {Platform} from 'react-native';

const iosFamilies = {
  serifRegular: 'PlayfairDisplay-Regular',
  serifBold: 'PlayfairDisplay-Bold',
  sansRegular: 'DMSans-Regular',
  sansMedium: 'DMSans-Medium',
  sansSemiBold: 'DMSans-SemiBold',
  sansBold: 'DMSans-Bold',
} as const;

const androidFamilies = {
  serifRegular: 'guest_stay_font_serif_regular',
  serifBold: 'guest_stay_font_serif_bold',
  sansRegular: 'guest_stay_font_sans_regular',
  sansMedium: 'guest_stay_font_sans_medium',
  sansSemiBold: 'guest_stay_font_sans_semibold',
  sansBold: 'guest_stay_font_sans_bold',
} as const;

const pick = <K extends keyof typeof iosFamilies>(key: K) =>
  Platform.OS === 'ios' ? iosFamilies[key] : androidFamilies[key];

export const fonts = {
  serifRegular: pick('serifRegular'),
  serifBold: pick('serifBold'),
  sansRegular: pick('sansRegular'),
  sansMedium: pick('sansMedium'),
  sansSemiBold: pick('sansSemiBold'),
  sansBold: pick('sansBold'),
};
