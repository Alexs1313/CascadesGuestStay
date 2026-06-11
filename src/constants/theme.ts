import {Platform} from 'react-native';
import {fonts} from './fonts';

export const DESIGN_WIDTH = 393;
export const DESIGN_HEIGHT = 852;

export const colors = {
  background: '#0C1824',
  card: '#182738',
  cardGradientEnd: '#1A2F45',
  gold: '#FABF14',
  goldMuted: 'rgba(250, 191, 20, 0.25)',
  goldBadgeBg: 'rgba(250, 191, 20, 0.15)',
  goldBadgeBorder: 'rgba(250, 191, 20, 0.4)',
  goldBorder: 'rgba(250, 191, 20, 0.15)',
  cream: '#F0EFE8',
  body: '#7A9AB5',
  label: '#4A6A85',
  skip: 'rgba(240, 239, 232, 0.6)',
  black: '#000000',
  success: '#7ED8A4',
  successBg: 'rgba(126, 216, 164, 0.15)',
  coolBlue: '#5BB8E8',
  coolBlueBorder: 'rgba(91, 184, 232, 0.5)',
  tabInactive: '#1A2F45',
  buttonSecondary: '#1E3347',
  infoBlue: '#4EA8DE',
  categoryPurple: '#C096E8',
  categoryPurpleBg: 'rgba(192, 150, 232, 0.09)',
  timelineInactive: '#2A4560',
  headerGradientStart: '#182738',
  headerGradientEnd: '#0C1824',
  loaderOverlay: 'rgba(0, 0, 0, 0.4)',
  heroGradientStart: 'rgba(12, 24, 36, 0.3)',
  heroGradientMid: 'rgba(12, 24, 36, 0.1)',
  heroGradientEnd: 'rgba(12, 24, 36, 0.9)',
  link: '#5BB8E8',
  savedBanner: '#7ED8A4',
};

export const gradient = {
  hero: ['#0C1824', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', '#0C1824'],
  cardFade: ['rgba(12,24,36,0)', '#0C1824'],
};

export const spacing = {
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  card: 16,
  button: 100,
  chip: 100,
};

export const fontSize = {
  brand: 9,
  title: 22,
  hero: 30,
  body: 14,
};

export const layout = {
  screenPadding: 20,
  tabHeight: 66,
  tabBottomIos: 20,
  tabBottomAndroid: 30,
  androidEdge: 30,
};

export const topInset = (value: number) =>
  Platform.OS === 'android' ? Math.max(value, layout.androidEdge) : value;

export const bottomInset = (value: number) =>
  Platform.OS === 'android' ? Math.max(value, layout.androidEdge) : value;

export const tabBottomGap = () =>
  Platform.OS === 'android' ? layout.tabBottomAndroid : layout.tabBottomIos;

export {fonts};
