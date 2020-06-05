import React from 'react';
import { Button, KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingStackParamList, WelcomeScreenProps, ProfileNameScreenProps } from './types/Onboarding';
import Screen from '../styleguide/Screens/Screen';
import MainTabs from './MainTabs';
import Text from '../styleguide/Text';
import Palette from '../styleguide/Palette';
import PrimaryButton from '../styleguide/Buttons/PrimaryButton';

function WelcomeScreen({navigation, route}: WelcomeScreenProps) {
  return (
    <Screen style={{backgroundColor: Palette.primary}}>
      <View style={{alignItems: 'flex-start', paddingHorizontal: 24}}>
        <Text variant={'Title'}>Hey.</Text>
        <Text variant={'Title'}>Throw exists to get you started on your next project.</Text>
        <PrimaryButton label={"Ok."} onPress={() => navigation.push('Profile')} />
      </View>
    </Screen>
  );
}

function ProfileNameScreen({navigation}: ProfileNameScreenProps) {
  return (
    <Screen style={{backgroundColor: Palette.primary}}>
      <KeyboardAvoidingView style={{alignItems: 'flex-start', paddingHorizontal: 24}}>
      <Text variant={'Title'}>It'll help if I know what to call you...</Text>
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
      placeholder={'BeatboxBandit'}/>
      </View>
      <PrimaryButton label={"Done."} onPress={() => navigation.push('CoachScreen1')} />
      </KeyboardAvoidingView>
    </Screen>
  );
}

function CoachScreen1({navigation}: ProfileNameScreenProps) {
  return (
    <Screen style={{backgroundColor: Palette.primary}}>
      <View style={{alignItems: 'flex-start', paddingHorizontal: 24}}>
      <Text variant={"Title"}>Now, Hit this button to get started.</Text>
      <PrimaryButton label={"Give me a project."} onPress={() => navigation.push('CoachScreen2')} />

      </View>
    </Screen>
  );
}

function CoachScreen2({navigation}: ProfileNameScreenProps) {
  return (
    <Screen style={{backgroundColor: Palette.primary}}>
      <View style={{alignItems: 'flex-start', paddingHorizontal: 24}}>
        <Text variant={"Title"}>I should have mentioned, you're going to need to tell me what you want to work on, first. Like, give me a couple of ideas at least.</Text>
        <PrimaryButton label={"Done."} onPress={() => navigation.push('CreateIdeaModal')} />

      </View>
    </Screen>
  );
}

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      gestureEnabled: false,
      animationEnabled: false,
    }}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Profile" component={ProfileNameScreen} />
    <Stack.Screen name="CoachScreen1" component={CoachScreen1} />
    <Stack.Screen name="CoachScreen2" component={CoachScreen2} />
    <Stack.Screen name="MainTabs" component={MainTabs} />

  </Stack.Navigator>
);

export default OnboardingStack;