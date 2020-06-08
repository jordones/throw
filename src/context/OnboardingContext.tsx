import React, { useReducer, useMemo } from 'react';
import OnboardingReducer, { initialState } from '../reducers/OnboardingReducer';
import AsyncStorage from '@react-native-community/async-storage';

const ONBOARDING_STATUS_KEY = 'onboarding_status'

export const OnboardingContext = React.createContext({
  state: {
    isLoading: false,
    isOnboarded: false,
    username: '',
  },
  actions: {
    getOnboardingStatus: async () => {},
    setOnboardingStatus: async(userName: string) => {},
  }
});

export const OnboardingProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(
    OnboardingReducer,
    initialState
  );
  
  const actions = React.useMemo(
    () => ({
      getOnboardingStatus: async () => {
        try {
          const onboardingStatus = await AsyncStorage.getItem(ONBOARDING_STATUS_KEY);
          if (onboardingStatus && JSON.parse(onboardingStatus)) {
            dispatch({ type: 'SIGN_IN', isOnboarded: true });
          } else {
            dispatch({ type: 'SIGN_IN', isOnboarded: false });
          }
        } catch (error) {
          dispatch({ type: 'SIGN_IN', isOnboarded: false });
        }
      },
      setOnboardingStatus: async (userName: string) => {
        try {
          await AsyncStorage.setItem(ONBOARDING_STATUS_KEY, JSON.stringify(status));
          dispatch({ type: 'SIGN_UP',  isOnboarded: true, userName});
        } catch (error) {
          // log as error
          return;
        }
      },
    }),
    [dispatch]
  );
  
  const contextValue = useMemo(
    () => ({
      state,
      actions
    }),
    [state, dispatch]
  );
  
  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  )
}



