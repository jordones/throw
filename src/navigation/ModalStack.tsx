import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateIdea from '../modals/CreateIdea';
import {ModalStackParamList} from './types/Modal';
import OnboardingStack from './OnboardingStack'
import MainTabs from './MainTabs';

const Stack = createStackNavigator<ModalStackParamList>();

const ModalStack = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: 'transparent' },
      cardOverlayEnabled: true,
      cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
          transform: [{
            translateY: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1000, 0]
            }),
          }]
      },
        overlayStyle: {
          opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
            extrapolate: 'clamp',
          }),
        },
      }),
      headerTransparent: true,
    }}
    mode="modal"
    headerMode="none"
  >
    <Stack.Screen name="OnboardingStack" component={OnboardingStack} /> 
    <Stack.Screen name="CreateIdeaModal" component={CreateIdea} />
  </Stack.Navigator>
);

export default ModalStack;