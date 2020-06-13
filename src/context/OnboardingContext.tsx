import React, { useReducer, useMemo } from 'react';
import OnboardingReducer, { initialState } from '../reducers/OnboardingReducer';
import AsyncStorage from '@react-native-community/async-storage';
import {auth} from '../../services/firebase';

const USER_ID_KEY = 'user_id';

export const OnboardingContext = React.createContext({
  state: {
    isLoading: false,
    isOnboarded: false,
    username: '',
    userId: '',
  },
  actions: {
    signIn: async () => {},
    signUp: async(userName: string) => {},
    finishOnboarding: () => {},
  }
});

export const OnboardingProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(
    OnboardingReducer,
    initialState
  );
  
  const actions = React.useMemo(
    () => ({
      signIn: async () => {
        try {
          const userId = await AsyncStorage.getItem(USER_ID_KEY);
          if (userId && JSON.parse(userId) !== '') {
            const existingUser = await auth.signInAnonymously();
            const {user: {uid, displayName}} = existingUser
            dispatch({ type: 'SIGN_IN', isOnboarded: true, userId: uid, username: displayName,});
          } else {
            dispatch({ type: 'SIGN_IN', isOnboarded: false });
          }
        } catch (error) {
          dispatch({ type: 'SIGN_IN', isOnboarded: false });
        }
      },
      signUp: async (username: string) => {
        try {
          const newUser = await auth.signInAnonymously();
          await newUser.user.updateProfile({displayName: username});
          const {user: {uid, displayName}} = newUser;
          console.log(uid, displayName);
          await AsyncStorage.setItem(USER_ID_KEY, JSON.stringify(uid));
          dispatch({ type: 'SIGN_UP', userId: uid, username: displayName,});
        } catch (error) {
          console.log(error);
          // log as error
          return;
        }
      },
      finishOnboarding: () => {
          dispatch({ type: 'FINISH_ONBOARDING', isOnboarded: true});
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
