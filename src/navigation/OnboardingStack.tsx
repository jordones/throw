import React from 'react';
import { Text, Button, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { OnboardingStackParamList, WelcomeScreenProps, ProfileNameScreenProps } from './types/Onboarding';
import Screen from '../styleguide/Screens/Screen';
function WelcomeScreen({navigation, route}: WelcomeScreenProps) {
  return (
    <Screen>
      <Text>Hey.</Text>
      <Text>Throw exists to get you started on your next project.</Text>
      <Button title={'OK'} onPress={() => navigation.push('Profile')} />
    </Screen>
  );
}

function ProfileNameScreen({navigation}: ProfileNameScreenProps) {
  return (
    <Screen>
      <KeyboardAvoidingView>
      <Text>It'll help if I know what to call you...</Text>
      <TextInput placeholder={'Link'}/>
      <Button title={'Done'} onPress={() => navigation.push('CoachScreen1')} />
      </KeyboardAvoidingView>
    </Screen>
  );
}

function CoachScreen1({navigation}: ProfileNameScreenProps) {
  return (
    <Screen>
      <Text>Me again... Hit that button to get started.</Text>
      <Button title={'Give me a project'} onPress={() => navigation.push('CoachScreen2')} />
    </Screen>
  );
}

function CoachScreen2({navigation}: ProfileNameScreenProps) {
  return (
    <Screen>
      <Text>I should have mentioned, you're going to need to tell me what you want to work on, first. Like, give me a couple of ideas at least.</Text>
      <Button title={'Ok'} onPress={() => navigation.navigate('CreateIdeaModal')} />
    </Screen>
  );
}

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => (
  <Stack.Navigator
    headerMode="none"
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Profile" component={ProfileNameScreen} />
    <Stack.Screen name="CoachScreen1" component={CoachScreen1} />
    <Stack.Screen name="CoachScreen2" component={CoachScreen2} />
  </Stack.Navigator>
);

export default OnboardingStack;