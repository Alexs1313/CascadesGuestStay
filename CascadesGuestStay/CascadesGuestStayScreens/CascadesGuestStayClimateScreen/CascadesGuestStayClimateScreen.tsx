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
import {CascadesGuestStayScreenHeader} from '../../CascadesGuestStayComponents/CascadesGuestStayCommon/CascadesGuestStayScreenHeader/CascadesGuestStayScreenHeader';
import {useCascadesGuestStayApp} from '../../CascadesGuestStayContext/CascadesGuestStayAppContext';
import {
  CASCADES_GUEST_STAY_CLIMATE_CURRENT_TEMP,
  CASCADES_GUEST_STAY_CLIMATE_FEELS_LIKE,
  CASCADES_GUEST_STAY_CLIMATE_MAX_TEMP,
  CASCADES_GUEST_STAY_CLIMATE_MIN_TEMP,
  CASCADES_GUEST_STAY_CLIMATE_MODES,
  CASCADES_GUEST_STAY_FAN_SPEEDS,
  cascadesGuestStayClimateModeLabel,
} from '../../CascadesGuestStayConstants/CascadesGuestStayClimate/CascadesGuestStayClimateData/CascadesGuestStayClimateData';
import {CASCADES_GUEST_STAY_GUEST} from '../../CascadesGuestStayConstants/CascadesGuestStayGuest/CascadesGuestStayGuestInfo/CascadesGuestStayGuestInfo';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';
import type {CascadesGuestStayHomeStackParamList} from '../../../CascadesGuestStayNav';

type CascadesGuestStayClimateScreenProps = {
  navigation: StackNavigationProp<
    CascadesGuestStayHomeStackParamList,
    'Climate'
  >;
};

