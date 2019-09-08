export const setProfileData = profileData => ({
  type: 'SET_PROFILE_DATA',
  profileData
});

export const toggleLogin = bool => ({
  type: 'TOGGLE_LOGIN',
  bool
});

export const toggleCurrentFriend = num => ({
  type: 'TOOGLE_CURRENT_FRIEND',
  num
});
