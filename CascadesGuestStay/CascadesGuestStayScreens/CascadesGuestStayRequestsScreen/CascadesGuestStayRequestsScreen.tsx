import React, {useMemo, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CascadesGuestStayRequestCard} from '../../CascadesGuestStayComponents/CascadesGuestStayRequests/CascadesGuestStayRequestCard/CascadesGuestStayRequestCard';
import {useCascadesGuestStayApp} from '../../CascadesGuestStayContext/CascadesGuestStayAppContext';
import {CASCADES_GUEST_STAY_GUEST} from '../../CascadesGuestStayConstants/CascadesGuestStayGuest/CascadesGuestStayGuestInfo/CascadesGuestStayGuestInfo';
import {
  CASCADES_GUEST_STAY_REQUEST_CATEGORIES,
  CascadesGuestStayRequestCategory,
  cascadesGuestStayGetCategoryItem,
} from '../../CascadesGuestStayConstants/CascadesGuestStayRequests/CascadesGuestStayRequestsData/CascadesGuestStayRequestsData';
import {cascadesGuestStayColors} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayColors';
import {cascadesGuestStayFonts} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayTheme/CascadesGuestStayFonts';
import {
  cascadesGuestStayScale,
  cascadesGuestStayVerticalScale,
} from '../../CascadesGuestStayConstants/CascadesGuestStayBase/CascadesGuestStayLayout/CascadesGuestStayLayout';

type CascadesGuestStayRequestsView = 'list' | 'new';

