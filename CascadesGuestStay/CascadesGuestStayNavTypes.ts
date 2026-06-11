import type {NavigatorScreenParams} from '@react-navigation/native';

export type CascadesGuestStayMainTabParamList = {
  HomeTab: undefined;
  RequestsTab: undefined;
  ExploreTab: undefined;
  SavedTab: undefined;
  MapTab: undefined;
};

export type CascadesGuestStayStackParamList = {
  Loader: undefined;
  Onboarding: undefined;
  Main: NavigatorScreenParams<CascadesGuestStayMainTabParamList> | undefined;
  RoomDining: undefined;
  Order: undefined;
  OrderConfirmed: {total?: number} | undefined;
  Climate: undefined;
};
