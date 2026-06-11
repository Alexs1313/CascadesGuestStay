import type {NavigatorScreenParams} from '@react-navigation/native';

export type MainTabParamList = {
  HomeTab: undefined;
  RequestsTab: undefined;
  ExploreTab: undefined;
  SavedTab: undefined;
  MapTab: undefined;
};

export type StackParamList = {
  Loader: undefined;
  Onboarding: undefined;
  Main: NavigatorScreenParams<MainTabParamList> | undefined;
  RoomDining: undefined;
  Order: undefined;
  OrderConfirmed: {total?: number} | undefined;
  Climate: undefined;
};