export function CascadesGuestStayRequestsScreen() {
  const insets = useSafeAreaInsets();
  const {requests, submitRequest} = useCascadesGuestStayApp();
  const [view, setView] = useState<CascadesGuestStayRequestsView>('list');
  const [selectedCategory, setSelectedCategory] =
    useState<CascadesGuestStayRequestCategory>('housekeeping');
  const [description, setDescription] = useState('');

  const activeRequests = useMemo(
    () => requests.filter(request => request.status !== 'completed'),
    [requests],
  );
  const completedRequests = useMemo(
    () => requests.filter(request => request.status === 'completed'),
    [requests],
  );

  const canSubmit = description.trim().length > 0;
  const selectedCategoryItem =
    cascadesGuestStayGetCategoryItem(selectedCategory);

  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }
    submitRequest(selectedCategory, description.trim());
    setDescription('');
    setView('list');
  };

  return (
    <View style={styles.cascadesGuestStayContainer}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[styles.cascadesGuestStayScroll]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          style={{
            marginBottom: cascadesGuestStayVerticalScale(20),
          }}
          colors={[
            cascadesGuestStayColors.headerGradientStart,
            cascadesGuestStayColors.headerGradientEnd,
          ]}>
          <View style={{padding: 21, paddingTop: 50}}>
            <Text style={styles.cascadesGuestStayRoom}>
              {`Your Room · ${CASCADES_GUEST_STAY_GUEST.room}`}
            </Text>
            <Text style={styles.cascadesGuestStayTitle}>Guest Requests</Text>
            <View style={styles.cascadesGuestStayStats}>
              <View
                style={[
                  styles.cascadesGuestStayStatPill,
                  styles.cascadesGuestStayStatActive,
                ]}>
                <Text style={styles.cascadesGuestStayStatValueGold}>
                  {activeRequests.length}
                </Text>
                <Text style={styles.cascadesGuestStayStatLabel}>Active</Text>
              </View>
              <View
                style={[
                  styles.cascadesGuestStayStatPill,
                  styles.cascadesGuestStayStatCompleted,
                ]}>
                <Text style={styles.cascadesGuestStayStatValueGreen}>
                  {completedRequests.length}
                </Text>
                <Text style={styles.cascadesGuestStayStatLabel}>Completed</Text>
              </View>
              <View
                style={[
                  styles.cascadesGuestStayStatPill,
                  styles.cascadesGuestStayStatTotal,
                ]}>
                <Text style={styles.cascadesGuestStayStatValueMuted}>
                  {requests.length}
                </Text>
                <Text style={styles.cascadesGuestStayStatLabel}>Total</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.cascadesGuestStayModeRow}>
          <Pressable
            onPress={() => setView('list')}
            style={[
              styles.cascadesGuestStayModeBtn,
              view === 'list' && styles.cascadesGuestStayModeBtnActive,
            ]}>
            <Text
              style={[
                styles.cascadesGuestStayModeLabel,
                view === 'list' && styles.cascadesGuestStayModeLabelActive,
              ]}>
              My Requests
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setView('new')}
            style={[
              styles.cascadesGuestStayModeBtn,
              view === 'new' && styles.cascadesGuestStayModeBtnActive,
            ]}>
            <Text
              style={[
                styles.cascadesGuestStayModeLabel,
                view === 'new' && styles.cascadesGuestStayModeLabelActive,
              ]}>
              + New Request
            </Text>
          </Pressable>
        </View>

        {view === 'list' ? (
          <View style={styles.cascadesGuestStayList}>
            {activeRequests.length > 0 && (
              <>
                <Text style={styles.cascadesGuestStaySection}>Active</Text>
                {activeRequests.map(request => (
                  <CascadesGuestStayRequestCard
                    key={request.id}
                    request={request}
                  />
                ))}
              </>
            )}
            {completedRequests.length > 0 && (
              <>
                <Text style={styles.cascadesGuestStaySection}>Completed</Text>
                {completedRequests.map(request => (
                  <CascadesGuestStayRequestCard
                    key={request.id}
                    request={request}
                  />
                ))}
              </>
            )}
          </View>
        ) : (
          <View style={styles.cascadesGuestStayForm}>
            <Text style={styles.cascadesGuestStaySection}>Select Category</Text>
            <View style={styles.cascadesGuestStayCategoryGrid}>
              {CASCADES_GUEST_STAY_REQUEST_CATEGORIES.map(category => {
                const isSelected = selectedCategory === category.key;
                return (
                  <Pressable
                    key={category.key}
                    onPress={() => setSelectedCategory(category.key)}
                    style={[
                      styles.cascadesGuestStayCategoryCard,
                      isSelected && styles.cascadesGuestStayCategoryCardActive,
                    ]}>
                    <Text style={styles.cascadesGuestStayCategoryIcon}>
                      {category.icon}
                    </Text>
                    <Text
                      style={[
                        styles.cascadesGuestStayCategoryLabel,
                        isSelected &&
                          styles.cascadesGuestStayCategoryLabelActive,
                      ]}>
                      {category.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.cascadesGuestStaySection}>
              Describe Your Request
            </Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="e.g. Please housekeeping ..."
              placeholderTextColor="rgba(240, 239, 232, 0.5)"
              multiline
              style={styles.cascadesGuestStayInput}
              textAlignVertical="top"
            />

            <View style={styles.cascadesGuestStaySummary}>
              <View style={styles.cascadesGuestStaySummaryRow}>
                <Text style={styles.cascadesGuestStaySummaryLabel}>Guest</Text>
                <Text style={styles.cascadesGuestStaySummaryValue}>
                  {CASCADES_GUEST_STAY_GUEST.name}
                </Text>
              </View>
              <View style={styles.cascadesGuestStaySummaryRow}>
                <Text style={styles.cascadesGuestStaySummaryLabel}>Room</Text>
                <Text style={styles.cascadesGuestStaySummaryValue}>
                  {CASCADES_GUEST_STAY_GUEST.room}
                </Text>
              </View>
              <View style={styles.cascadesGuestStaySummaryRow}>
                <Text style={styles.cascadesGuestStaySummaryLabel}>
                  Category
                </Text>
                <Text style={styles.cascadesGuestStaySummaryValue}>
                  {selectedCategoryItem.label}
                </Text>
              </View>
              <View style={styles.cascadesGuestStaySummaryRow}>
                <Text style={styles.cascadesGuestStaySummaryLabel}>
                  Priority
                </Text>
                <Text style={styles.cascadesGuestStaySummaryValue}>
                  Standard
                </Text>
              </View>
            </View>

            <Pressable
              onPress={handleSubmit}
              disabled={!canSubmit}
              style={[
                styles.cascadesGuestStaySubmit,
                !canSubmit && styles.cascadesGuestStaySubmitDisabled,
              ]}>
              <Text
                style={[
                  styles.cascadesGuestStaySubmitLabel,
                  !canSubmit && styles.cascadesGuestStaySubmitLabelDisabled,
                ]}>
                Submit Request
              </Text>
            </Pressable>
          </View>
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
    paddingBottom: cascadesGuestStayVerticalScale(24),
  },

  cascadesGuestStayRoom: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(2),
    textTransform: 'uppercase',
  },
  cascadesGuestStayTitle: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.serifBold,
    fontSize: cascadesGuestStayScale(28),
    fontWeight: '700',
    marginTop: cascadesGuestStayVerticalScale(4),
  },
  cascadesGuestStayStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: cascadesGuestStayScale(10),
    marginTop: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStayStatPill: {
    alignItems: 'center',
    borderRadius: cascadesGuestStayScale(100),
    borderWidth: 1,
    flexDirection: 'row',
    gap: cascadesGuestStayScale(6),
    paddingHorizontal: cascadesGuestStayScale(12),
    paddingVertical: cascadesGuestStayScale(8),
  },
  cascadesGuestStayStatActive: {
    backgroundColor: 'rgba(250, 191, 20, 0.07)',
    borderColor: 'rgba(250, 191, 20, 0.19)',
  },
  cascadesGuestStayStatCompleted: {
    backgroundColor: 'rgba(126, 216, 164, 0.07)',
    borderColor: 'rgba(126, 216, 164, 0.19)',
  },
  cascadesGuestStayStatTotal: {
    backgroundColor: 'rgba(122, 154, 181, 0.07)',
    borderColor: 'rgba(122, 154, 181, 0.19)',
  },
  cascadesGuestStayStatValueGold: {
    color: cascadesGuestStayColors.gold,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '700',
  },
  cascadesGuestStayStatValueGreen: {
    color: cascadesGuestStayColors.success,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '700',
  },
  cascadesGuestStayStatValueMuted: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '700',
  },
  cascadesGuestStayStatLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(11),
  },
  cascadesGuestStayModeRow: {
    flexDirection: 'row',
    gap: cascadesGuestStayScale(8),
    marginBottom: cascadesGuestStayVerticalScale(20),
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayModeBtn: {
    backgroundColor: cascadesGuestStayColors.buttonSecondary,
    borderRadius: cascadesGuestStayScale(20),
    paddingHorizontal: cascadesGuestStayScale(16),
    paddingVertical: cascadesGuestStayVerticalScale(10),
  },
  cascadesGuestStayModeBtnActive: {
    backgroundColor: cascadesGuestStayColors.gold,
  },
  cascadesGuestStayModeLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(14),
    fontWeight: '500',
  },
  cascadesGuestStayModeLabelActive: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontWeight: '700',
  },
  cascadesGuestStayList: {
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStaySection: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(12),
    letterSpacing: cascadesGuestStayScale(2),
    marginBottom: cascadesGuestStayVerticalScale(12),
    textTransform: 'uppercase',
  },
  cascadesGuestStayForm: {
    paddingHorizontal: cascadesGuestStayScale(20),
  },
  cascadesGuestStayCategoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: cascadesGuestStayScale(12),
    marginBottom: cascadesGuestStayVerticalScale(24),
  },
  cascadesGuestStayCategoryCard: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.buttonSecondary,
    borderColor: 'transparent',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1,
    flexDirection: 'row',
    gap: cascadesGuestStayScale(10),
    minHeight: cascadesGuestStayScale(66),
    paddingHorizontal: cascadesGuestStayScale(16),
    width: '47%',
  },
  cascadesGuestStayCategoryCardActive: {
    backgroundColor: cascadesGuestStayColors.categoryPurpleBg,
    borderColor: cascadesGuestStayColors.categoryPurple,
  },
  cascadesGuestStayCategoryIcon: {
    fontSize: cascadesGuestStayScale(24),
  },
  cascadesGuestStayCategoryLabel: {
    color: cascadesGuestStayColors.body,
    flex: 1,
    fontFamily: cascadesGuestStayFonts.sansSemiBold,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '600',
  },
  cascadesGuestStayCategoryLabelActive: {
    color: cascadesGuestStayColors.cream,
  },
  cascadesGuestStayInput: {
    backgroundColor: cascadesGuestStayColors.buttonSecondary,
    borderColor: 'rgba(250, 191, 20, 0.2)',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1,
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(14),
    lineHeight: cascadesGuestStayScale(22),
    marginBottom: cascadesGuestStayVerticalScale(20),
    minHeight: cascadesGuestStayScale(124),
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStaySummary: {
    backgroundColor: cascadesGuestStayColors.card,
    borderColor: 'rgba(250, 191, 20, 0.08)',
    borderRadius: cascadesGuestStayScale(16),
    borderWidth: 1,
    gap: cascadesGuestStayVerticalScale(10),
    marginBottom: cascadesGuestStayVerticalScale(20),
    padding: cascadesGuestStayScale(16),
  },
  cascadesGuestStaySummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cascadesGuestStaySummaryLabel: {
    color: cascadesGuestStayColors.body,
    fontFamily: cascadesGuestStayFonts.sansRegular,
    fontSize: cascadesGuestStayScale(13),
  },
  cascadesGuestStaySummaryValue: {
    color: cascadesGuestStayColors.cream,
    fontFamily: cascadesGuestStayFonts.sansMedium,
    fontSize: cascadesGuestStayScale(13),
    fontWeight: '500',
  },
  cascadesGuestStaySubmit: {
    alignItems: 'center',
    backgroundColor: cascadesGuestStayColors.gold,
    borderRadius: cascadesGuestStayScale(16),
    paddingVertical: cascadesGuestStayVerticalScale(16),
  },
  cascadesGuestStaySubmitDisabled: {
    backgroundColor: cascadesGuestStayColors.buttonSecondary,
    opacity: 0.5,
  },
  cascadesGuestStaySubmitLabel: {
    color: cascadesGuestStayColors.background,
    fontFamily: cascadesGuestStayFonts.sansBold,
    fontSize: cascadesGuestStayScale(15),
    fontWeight: '700',
  },
  cascadesGuestStaySubmitLabelDisabled: {
    color: cascadesGuestStayColors.body,
  },
});