export function CascadesGuestStayClimateScreen({
  navigation,
}: CascadesGuestStayClimateScreenProps) {
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
  } = useCascadesGuestStayApp();

  const adjustTemp = (delta: number) => {
    setClimateTemperature(
      Math.min(
        CASCADES_GUEST_STAY_CLIMATE_MAX_TEMP,
        Math.max(
          CASCADES_GUEST_STAY_CLIMATE_MIN_TEMP,
          climateTemperature + delta,
        ),
      ),
    );
  };

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.cascadesGuestStayScroll,
          {paddingTop: insets.top + cascadesGuestStayVerticalScale(8)},
        ]}
        showsVerticalScrollIndicator={false}>
        <CascadesGuestStayScreenHeader
          scrollable
          title="Climate Control"
          onClose={() => navigation.goBack()}
        />
        <View style={styles.cascadesGuestStayStatusCard}>
          <View style={styles.cascadesGuestStayStatusLeft}>
            <Text style={styles.cascadesGuestStaySuite}>
              {CASCADES_GUEST_STAY_GUEST.room.toUpperCase()}
            </Text>
            <Text style={styles.cascadesGuestStayCurrent}>
              {`Currently ${CASCADES_GUEST_STAY_CLIMATE_CURRENT_TEMP}°C • Feels like ${CASCADES_GUEST_STAY_CLIMATE_FEELS_LIKE}°C`}
            </Text>
          </View>
          <Text style={styles.cascadesGuestStayThermo}>🌡</Text>
        </View>

        <Text style={styles.cascadesGuestStaySection}>Set Temperature</Text>
        <View style={styles.cascadesGuestStayDial}>
          <View style={styles.cascadesGuestStayDialRing}>
            <Text style={styles.cascadesGuestStayDialTemp}>
              {climateTemperature}
            </Text>
            <Text style={styles.cascadesGuestStayDialUnit}>°C</Text>

            <Image
              source={require('../../CascadesGuestStayAssets/frame.png')}
              style={{
                position: 'absolute',

                bottom: 0,
              }}
            />
          </View>
        </View>

        <View style={styles.cascadesGuestStayTempControls}>
          <Pressable
            onPress={() => adjustTemp(-1)}
            style={styles.cascadesGuestStayMinus}>
            <Text style={styles.cascadesGuestStayMinusLabel}>−</Text>
          </Pressable>
          <Text style={styles.cascadesGuestStayRange}>
            {`RANGE: ${CASCADES_GUEST_STAY_CLIMATE_MIN_TEMP}–${CASCADES_GUEST_STAY_CLIMATE_MAX_TEMP}°C`}
          </Text>
          <Pressable
            onPress={() => adjustTemp(1)}
            style={styles.cascadesGuestStayPlus}>
            <Text style={styles.cascadesGuestStayPlusLabel}>+</Text>
          </Pressable>
        </View>

        <Text style={styles.cascadesGuestStaySection}>Mode</Text>
        <View style={styles.cascadesGuestStayModeGrid}>
          {CASCADES_GUEST_STAY_CLIMATE_MODES.map(mode => {
            const isActive = climateMode === mode.key;
            return (
              <Pressable
                key={mode.key}
                onPress={() => setClimateMode(mode.key)}
                style={[
                  styles.cascadesGuestStayModeCard,
                  isActive && styles.cascadesGuestStayModeCardActive,
                ]}>
                <Text style={styles.cascadesGuestStayModeIcon}>
                  {mode.icon}
                </Text>
                <Text style={styles.cascadesGuestStayModeLabel}>
                  {mode.label}
                </Text>
                <Text style={styles.cascadesGuestStayModeDesc}>
                  {mode.description}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.cascadesGuestStaySection}>Fan Speed</Text>
        <View style={styles.cascadesGuestStayFanRow}>
          {CASCADES_GUEST_STAY_FAN_SPEEDS.map(speed => {
            const isActive = climateFanSpeed === speed;
            return (
              <Pressable
                key={speed}
                onPress={() => setClimateFanSpeed(speed)}
                style={[
                  styles.cascadesGuestStayFanBtn,
                  isActive && styles.cascadesGuestStayFanBtnActive,
                ]}>
                <Text
                  style={[
                    styles.cascadesGuestStayFanLabel,
                    isActive && styles.cascadesGuestStayFanLabelActive,
                  ]}>
                  {speed.charAt(0).toUpperCase() + speed.slice(1)}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.cascadesGuestStaySummaryCard}>
          <Text style={styles.cascadesGuestStaySummaryTitle}>
            Current Settings
          </Text>
          <View style={styles.cascadesGuestStaySummaryGrid}>
            <View style={styles.cascadesGuestStaySummaryItem}>
              <Text style={styles.cascadesGuestStaySummaryKey}>Target</Text>
              <Text style={styles.cascadesGuestStaySummaryVal}>
                {`${climateTemperature}°C`}
              </Text>
            </View>
            <View style={styles.cascadesGuestStaySummaryItem}>
              <Text style={styles.cascadesGuestStaySummaryKey}>Mode</Text>
              <Text style={styles.cascadesGuestStaySummaryVal}>
                {cascadesGuestStayClimateModeLabel(climateMode)}
              </Text>
            </View>
            <View style={styles.cascadesGuestStaySummaryItem}>
              <Text style={styles.cascadesGuestStaySummaryKey}>Fan</Text>
              <Text style={styles.cascadesGuestStaySummaryVal}>
                {climateFanSpeed.charAt(0).toUpperCase() +
                  climateFanSpeed.slice(1)}
              </Text>
            </View>
          </View>
        </View>

        {climateSaved ? (
          <View style={styles.cascadesGuestStaySaved}>
            <Text style={styles.cascadesGuestStaySavedLabel}>
              ✓ Settings Saved
            </Text>
          </View>
        ) : (
          <Pressable
            onPress={applyClimateSettings}
            style={styles.cascadesGuestStayApply}>
            <Text style={styles.cascadesGuestStayApplyLabel}>
              Apply Settings
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flex: 1,
    backgroundColor: cascadesGuestStayColors.background,
  },
  cascadesGuestStayScroll: {
    paddingBottom: cascadesGuestStayVerticalScale(32),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayStatusCard: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: cascadesGuestStayVerticalScale(24),
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStayStatusLeft: {
    flex: 1,
  },
  cascadesGuestStaySuite: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    letterSpacing: cascadesGuestStayScale(2),
  },
  cascadesGuestStayCurrent: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '600',
    marginTop: cascadesGuestStayScale(4),
  },
  cascadesGuestStayThermo: {
    fontSize: cascadesGuestStayScale(28),
  },
  cascadesGuestStaySection: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(2),
    marginBottom: cascadesGuestStayVerticalScale(12),
    textTransform: 'uppercase',
  },
  cascadesGuestStayDial: {
    alignItems: 'center',
    marginBottom: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStayDialRing: {
    alignItems: 'center',

    height: cascadesGuestStayScale(180),
    justifyContent: 'center',
    width: cascadesGuestStayScale(180),
  },
  cascadesGuestStayDialTemp: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(56),
    fontWeight: '700',
    lineHeight: cascadesGuestStayScale(60),
  },
  cascadesGuestStayDialUnit: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(16),
  },
  cascadesGuestStayTempControls: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: cascadesGuestStayVerticalScale(28),
  },
  cascadesGuestStayMinus: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(28),
    height: cascadesGuestStayScale(56),
    justifyContent: 'center',
    width: cascadesGuestStayScale(56),
  },
  cascadesGuestStayMinusLabel: {
    color: cascadesGuestStayColors.gold,
    fontSize: cascadesGuestStayScale(28),
    fontWeight: '300',
  },
  cascadesGuestStayRange: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(1),
  },
  cascadesGuestStayPlus: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(28),
    height: cascadesGuestStayScale(56),
    justifyContent: 'center',
    width: cascadesGuestStayScale(56),
  },
  cascadesGuestStayPlusLabel: {
    color: cascadesGuestStayColors.background,
    fontSize: cascadesGuestStayScale(28),
    fontWeight: '600',
  },
  cascadesGuestStayModeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: cascadesGuestStayScale(12),
    marginBottom: cascadesGuestStayVerticalScale(24),
  },
  cascadesGuestStayModeCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderColor: 'transparent',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1.5,
    padding: cascadesGuestStayScale(14),
    width: '47%',
  },
  cascadesGuestStayModeCardActive: {
    borderColor: cascadesGuestStayColors.coolBlue,
  },
  cascadesGuestStayModeIcon: {
    fontSize: cascadesGuestStayScale(20),
    marginBottom: cascadesGuestStayScale(8),
  },
  cascadesGuestStayModeLabel: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '600',
  },
  cascadesGuestStayModeDesc: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
    marginTop: cascadesGuestStayScale(4),
  },
  cascadesGuestStayFanRow: {
    flexDirection: 'row',
    gap: cascadesGuestStayScale(10),
    marginBottom: cascadesGuestStayVerticalScale(24),
  },
  cascadesGuestStayFanBtn: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(100),
    flex: 1,
    paddingVertical: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStayFanBtnActive: {
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayFanLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '500',
  },
  cascadesGuestStayFanLabelActive: {
    color: cascadesGuestStayColors.background,
    fontWeight: '700',
  },
  cascadesGuestStaySummaryCard: {
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    marginBottom: cascadesGuestStayVerticalScale(20),
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStaySummaryTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '600',
    marginBottom: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStaySummaryGrid: {
    flexDirection: 'row',
    gap: cascadesGuestStayScale(10),
  },
  cascadesGuestStaySummaryItem: {
    backgroundColor: cascadesGuestStayColors.background,
    borderRadius: cascadesGuestStayScale(12),
    flex: 1,
    padding: cascadesGuestStayScale(12),
  },
  cascadesGuestStaySummaryKey: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(10),
    letterSpacing: cascadesGuestStayScale(1),
    textTransform: 'uppercase',
  },
  cascadesGuestStaySummaryVal: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '700',
    marginTop: cascadesGuestStayScale(6),
  },
  cascadesGuestStayApply: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(100),
    paddingVertical: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStayApplyLabel: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '700',
  },
  cascadesGuestStaySaved: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.savedBanner,
    borderRadius: cascadesGuestStayScale(100),
    paddingVertical: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStaySavedLabel: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '700',
  },
});
