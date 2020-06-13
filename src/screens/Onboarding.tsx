import React, { useContext } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import Screen from '../styleguide/Screens/Screen';
import Text from '../styleguide/Text';
import PrimaryButton from '../styleguide/Buttons/PrimaryButton';
import {OnboardingNavigation, OnboardingRoute, OnboardingRouteName, ProfileNameScreenProps} from '../navigation/types/Onboarding';
import {ModalNavigation, ModalRouteName} from '../navigation/types/Modal';
import Palette from '../styleguide/Palette';
import { OnboardingContext } from '../context/OnboardingContext';

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
        <PrimaryButton size={props.buttonSmall ? 'Small' : undefined} label={props.buttonLabel} onPress={() => {
            navigation.push(nextScreen)
          }} />
      </View>
    </Screen>
  );
};

interface SignUpScreenProps extends ViewProps {
  signUp: (username: string) => Promise<void>;
}

function ProfileNameScreen({navigation, ...props}: SignUpScreenProps) {
  const [username, onChangeText] = React.useState('');

  return (
    <Screen style={{backgroundColor: Palette.primary}}>
      <KeyboardAvoidingView style={{alignItems: 'flex-start', paddingHorizontal: 24}}>
      <Text variant={'Title'}>{props.description}</Text>
      <View style={{flexDirection: 'row',
          marginVertical: 12,
        }}>
        <Text style={{
          color: Palette.background,
          fontSize: 18,
          borderBottomColor: Palette.placeholder,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>@</Text>
        <TextInput
        style={{
          color: Palette.white,
          fontSize: 18,
          borderBottomColor: Palette.white,
          borderBottomWidth: StyleSheet.hairlineWidth,
          width: 250,
        }}
        maxLength={20}
        placeholderTextColor={Palette.placeholder}
        onChangeText={text => onChangeText(text)}
      placeholder={'BeatboxBandit'}/>
      </View>
      <PrimaryButton label={"Done."} onPress={() => {
        props.signUp(username);
        navigation.push('CoachScreen1');
      }} />
      </KeyboardAvoidingView>
    </Screen>
  );
}

interface OnboardingScreenProps {
  navigation: OnboardingNavigation;
  route: OnboardingRoute;
}

export function OnboardingScreen({route, ...props}: OnboardingScreenProps) {
  const {actions} = useContext(OnboardingContext);

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
      return <ProfileNameScreen {...props}
      description="It'll help if I know what to call you..."
      buttonLabel='Ok.'
      nextScreen={'CoachScreen1'} 
      signUp={actions.signUp}
      />
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
