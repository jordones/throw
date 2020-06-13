import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackParamList } from './types/Onboarding';
import MainTabs from './MainTabs';
import Text from '../styleguide/Text';
import {OnboardingScreen} from '../screens/Onboarding';
import { OnboardingContext } from '../context/OnboardingContext';


const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => { 
  const {state, actions} = useContext(OnboardingContext);

  useEffect(() => {
    actions.signIn();
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