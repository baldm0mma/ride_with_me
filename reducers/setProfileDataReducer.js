const test = {
  test: 'test'
};

export const setProfileDataReducer = (state = test, action) => {
  switch (action.type) {
    case 'SET_PROFILE_DATA':
      return action.profileData;
    default:
      return state;
  }
};
