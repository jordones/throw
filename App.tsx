import React from 'react';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {OnboardingProvider} from './src/context/OnboardingContext';

export default function App() {
  return (

    <OnboardingProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </OnboardingProvider>

  );
}
