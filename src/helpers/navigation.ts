import type { ParamListBase } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type GetStackScreensProps<
  ParamsList extends ParamListBase,
  ScreenName extends keyof ParamsList = string
> = NativeStackScreenProps<ParamsList, ScreenName>;

type AllStacksParamList = {
  Splash: undefined;
  Tabs: undefined;
  All: undefined;
  Favorites: undefined;
};

export type AllScreensProps = GetStackScreensProps<AllStacksParamList>;

export type MainStackParamList = Pick<AllStacksParamList, 'Splash' | 'Tabs'>;
export type TabStackParamList = Pick<AllStacksParamList, 'All' | 'Favorites'>;

export type AuthScreenProps = GetStackScreensProps<MainStackParamList, 'Splash'>;
export type TabScreenProps = GetStackScreensProps<TabStackParamList, 'All'>;
