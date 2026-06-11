import React, {useMemo, useState} from 'react';
import {useAdaptive} from '../hooks/useAdaptive';

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
import {RequestCard} from '../components/requests/RequestCard';
import {useApp} from '../context/AppContext';
import {GUEST} from '../data/guest';
import {
  REQUEST_CATEGORIES,
  RequestCategory,
  getCategoryItem,
} from '../data/requests';
import {colors} from '../constants/theme';
import {fonts} from '../constants/theme';


type RequestsView = 'list' | 'new';

export function RequestsScreen() {
  const adaptive = useAdaptive();
  const insets = useSafeAreaInsets();
  const {requests, submitRequest} = useApp();
  const [view, setView] = useState<RequestsView>('list');
  const [selectedCategory, setSelectedCategory] =
    useState<RequestCategory>('housekeeping');
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
    getCategoryItem(selectedCategory);

  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }
    submitRequest(selectedCategory, description.trim());
    setDescription('');
    setView('list');
  };

  return (
    <View style={styles.RequestsScreenFacetChassis}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[styles.RequestsScreenScrollVellum]}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          style={{
            marginBottom: adaptive.verticalScale(20),
          }}
          colors={[
            colors.headerGradientStart,
            colors.headerGradientEnd,
          ]}>
          <View style={{padding: 21, paddingTop: 50}}>
            <Text style={styles.RequestsScreenRoomFiligree}>
              {`Your Room · ${GUEST.room}`}
            </Text>
            <Text style={styles.RequestsScreenTitleFiligree}>Guest Requests</Text>
            <View style={styles.RequestsScreenStats}>
              <View
                style={[
                  styles.RequestsScreenStatPill,
                  styles.RequestsScreenStatActive,
                ]}>
                <Text style={styles.RequestsScreenStatValueGold}>
                  {activeRequests.length}
                </Text>
                <Text style={styles.RequestsScreenStatLabelFiligree}>Active</Text>
              </View>
              <View
                style={[
                  styles.RequestsScreenStatPill,
                  styles.RequestsScreenStatCompleted,
                ]}>
                <Text style={styles.RequestsScreenStatValueGreen}>
                  {completedRequests.length}
                </Text>
                <Text style={styles.RequestsScreenStatLabelFiligree}>Completed</Text>
              </View>
              <View
                style={[
                  styles.RequestsScreenStatPill,
                  styles.RequestsScreenStatTotal,
                ]}>
                <Text style={styles.RequestsScreenStatValueMuted}>
                  {requests.length}
                </Text>
                <Text style={styles.RequestsScreenStatLabelFiligree}>Total</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.RequestsScreenModeRowLintel}>
          <Pressable
            onPress={() => setView('list')}
            style={[
              styles.RequestsScreenModeBtn,
              view === 'list' && styles.RequestsScreenModeBtnActive,
            ]}>
            <Text
              style={[
                styles.RequestsScreenModeLabelFiligree,
                view === 'list' && styles.RequestsScreenModeLabelActiveFiligree,
              ]}>
              My Requests
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setView('new')}
            style={[
              styles.RequestsScreenModeBtn,
              view === 'new' && styles.RequestsScreenModeBtnActive,
            ]}>
            <Text
              style={[
                styles.RequestsScreenModeLabelFiligree,
                view === 'new' && styles.RequestsScreenModeLabelActiveFiligree,
              ]}>
              + New Request
            </Text>
          </Pressable>
        </View>

        {view === 'list' ? (
          <View style={styles.RequestsScreenList}>
            {activeRequests.length > 0 && (
              <>
                <Text style={styles.RequestsScreenSection}>Active</Text>
                {activeRequests.map(request => (
                  <RequestCard
                    key={request.id}
                    request={request}
                  />
                ))}
              </>
            )}
            {completedRequests.length > 0 && (
              <>
                <Text style={styles.RequestsScreenSection}>Completed</Text>
                {completedRequests.map(request => (
                  <RequestCard
                    key={request.id}
                    request={request}
                  />
                ))}
              </>
            )}
          </View>
        ) : (
          <View style={styles.RequestsScreenForm}>
            <Text style={styles.RequestsScreenSection}>Select Category</Text>
            <View style={styles.RequestsScreenCategoryGrid}>
              {REQUEST_CATEGORIES.map(category => {
                const isSelected = selectedCategory === category.key;
                return (
                  <Pressable
                    key={category.key}
                    onPress={() => setSelectedCategory(category.key)}
                    style={[
                      styles.RequestsScreenCategoryCardFacet,
                      isSelected && styles.RequestsScreenCategoryCardActive,
                    ]}>
                    <Text style={styles.RequestsScreenCategoryIconSigil}>
                      {category.icon}
                    </Text>
                    <Text
                      style={[
                        styles.RequestsScreenCategoryLabelFiligree,
                        isSelected &&
                          styles.RequestsScreenCategoryLabelActiveFiligree,
                      ]}>
                      {category.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.RequestsScreenSection}>
              Describe Your Request
            </Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="e.g. Please housekeeping ..."
              placeholderTextColor="rgba(240, 239, 232, 0.5)"
              multiline
              style={styles.RequestsScreenInput}
              textAlignVertical="top"
            />

            <View style={styles.RequestsScreenSummary}>
              <View style={styles.RequestsScreenSummaryRowLintel}>
                <Text style={styles.RequestsScreenSummaryLabelFiligree}>Guest</Text>
                <Text style={styles.RequestsScreenSummaryValue}>
                  {GUEST.name}
                </Text>
              </View>
              <View style={styles.RequestsScreenSummaryRowLintel}>
                <Text style={styles.RequestsScreenSummaryLabelFiligree}>Room</Text>
                <Text style={styles.RequestsScreenSummaryValue}>
                  {GUEST.room}
                </Text>
              </View>
              <View style={styles.RequestsScreenSummaryRowLintel}>
                <Text style={styles.RequestsScreenSummaryLabelFiligree}>
                  Category
                </Text>
                <Text style={styles.RequestsScreenSummaryValue}>
                  {selectedCategoryItem.label}
                </Text>
              </View>
              <View style={styles.RequestsScreenSummaryRowLintel}>
                <Text style={styles.RequestsScreenSummaryLabelFiligree}>
                  Priority
                </Text>
                <Text style={styles.RequestsScreenSummaryValue}>
                  Standard
                </Text>
              </View>
            </View>

            <Pressable
              onPress={handleSubmit}
              disabled={!canSubmit}
              style={[
                styles.RequestsScreenSubmit,
                !canSubmit && styles.RequestsScreenSubmitDisabled,
              ]}>
              <Text
                style={[
                  styles.RequestsScreenSubmitLabelFiligree,
                  !canSubmit && styles.RequestsScreenSubmitLabelDisabledFiligree,
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

RequestsScreenFacetChassis: {
  flex: 1,
  backgroundColor: colors.background,
},
RequestsScreenScrollVellum: {
  paddingBottom: 24,
},

RequestsScreenRoomFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  textTransform: 'uppercase',
},
RequestsScreenTitleFiligree: {
  color: colors.cream,
  fontFamily: fonts.serifBold,
  fontSize: 28,
  fontWeight: '700',
  marginTop: 4,
},
RequestsScreenStats: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
  marginTop: 16,
},
RequestsScreenStatPill: {
  alignItems: 'center',
  borderRadius: 100,
  borderWidth: 1,
  flexDirection: 'row',
  gap: 6,
  paddingHorizontal: 12,
  paddingVertical: 8,
},
RequestsScreenStatActive: {
  backgroundColor: 'rgba(250, 191, 20, 0.07)',
  borderColor: 'rgba(250, 191, 20, 0.19)',
},
RequestsScreenStatCompleted: {
  backgroundColor: 'rgba(126, 216, 164, 0.07)',
  borderColor: 'rgba(126, 216, 164, 0.19)',
},
RequestsScreenStatTotal: {
  backgroundColor: 'rgba(122, 154, 181, 0.07)',
  borderColor: 'rgba(122, 154, 181, 0.19)',
},
RequestsScreenStatValueGold: {
  color: colors.gold,
  fontFamily: fonts.sansBold,
  fontSize: 14,
  fontWeight: '700',
},
RequestsScreenStatValueGreen: {
  color: colors.success,
  fontFamily: fonts.sansBold,
  fontSize: 14,
  fontWeight: '700',
},
RequestsScreenStatValueMuted: {
  color: colors.body,
  fontFamily: fonts.sansBold,
  fontSize: 14,
  fontWeight: '700',
},
RequestsScreenStatLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 11,
},
RequestsScreenModeRowLintel: {
  flexDirection: 'row',
  gap: 8,
  marginBottom: 20,
  paddingHorizontal: 20,
},
RequestsScreenModeBtn: {
  backgroundColor: colors.buttonSecondary,
  borderRadius: 20,
  paddingHorizontal: 16,
  paddingVertical: 10,
},
RequestsScreenModeBtnActive: {
  backgroundColor: colors.gold,
},
RequestsScreenModeLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansMedium,
  fontSize: 14,
  fontWeight: '500',
},
RequestsScreenModeLabelActiveFiligree: {
  color: colors.background,
  fontFamily: fonts.sansBold,
  fontWeight: '700',
},
RequestsScreenList: {
  paddingHorizontal: 20,
},
RequestsScreenSection: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 12,
  letterSpacing: 2,
  marginBottom: 12,
  textTransform: 'uppercase',
},
RequestsScreenForm: {
  paddingHorizontal: 20,
},
RequestsScreenCategoryGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 12,
  marginBottom: 24,
},
RequestsScreenCategoryCardFacet: {
  alignItems: 'center',
  backgroundColor: colors.buttonSecondary,
  borderColor: 'transparent',
  borderRadius: 16,
  borderWidth: 1,
  flexDirection: 'row',
  gap: 10,
  minHeight: 66,
  paddingHorizontal: 16,
  width: '47%',
},
RequestsScreenCategoryCardActive: {
  backgroundColor: colors.categoryPurpleBg,
  borderColor: colors.categoryPurple,
},
RequestsScreenCategoryIconSigil: {
  fontSize: 24,
},
RequestsScreenCategoryLabelFiligree: {
  color: colors.body,
  flex: 1,
  fontFamily: fonts.sansSemiBold,
  fontSize: 13,
  fontWeight: '600',
},
RequestsScreenCategoryLabelActiveFiligree: {
  color: colors.cream,
},
RequestsScreenInput: {
  backgroundColor: colors.buttonSecondary,
  borderColor: 'rgba(250, 191, 20, 0.2)',
  borderRadius: 16,
  borderWidth: 1,
  color: colors.cream,
  fontFamily: fonts.sansRegular,
  fontSize: 14,
  lineHeight: 22,
  marginBottom: 20,
  minHeight: 124,
  padding: 16,
},
RequestsScreenSummary: {
  backgroundColor: colors.card,
  borderColor: 'rgba(250, 191, 20, 0.08)',
  borderRadius: 16,
  borderWidth: 1,
  gap: 10,
  marginBottom: 20,
  padding: 16,
},
RequestsScreenSummaryRowLintel: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
RequestsScreenSummaryLabelFiligree: {
  color: colors.body,
  fontFamily: fonts.sansRegular,
  fontSize: 13,
},
RequestsScreenSummaryValue: {
  color: colors.cream,
  fontFamily: fonts.sansMedium,
  fontSize: 13,
  fontWeight: '500',
},
RequestsScreenSubmit: {
  alignItems: 'center',
  backgroundColor: colors.gold,
  borderRadius: 16,
  paddingVertical: 16,
},
RequestsScreenSubmitDisabled: {
  backgroundColor: colors.buttonSecondary,
  opacity: 0.5,
},
RequestsScreenSubmitLabelFiligree: {
  color: colors.background,
  fontFamily: fonts.sansBold,
  fontSize: 15,
  fontWeight: '700',
},
RequestsScreenSubmitLabelDisabledFiligree: {
  color: colors.body,
},
});
