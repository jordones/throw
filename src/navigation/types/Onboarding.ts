import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

/* Onboarding Stack Types Begin */
export type OnboardingStackParamList = {
  Welcome: undefined;
  Profile: undefined;
  CoachScreen1: undefined;
  CoachScreen2: undefined;
  MainTabs: undefined;
};

type WelcomeScreenRouteProp = RouteProp<OnboardingStackParamList, 'Welcome'>;
type WelcomeScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Welcome'>;

export type WelcomeScreenProps = {
  route: WelcomeScreenRouteProp;
  navigation: WelcomeScreenNavigationProp;
};

type ProfileNameScreenRouteProp = RouteProp<OnboardingStackParamList, 'Profile'>;
type ProfileNameScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Profile'>;

export type ProfileNameScreenProps = {
  route: ProfileNameScreenRouteProp;
  navigation: ProfileNameScreenNavigationProp;
}

type CoachScreen1RouteProp = RouteProp<OnboardingStackParamList, 'CoachScreen1'>;
type CoachScreen1NavigationProp = StackNavigationProp<OnboardingStackParamList, 'CoachScreen1'>;

export type CoachScreen1Props = {
  route: CoachScreen1RouteProp;
  navigation: CoachScreen1NavigationProp;
}

type CoachScreen2RouteProp = RouteProp<OnboardingStackParamList, 'CoachScreen2'>;
type CoachScreen2NavigationProp = StackNavigationProp<OnboardingStackParamList, 'CoachScreen2'>;

export type CoachScreen2Props = {
  route: CoachScreen2RouteProp;
  navigation: CoachScreen2NavigationProp;
}

/* Onboarding Stack Types End */


