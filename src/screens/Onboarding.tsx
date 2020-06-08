import React from 'react';
import { View } from 'react-native';
import Screen from '../styleguide/Screens/Screen';
import Text from '../styleguide/Text';
import PrimaryButton from '../styleguide/Buttons/PrimaryButton';
import {OnboardingNavigation, OnboardingRoute, OnboardingRouteName} from '../navigation/types/Onboarding';
import {ModalNavigation, ModalRouteName} from '../navigation/types/Modal';
import Palette from '../styleguide/Palette';

interface ViewProps {
  navigation: OnboardingNavigation | ModalNavigation;
  title?: string;
  description?: string;
  buttonLabel: string;
  buttonSmall?: boolean;
  nextScreen: OnboardingRouteName | ModalRouteName | undefined;
}

function OnboardingView({navigation, nextScreen, ...props}: ViewProps) {
  return (
    <Screen style={{backgroundColor: Palette.primary}}>
      <View style={{alignItems: 'flex-start', paddingHorizontal: 12}}>
        {props.title !== undefined && <Text variant={'Title'}>{props.title}</Text>}
        {props.description !== undefined && <Text variant={'Title'}>{props.description}</Text>}
        <PrimaryButton size={props.buttonSmall ? 'Small' : undefined} label={props.buttonLabel} onPress={() => navigation.push(nextScreen)} />
      </View>
    </Screen>
  );
};

interface OnboardingScreenProps {
  navigation: OnboardingNavigation;
  route: OnboardingRoute;
}

export function OnboardingScreen({route, ...props}: OnboardingScreenProps) {
  console.log(route);
  switch (route.name) {
    case 'Welcome':
      return <OnboardingView
        title='Hey.'
        description='Throw can help get you started on your next project.'
        buttonLabel='Ok.'
        nextScreen={'Profile'}
        {...props}
      />;
    case 'Profile':
      return <OnboardingView
        description="It'll help if I know what to call you, though."
        buttonLabel='Done.'
        nextScreen='CoachScreen1'
        {...props}
      />;
    case 'CoachScreen1':
      return <OnboardingView
        description='Now, hit this button to get started.'
        buttonSmall={true}
        buttonLabel="What's my next project?"
        nextScreen='CoachScreen2'
        {...props}
      />;
    case 'CoachScreen2':
      return <OnboardingView
        description="I should have mentioned, you're going to need to tell me what you want to work on, first. Like, give me a couple of ideas at least."
        buttonLabel='Ok.'
        nextScreen='CreateIdeaModal'
        {...props}
      />;
    default:
      return null;
  }
}
