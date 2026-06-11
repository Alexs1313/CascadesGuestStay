import React, {useState} from 'react';
import {useAdaptive} from '../hooks/useAdaptive';

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../components/buttons/PrimaryButton';
import {Badge} from '../components/common/Badge';
import {PaginationDots} from '../components/nav/PaginationDots';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';

import {ONBOARDING_STEPS} from '../data/onboarding';

type OnboardingScreenProps = {
  onComplete: () => void;
};

export function OnboardingScreen({onComplete}: OnboardingScreenProps) {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const [stepIndex, setStepIndex] = useState(0);
  const step = ONBOARDING_STEPS[stepIndex];
  const isLastStep = stepIndex === ONBOARDING_STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
      return;
    }

    setStepIndex(prev => prev + 1);
  };

  return (
    <View style={styles.OnboardingScreenFacetChassis}>
      <ScrollView
        bounces={false}
        style={styles.OnboardingScreenScrollVellum}
        contentContainerStyle={[
          styles.OnboardingScreenScrollContent,
          {paddingBottom: insets.bottom + adaptive.verticalScale(24)},
        ]}
        showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.OnboardingScreenHero,
            {height: adaptive.onboardingHeroHeight},
          ]}>
          <Image
            source={step.image}
            style={styles.OnboardingScreenHeroImagePanel}
            resizeMode="cover"
          />

          <Pressable
            onPress={onComplete}
            style={[
              styles.OnboardingScreenSkip,
              {top: insets.top + adaptive.verticalScale(16)},
            ]}
            hitSlop={12}>
            <Text style={styles.OnboardingScreenSkipLabelFiligree}>SKIP</Text>
          </Pressable>
        </View>

        <View
          style={{
            paddingHorizontal: adaptive.scale(24),
            paddingTop: adaptive.verticalScale(40),
          }}>
          <View style={styles.OnboardingScreenContent}>
            <Badge label={step.badge} />
            <Text style={styles.OnboardingScreenSubtitleFiligree}>
              {step.subtitle}
            </Text>
            <Text style={styles.OnboardingScreenTitleFiligree}>
              {step.title}
            </Text>
            <Text style={styles.OnboardingScreenDescription}>
              {step.description}
            </Text>
          </View>

          <View style={styles.OnboardingScreenFooter}>
            <PaginationDots
              total={ONBOARDING_STEPS.length}
              activeIndex={stepIndex}
            />
            <PrimaryButton
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

OnboardingScreenFacetChassis: {
  flex: 1,
  backgroundColor: colors.background,
},
OnboardingScreenHero: {
  overflow: 'hidden',
  width: '100%',
},
OnboardingScreenHeroImagePanel: {
  ...StyleSheet.absoluteFillObject,
  width: '100%',
  height: '100%',
},
OnboardingScreenHeroGradientVeil: {
  ...StyleSheet.absoluteFillObject,
},
OnboardingScreenSkip: {
  position: 'absolute',
  right: 24,
  zIndex: 2,
},
OnboardingScreenSkipLabelFiligree: {
  color: colors.skip,
  fontFamily: fonts.sansMedium,
  fontSize: 13,
  fontWeight: '500',
  letterSpacing: 1,
},
OnboardingScreenScrollVellum: {
  flex: 1,
},
OnboardingScreenScrollContent: {
  flexGrow: 1,
  justifyContent: 'space-between',
},
OnboardingScreenContent: {
  gap: 12,
},
OnboardingScreenSubtitleFiligree: {
  color: colors.gold,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  marginTop: 4,
  textTransform: 'uppercase',
},
OnboardingScreenTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 26,
  fontWeight: '700',
  lineHeight: 32.5,
},
OnboardingScreenDescription: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 14,
  lineHeight: 23.8,
  marginTop: 4,
},
OnboardingScreenFooter: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 32,
},
});
