import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

export function CascadesGuestStayLoaderScreen() {
  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ImageBackground
        source={require('../../CascadesGuestStayAssets/background_loader.png')}
        style={styles.cascadesGuestStayBackground}
        resizeMode="cover"
        blurRadius={2}
      />

      <ScrollView
        contentContainerStyle={styles.cascadesGuestStayScrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cascadesGuestStayIconGlow}>
          <View style={styles.cascadesGuestStayIconCard}>
            <Image
              source={require('../../CascadesGuestStayAssets/logo.png')}
              style={styles.cascadesGuestStayIcon}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.cascadesGuestStayBranding}>
          <Text style={styles.cascadesGuestStayTitle}>Cascades</Text>
          <Text style={styles.cascadesGuestStaySubtitle}>
            Casino · Resort · Hotel
          </Text>
          <LinearGradient
            colors={[
              'rgba(0,0,0,0)',
              cascadesGuestStayColors.gold,
              'rgba(0,0,0,0)',
            ]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.cascadesGuestStayDivider}
          />
          <Text style={styles.cascadesGuestStayTagline}>Guest Experience</Text>
        </View>

        <Text style={styles.cascadesGuestStayLoading}>LOADING...</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flex: 1,
    backgroundColor: cascadesGuestStayColors.black,
  },
  cascadesGuestStayBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  cascadesGuestStayOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: cascadesGuestStayColors.loaderOverlay,
  },
  cascadesGuestStayScrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: cascadesGuestStayScale(24),
    paddingVertical: cascadesGuestStayVerticalScale(48),
    gap: cascadesGuestStayVerticalScale(36),
  },
  cascadesGuestStayIconGlow: {
    borderRadius: cascadesGuestStayScale(24),
    shadowColor: cascadesGuestStayColors.gold,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: cascadesGuestStayScale(50),
    elevation: 12,
  },
  cascadesGuestStayIconCard: {
    width: cascadesGuestStayScale(280),
    height: cascadesGuestStayScale(280),
    borderRadius: cascadesGuestStayScale(24),
    overflow: 'hidden',
    backgroundColor: cascadesGuestStayColors.black,
    borderWidth: 1,
    borderColor: cascadesGuestStayColors.black,
  },
  cascadesGuestStayIcon: {
    width: '100%',
    height: '100%',
  },
  cascadesGuestStayBranding: {
    alignItems: 'center',
    gap: cascadesGuestStayVerticalScale(8),
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(28),
    fontWeight: '700',
    letterSpacing: cascadesGuestStayScale(4),
    textTransform: 'uppercase',
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    letterSpacing: cascadesGuestStayScale(6),
    textTransform: 'uppercase',
  },
  cascadesGuestStayDivider: {
    width: cascadesGuestStayScale(120),
    height: 1,
    marginTop: cascadesGuestStayVerticalScale(8),
  },
  cascadesGuestStayTagline: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(13),
    letterSpacing: cascadesGuestStayScale(2),
    textTransform: 'uppercase',
  },
  cascadesGuestStayLoading: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    letterSpacing: cascadesGuestStayScale(2),
    marginTop: cascadesGuestStayVerticalScale(24),
  },
});
