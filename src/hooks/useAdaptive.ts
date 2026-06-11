import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

import {DESIGN_HEIGHT, DESIGN_WIDTH} from '../constants/theme';

export function useAdaptive() {
  const {width, height} = useWindowDimensions();

  return useMemo(() => {
    const isNarrow = width < 370;
    const isSmallHeight = height < 740;
    const isTinyHeight = height < 660;

    const scale = (size: number) => (width / DESIGN_WIDTH) * size;
    const verticalScale = (size: number) => (height / DESIGN_HEIGHT) * size;

    return {
      width,
      height,
      isNarrow,
      isSmallHeight,
      isTinyHeight,
      scale,
      verticalScale,
      horizontalPadding: isNarrow ? scale(16) : scale(20),
      tabHeight: isTinyHeight ? scale(58) : isSmallHeight ? scale(62) : scale(66),
      tabIconSize: isTinyHeight ? scale(20) : scale(22),
      tabIconWrapHeight: isTinyHeight ? scale(24) : scale(28),
      tabPaddingTop: isTinyHeight ? scale(8) : scale(10),
      tabPaddingBottom: isTinyHeight ? scale(18) : scale(24),
      venueCardImageHeight: isTinyHeight
        ? verticalScale(148)
        : isSmallHeight
          ? verticalScale(166)
          : verticalScale(176),
      savedCardImageHeight: isTinyHeight
        ? verticalScale(120)
        : isSmallHeight
          ? verticalScale(136)
          : verticalScale(152),
      menuItemImageSize: isTinyHeight ? scale(72) : scale(80),
      mapHeight: isTinyHeight
        ? verticalScale(280)
        : isSmallHeight
          ? verticalScale(320)
          : verticalScale(360),
      loaderLogoSize: isTinyHeight ? scale(140) : isSmallHeight ? scale(160) : scale(180),
      onboardingHeroHeight: Math.round(
        height * (isTinyHeight ? 0.48 : isSmallHeight ? 0.52 : 0.56),
      ),
      qrSize: isTinyHeight ? scale(100) : isSmallHeight ? scale(106) : scale(113),
      screenTitleSize: isTinyHeight ? scale(20) : isSmallHeight ? scale(21) : scale(22),
      locationCardHeight: isTinyHeight
        ? verticalScale(100)
        : isSmallHeight
          ? verticalScale(110)
          : verticalScale(120),
      climateFrameSize: isTinyHeight ? scale(220) : isSmallHeight ? scale(240) : scale(260),
      emptyPaddingVertical: isTinyHeight ? scale(48) : isSmallHeight ? scale(64) : scale(80),
    };
  }, [height, width]);
}

export type Adaptive = ReturnType<typeof useAdaptive>;
