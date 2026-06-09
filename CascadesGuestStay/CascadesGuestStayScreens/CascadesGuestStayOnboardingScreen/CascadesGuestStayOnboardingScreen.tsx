import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CascadesGuestStayPrimaryButton} from '../../CascadesGuestStayComponents/CascadesGuestStayButtons/CascadesGuestStayActions/CascadesGuestStayPrimaryButton';
import {CascadesGuestStayBadge} from '../../CascadesGuestStayComponents/CascadesGuestStayCommon/CascadesGuestStayBadge/CascadesGuestStayBadge';
import {CascadesGuestStayPaginationDots} from '../../CascadesGuestStayComponents/CascadesGuestStayNav/CascadesGuestStayIndicators/CascadesGuestStayPaginationDots';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';
import {CASCADES_GUEST_STAY_ONBOARDING_STEPS} from '../../CascadesGuestStayConstants/CascadesGuestStayOnboarding/CascadesGuestStayOnboardingSteps/CascadesGuestStayOnboardingSteps';

type CascadesGuestStayOnboardingScreenProps = {
  onComplete: () => void;
};

export function CascadesGuestStayOnboardingScreen({
  onComplete,
}: CascadesGuestStayOnboardingScreenProps) {
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = useState(0);
  const step = CASCADES_GUEST_STAY_ONBOARDING_STEPS[stepIndex];
  const isLastStep =
    stepIndex === CASCADES_GUEST_STAY_ONBOARDING_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
      return;
    }

    setStepIndex(prev => prev + 1);
  };

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        bounces={false}
        style={styles.cascadesGuestStayScroll}
        contentContainerStyle={[
          styles.cascadesGuestStayScrollContent,
          {paddingBottom: insets.bottom + cascadesGuestStayVerticalScale(24)},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cascadesGuestStayHero}>
          <Image
            source={step.image}
            style={styles.cascadesGuestStayHeroImage}
            resizeMode="cover"
          />

          <Pressable
            onPress={onComplete}
            style={[
              styles.cascadesGuestStaySkip,
              {top: insets.top + cascadesGuestStayVerticalScale(16)},
            ]}
            hitSlop={12}>
            <Text style={styles.cascadesGuestStaySkipLabel}>SKIP</Text>
          </Pressable>
        </View>

        <View
          style={{
            paddingHorizontal: cascadesGuestStayScale(24),
            paddingTop: cascadesGuestStayVerticalScale(40),
          }}>
          <View style={styles.cascadesGuestStayContent}>
            <CascadesGuestStayBadge label={step.badge} />
            <Text style={styles.cascadesGuestStaySubtitle}>
              {step.subtitle}
            </Text>
            <Text style={styles.cascadesGuestStayTitle}>{step.title}</Text>
            <Text style={styles.cascadesGuestStayDescription}>
              {step.description}
            </Text>
          </View>

          <View style={styles.cascadesGuestStayFooter}>
            <CascadesGuestStayPaginationDots
              total={CASCADES_GUEST_STAY_ONBOARDING_STEPS.length}
              activeIndex={stepIndex}
            />
            <CascadesGuestStayPrimaryButton
              label={step.buttonLabel}
              onPress={handleNext}
              wide={isLastStep}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    flex: 1,
    backgroundColor: cascadesGuestStayColors.background,
  },
  cascadesGuestStayHero: {
    height: cascadesGuestStayVerticalScale(443),
    overflow: 'hidden',
    width: '100%',
  },
  cascadesGuestStayHeroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  cascadesGuestStayHeroGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  cascadesGuestStaySkip: {
    position: 'absolute',
    right: cascadesGuestStayScale(24),
    zIndex: 2,
  },
  cascadesGuestStaySkipLabel: {
    color: cascadesGuestStayColors.skip,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '500',
    letterSpacing: cascadesGuestStayScale(1),
  },
  cascadesGuestStayScroll: {
    flex: 1,
  },
  cascadesGuestStayScrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  cascadesGuestStayContent: {
    gap: cascadesGuestStayVerticalScale(12),
  },
  cascadesGuestStaySubtitle: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(2),
    marginTop: cascadesGuestStayVerticalScale(4),
    textTransform: 'uppercase',
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(26),
    fontWeight: '700',
    lineHeight: cascadesGuestStayScale(32.5),
  },
  cascadesGuestStayDescription: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(14),
    lineHeight: cascadesGuestStayScale(23.8),
    marginTop: cascadesGuestStayVerticalScale(4),
  },
  cascadesGuestStayFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: cascadesGuestStayVerticalScale(32),
  },
});
