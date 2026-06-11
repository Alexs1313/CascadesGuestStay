import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {StackNavigationProp} from '@react-navigation/stack';
import {CascadesGuestStayScreenHeader} from '../../CascadesGuestStayComponents/CascadesGuestStayCommon/CascadesGuestStayScreenHeader/CascadesGuestStayScreenHeader';
import {CASCADES_GUEST_STAY_GUEST} from '../../CascadesGuestStayConstants/CascadesGuestStayGuest/CascadesGuestStayGuestInfo/CascadesGuestStayGuestInfo';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';
import type {CascadesGuestStayStackParamList} from '../../CascadesGuestStayNavTypes';

type CascadesGuestStayOrderConfirmedScreenProps = {
  navigation: StackNavigationProp<
    CascadesGuestStayStackParamList,
    'OrderConfirmed'
  >;
  route: {
    params?: {total?: number};
  };
};

export function CascadesGuestStayOrderConfirmedScreen({
  navigation,
  route,
}: CascadesGuestStayOrderConfirmedScreenProps) {
  const insets = useSafeAreaInsets();
  const total = route.params?.total ?? 0;

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
          title="Order Confirmed"
          onClose={() =>
            navigation.navigate('Main', {screen: 'HomeTab'})
          }
        />
        <View style={styles.cascadesGuestStayCheck}>
          <Text style={styles.cascadesGuestStayCheckIcon}>✓</Text>
        </View>
        <Text style={styles.cascadesGuestStayTitle}>
          Your order is on its way!
        </Text>
        <Text style={styles.cascadesGuestStaySubtitle}>
          Estimated arrival: 25–35 min
        </Text>

        <View style={styles.cascadesGuestStaySummary}>
          <View style={styles.cascadesGuestStayRow}>
            <Text style={styles.cascadesGuestStayLabel}>Guest</Text>
            <Text style={styles.cascadesGuestStayValue}>
              {CASCADES_GUEST_STAY_GUEST.name}
            </Text>
          </View>
          <View style={styles.cascadesGuestStayRow}>
            <Text style={styles.cascadesGuestStayLabel}>Room</Text>
            <Text style={styles.cascadesGuestStayValue}>
              {CASCADES_GUEST_STAY_GUEST.room}
            </Text>
          </View>
          <View style={styles.cascadesGuestStayRow}>
            <Text style={styles.cascadesGuestStayLabel}>Estimated Wait</Text>
            <Text style={styles.cascadesGuestStayValue}>
              {`~${CASCADES_GUEST_STAY_GUEST.estimatedWaitMin} min`}
            </Text>
          </View>
          <View style={styles.cascadesGuestStayRow}>
            <Text style={styles.cascadesGuestStayLabel}>Total Charged</Text>
            <Text style={styles.cascadesGuestStayTotal}>
              {total > 0 ? `$${total.toFixed(2)}` : '—'}
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Main', {screen: 'HomeTab'})}
          style={styles.cascadesGuestStayDone}>
          <Text style={styles.cascadesGuestStayDoneLabel}>Done</Text>
        </Pressable>
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
    alignItems: 'center',
    paddingBottom: cascadesGuestStayVerticalScale(32),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayCheck: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(48),
    height: cascadesGuestStayScale(96),
    justifyContent: 'center',
    marginBottom: cascadesGuestStayVerticalScale(24),
    width: cascadesGuestStayScale(96),
  },
  cascadesGuestStayCheckIcon: {
    color: cascadesGuestStayColors.background,
    fontSize: cascadesGuestStayScale(40),
    fontWeight: '700',
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(26),
    fontWeight: '700',
    textAlign: 'center',
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(15),
    marginBottom: cascadesGuestStayVerticalScale(28),
    marginTop: cascadesGuestStayVerticalScale(8),
    textAlign: 'center',
  },
  cascadesGuestStaySummary: {
    backgroundColor: cascadesGuestStayColors.card,
    borderRadius: cascadesGuestStayScale(20),
    gap: cascadesGuestStayVerticalScale(14),
    padding: cascadesGuestStayScale(20),
    width: '100%',
  },
  cascadesGuestStayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cascadesGuestStayLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(14),
  },
  cascadesGuestStayValue: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '500',
  },
  cascadesGuestStayTotal: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '700',
  },
  cascadesGuestStayDone: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(100),
    marginTop: cascadesGuestStayVerticalScale(28),
    paddingVertical: cascadesGuestStayVerticalScale(16),
    width: '100%',
  },
  cascadesGuestStayDoneLabel: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(16),
    fontWeight: '700',
  },
});
