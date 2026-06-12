import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';

import {DESIGN_HEIGHT, DESIGN_WIDTH} from '../constants/theme';

export function useAdaptive() {
  const {width, height} = useWindowDimensions();

  return useMemo(() => {
    const isLandscape = width > height;
    const portraitWidth = isLandscape ? height : width;
    const portraitHeight = isLandscape ? width : height;

    const isNarrow = width < 370;
    const isSmallHeight = height < 740;
    const isTinyHeight = height < 660;

    const portraitIsSmallHeight = portraitHeight < 740;
    const portraitIsTinyHeight = portraitHeight < 660;

    const scale = (size: number) => (width / DESIGN_WIDTH) * size;
    const verticalScale = (size: number) => (height / DESIGN_HEIGHT) * size;
    const portraitScale = (size: number) =>
      (portraitWidth / DESIGN_WIDTH) * size;

    return {
      width,
      height,
      isNarrow,
      isSmallHeight,
      isTinyHeight,
      scale,
      verticalScale,
      horizontalPadding: isNarrow ? scale(16) : scale(20),
      tabHeight: portraitIsTinyHeight
        ? portraitScale(58)
        : portraitIsSmallHeight
          ? portraitScale(62)
          : portraitScale(66),
      tabIconSize: portraitIsTinyHeight ? portraitScale(20) : portraitScale(22),
      tabIconWrapHeight: portraitIsTinyHeight
        ? portraitScale(24)
        : portraitScale(28),
      tabPaddingTop: portraitIsTinyHeight ? portraitScale(8) : portraitScale(10),
      tabPaddingBottom: portraitIsTinyHeight
        ? portraitScale(18)
        : portraitScale(24),
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
