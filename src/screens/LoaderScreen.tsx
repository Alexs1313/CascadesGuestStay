import React from 'react';
import {useAdaptive} from '../hooks/useAdaptive';

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {icons, onboardingArt} from '../data/assets';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';

export function LoaderScreen() {
  const adaptive = useAdaptive();
  return (
    <View style={styles.LoaderScreenFacetChassis}>
      <ImageBackground
        source={onboardingArt.step2}
        style={styles.LoaderScreenBackground}
        resizeMode="cover"
      />

      <ScrollView
        contentContainerStyle={styles.LoaderScreenScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.LoaderScreenIconGlow}>
          <View
            style={[
              styles.LoaderScreenIconCardFacet,
              {
                width: adaptive.loaderLogoSize,
                height: adaptive.loaderLogoSize,
              },
            ]}>
            <Image
              source={icons.loaderLogo}
              style={styles.LoaderScreenIconSigil}
              resizeMode="cover"
            />
          </View>
        </View>

        <Text style={styles.LoaderScreenLoading}>LOADING...</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  LoaderScreenFacetChassis: {
    flex: 1,
    backgroundColor: colors.black,
  },
  LoaderScreenBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  LoaderScreenOverlayVeil: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.loaderOverlay,
  },
  LoaderScreenScrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
    gap: 36,
  },
  LoaderScreenIconGlow: {
    borderRadius: 24,
    shadowColor: colors.gold,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 50,
    elevation: 12,
  },
  LoaderScreenIconCardFacet: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: colors.black,
    borderWidth: 1,
    borderColor: colors.black,
  },
  LoaderScreenIconSigil: {
    width: '100%',
    height: '100%',
  },
  LoaderScreenBrandingFiligree: {
    alignItems: 'center',
    gap: 8,
  },
  LoaderScreenTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.serifBold,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  LoaderScreenSubtitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 6,
    textTransform: 'uppercase',
  },
  LoaderScreenDivider: {
    width: 120,
    height: 1,
    marginTop: 8,
  },
  LoaderScreenTagline: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  LoaderScreenLoading: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 24,
  },
});
