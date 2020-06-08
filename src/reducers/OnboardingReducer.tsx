import {useReducer} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const initialState = {
  loading: true,
  isOnboarded: false,
  userName: '',
};

export default function (state, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isOnboarded: action.isOnboarded,
        loading: false,
      };
    case 'SIGN_UP':
      return {
        ...state,
        isOnboarded: action.isOnboarded,
        loading: false,
        userName: action.userName,
      };
    default:
      throw new Error();
  }
}
