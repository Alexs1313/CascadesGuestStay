import {useAdaptive} from '../hooks/useAdaptive';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackNavigationProp} from '@react-navigation/stack';
import {icons} from '../data/assets';
import {ScreenHeader} from '../components/common/ScreenHeader';
import {useApp} from '../context/AppContext';
import {
  CLIMATE_CURRENT_TEMP,
  CLIMATE_FEELS_LIKE,
  CLIMATE_MAX_TEMP,
  CLIMATE_MIN_TEMP,
  CLIMATE_MODES,
  FAN_SPEEDS,
  climateModeLabel,
} from '../data/climate';
import {GUEST} from '../data/guest';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';

import type {StackParamList} from '../navigation/types';

type ClimateScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Climate'>;
};

export function ClimateScreen({
  navigation,
}: ClimateScreenProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const {
    climateTemperature,
    climateMode,
    climateFanSpeed,
    climateSaved,
    setClimateTemperature,
    setClimateMode,
    setClimateFanSpeed,
    applyClimateSettings,
  } = useApp();

  const adjustTemp = (delta: number) => {
    setClimateTemperature(
      Math.min(
        CLIMATE_MAX_TEMP,
        Math.max(
          CLIMATE_MIN_TEMP,
          climateTemperature + delta,
        ),
      ),
    );
  };

  return (
    <View style={styles.ClimateScreenFacetChassis}>
      <ScrollView
        contentContainerStyle={[
          styles.ClimateScreenScrollVellum,
          {paddingTop: insets.top + adaptive.verticalScale(8)},
        ]}
        showsVerticalScrollIndicator={false}>
        <ScreenHeader
          scrollable
          title="Climate Control"
          onClose={() => navigation.goBack()}
        />
        <View style={styles.ClimateScreenStatusCardFacet}>
          <View style={styles.ClimateScreenStatusLeft}>
            <Text style={styles.ClimateScreenSuite}>
              {GUEST.room.toUpperCase()}
            </Text>
            <Text style={styles.ClimateScreenCurrent}>
              {`Currently ${CLIMATE_CURRENT_TEMP}°C • Feels like ${CLIMATE_FEELS_LIKE}°C`}
            </Text>
          </View>
          <Text style={styles.ClimateScreenThermo}>🌡</Text>
        </View>

        <Text style={styles.ClimateScreenSection}>Set Temperature</Text>
        <View style={styles.ClimateScreenDial}>
          <View style={styles.ClimateScreenDialRing}>
            <Text style={styles.ClimateScreenDialTemp}>
              {climateTemperature}
            </Text>
            <Text style={styles.ClimateScreenDialUnit}>°C</Text>

            <Image
              source={icons.frame}
              style={{
                position: 'absolute',

                bottom: 0,
              }}
            />
          </View>
        </View>

        <View style={styles.ClimateScreenTempControls}>
          <Pressable
            onPress={() => adjustTemp(-1)}
            style={styles.ClimateScreenMinus}>
            <Text style={styles.ClimateScreenMinusLabelFiligree}>−</Text>
          </Pressable>
          <Text style={styles.ClimateScreenRange}>
            {`RANGE: ${CLIMATE_MIN_TEMP}–${CLIMATE_MAX_TEMP}°C`}
          </Text>
          <Pressable
            onPress={() => adjustTemp(1)}
            style={styles.ClimateScreenPlus}>
            <Text style={styles.ClimateScreenPlusLabelFiligree}>+</Text>
          </Pressable>
        </View>

        <Text style={styles.ClimateScreenSection}>Mode</Text>
        <View style={styles.ClimateScreenModeGrid}>
          {CLIMATE_MODES.map(mode => {
            const isActive = climateMode === mode.key;
            return (
              <Pressable
                key={mode.key}
                onPress={() => setClimateMode(mode.key)}
                style={[
                  styles.ClimateScreenModeCardFacet,
                  isActive && styles.ClimateScreenModeCardActive,
                ]}>
                <Text style={styles.ClimateScreenModeIconSigil}>
                  {mode.icon}
                </Text>
                <Text style={styles.ClimateScreenModeLabelFiligree}>
                  {mode.label}
                </Text>
                <Text style={styles.ClimateScreenModeDesc}>
                  {mode.description}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.ClimateScreenSection}>Fan Speed</Text>
        <View style={styles.ClimateScreenFanRowLintel}>
          {FAN_SPEEDS.map(speed => {
            const isActive = climateFanSpeed === speed;
            return (
              <Pressable
                key={speed}
                onPress={() => setClimateFanSpeed(speed)}
                style={[
                  styles.ClimateScreenFanBtn,
                  isActive && styles.ClimateScreenFanBtnActive,
                ]}>
                <Text
                  style={[
                    styles.ClimateScreenFanLabelFiligree,
                    isActive && styles.ClimateScreenFanLabelActiveFiligree,
                  ]}>
                  {speed.charAt(0).toUpperCase() + speed.slice(1)}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.ClimateScreenSummaryCardFacet}>
          <Text style={styles.ClimateScreenSummaryTitleFiligree}>
            Current Settings
          </Text>
          <View style={styles.ClimateScreenSummaryGrid}>
            <View style={styles.ClimateScreenSummaryItem}>
              <Text style={styles.ClimateScreenSummaryKey}>Target</Text>
              <Text style={styles.ClimateScreenSummaryVal}>
                {`${climateTemperature}°C`}
              </Text>
            </View>
            <View style={styles.ClimateScreenSummaryItem}>
              <Text style={styles.ClimateScreenSummaryKey}>Mode</Text>
              <Text style={styles.ClimateScreenSummaryVal}>
                {climateModeLabel(climateMode)}
              </Text>
            </View>
            <View style={styles.ClimateScreenSummaryItem}>
              <Text style={styles.ClimateScreenSummaryKey}>Fan</Text>
              <Text style={styles.ClimateScreenSummaryVal}>
                {climateFanSpeed.charAt(0).toUpperCase() +
                  climateFanSpeed.slice(1)}
              </Text>
            </View>
          </View>
        </View>

        {climateSaved ? (
          <View style={styles.ClimateScreenSaved}>
            <Text style={styles.ClimateScreenSavedLabelFiligree}>
              ✓ Settings Saved
            </Text>
          </View>
        ) : (
          <Pressable
            onPress={applyClimateSettings}
            style={styles.ClimateScreenApply}>
            <Text style={styles.ClimateScreenApplyLabelFiligree}>
              Apply Settings
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

ClimateScreenFacetChassis: {
  flex: 1,
  backgroundColor: colors.background,
},
ClimateScreenScrollVellum: {
  paddingBottom: 32,
  paddingHorizontal: 20,
},
ClimateScreenStatusCardFacet: {
  alignItems: 'center',
  backgroundColor: colors.card,
  borderRadius: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 24,
  padding: 16,
},
ClimateScreenStatusLeft: {
  flex: 1,
},
ClimateScreenSuite: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
  letterSpacing: 2,
},
ClimateScreenCurrent: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 14,
  fontWeight: '600',
  marginTop: 4,
},
ClimateScreenThermo: {
  fontSize: 28,
},
ClimateScreenSection: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  marginBottom: 12,
  textTransform: 'uppercase',
},
ClimateScreenDial: {
  alignItems: 'center',
  marginBottom: 16,
},
ClimateScreenDialRing: {
  alignItems: 'center',

  height: 180,
  justifyContent: 'center',
  width: 180,
},
ClimateScreenDialTemp: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 56,
  fontWeight: '700',
  lineHeight: 60,
},
ClimateScreenDialUnit: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 16,
},
ClimateScreenTempControls: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 28,
},
ClimateScreenMinus: {
  alignItems: 'center',
  backgroundColor: colors.card,
  borderRadius: 28,
  height: 56,
  justifyContent: 'center',
  width: 56,
},
ClimateScreenMinusLabelFiligree: {
  color: colors.gold,
  fontSize: 28,
  fontWeight: '300',
},
ClimateScreenRange: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 1,
},
ClimateScreenPlus: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 28,
  height: 56,
  justifyContent: 'center',
  width: 56,
},
ClimateScreenPlusLabelFiligree: {
  color: colors.background,
  fontSize: 28,
  fontWeight: '600',
},
ClimateScreenModeGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 12,
  marginBottom: 24,
},
ClimateScreenModeCardFacet: {
  backgroundColor: colors.card,
  borderColor: 'transparent',
  borderRadius: 16,
  borderWidth: 1.5,
  padding: 14,
  width: '47%',
},
ClimateScreenModeCardActive: {
  borderColor: colors.coolBlue,
},
ClimateScreenModeIconSigil: {
  fontSize: 20,
  marginBottom: 8,
},
ClimateScreenModeLabelFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 14,
  fontWeight: '600',
},
ClimateScreenModeDesc: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
  marginTop: 4,
},
ClimateScreenFanRowLintel: {
  flexDirection: 'row',
  gap: 10,
  marginBottom: 24,
},
ClimateScreenFanBtn: {
  alignItems: 'center',
  backgroundColor: colors.card,
  borderRadius: 100,
  flex: 1,
  paddingVertical: 12,
},
ClimateScreenFanBtnActive: {
  backgroundColor: colors.gold,
},
ClimateScreenFanLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansMedium,
  fontSize: 14,
  fontWeight: '500',
},
ClimateScreenFanLabelActiveFiligree: {
  color: colors.background,
  fontWeight: '700',
},
ClimateScreenSummaryCardFacet: {
  backgroundColor: colors.card,
  borderRadius: 20,
  marginBottom: 20,
  padding: 16,
},
ClimateScreenSummaryTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.sansSemiBold,
  fontSize: 15,
  fontWeight: '600',
  marginBottom: 12,
},
ClimateScreenSummaryGrid: {
  flexDirection: 'row',
  gap: 10,
},
ClimateScreenSummaryItem: {
  backgroundColor: colors.background,
  borderRadius: 12,
  flex: 1,
  padding: 12,
},
ClimateScreenSummaryKey: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 10,
  letterSpacing: 1,
  textTransform: 'uppercase',
},
ClimateScreenSummaryVal: {
  color: colors.gold,
  fontFamily: fonts.sansSemiBold,
  fontSize: 14,
  fontWeight: '700',
  marginTop: 6,
},
ClimateScreenApply: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 100,
  paddingVertical: 16,
},
ClimateScreenApplyLabelFiligree: {
  color: colors.background,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '700',
},
ClimateScreenSaved: {
  alignItems: 'center',
  backgroundColor: colors.savedBanner,
  borderRadius: 100,
  paddingVertical: 16,
},
ClimateScreenSavedLabelFiligree: {
  color: colors.background,
  fontFamily: fonts.sansSemiBold,
  fontSize: 16,
  fontWeight: '700',
},
});
