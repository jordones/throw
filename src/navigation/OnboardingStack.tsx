import React, { useContext, useEffect } from 'react';
import { Button, KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { OnboardingStackParamList, WelcomeScreenProps, ProfileNameScreenProps } from './types/Onboarding';
import Screen from '../styleguide/Screens/Screen';
import MainTabs from './MainTabs';
import Text from '../styleguide/Text';
import Palette from '../styleguide/Palette';
import PrimaryButton from '../styleguide/Buttons/PrimaryButton';
import {OnboardingScreen} from '../screens/Onboarding';
import { OnboardingContext } from '../context/OnboardingContext';


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

const Stack = createStackNavigator<OnboardingStackParamList>();

// const needsOnboarding = true;
const OnboardingStack = () => { 
  const {state, onboardingContextActions} = useContext(OnboardingContext);

  useEffect(() => {
    onboardingContextActions.getOnboardingStatus();
  }, []);
  
  console.log(state);
  if (state.isLoading) {
    return (
      <>
      <Text>loading</Text>
      </>
    )
  }
  return (

  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      gestureEnabled: false,
      animationEnabled: false,
    }}
  >
    { state.isOnboarded ? (
      <Stack.Screen name="MainTabs" component={MainTabs} />
    ) : (
      <>
      <Stack.Screen name="Welcome" component={OnboardingScreen} />
      <Stack.Screen name="Profile" component={OnboardingScreen} />
      <Stack.Screen name="CoachScreen1" component={OnboardingScreen} />
      <Stack.Screen name="CoachScreen2" component={OnboardingScreen} />
    </>
    )
    }
  </Stack.Navigator>
)};

export default OnboardingStack;