import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const CASCADES_GUEST_STAY_DESIGN_WIDTH = 393;
export const CASCADES_GUEST_STAY_DESIGN_HEIGHT = 852;

export const cascadesGuestStayScale = (size: number) =>
  (SCREEN_WIDTH / CASCADES_GUEST_STAY_DESIGN_WIDTH) * size;

export const cascadesGuestStayVerticalScale = (size: number) =>
  (SCREEN_HEIGHT / CASCADES_GUEST_STAY_DESIGN_HEIGHT) * size;
