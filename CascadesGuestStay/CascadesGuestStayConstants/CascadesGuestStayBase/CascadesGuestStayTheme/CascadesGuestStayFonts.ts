import {Platform} from 'react-native';

const guestStayFontPrefix = Platform.OS === 'android' ? 'GuestStay' : '';

export const cascadesGuestStayFonts = {
  serifRegular: `${guestStayFontPrefix}PlayfairDisplay-Regular`,
  serifBold: `${guestStayFontPrefix}PlayfairDisplay-Bold`,
  sansRegular: `${guestStayFontPrefix}DMSans-Regular`,
  sansMedium: `${guestStayFontPrefix}DMSans-Medium`,
  sansSemiBold: `${guestStayFontPrefix}DMSans-SemiBold`,
  sansBold: `${guestStayFontPrefix}DMSans-Bold`,
};
