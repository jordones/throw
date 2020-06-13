export const initialState = {
  loading: true,
  isOnboarded: false,
  username: '',
};

export default function (state, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isOnboarded: action.isOnboarded,
        userId: action.userId ? action.userId : '',
        username: action.username ? action.username : '',
        loading: false,
      };
    case 'SIGN_UP':
      return {
        ...state,
        loading: false,
        username: action.username,
        userId: action.userId,
      };
    case 'FINISH_ONBOARDING':
      return {
        ...state,
        isOnboarded: action.isOnboarded,
      };
    default:
      throw new Error();
  }
}
