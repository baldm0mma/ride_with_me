export const setProfileData = profileData => ({
  type: 'SET_PROFILE_DATA',
  profileData
});

export const setRideData = rideData => ({
  type: 'SET_RIDE_DATA',
  rideData
});

export const toggleLogin = bool => ({
  type: 'TOGGLE_LOGIN',
  bool
});

export const toggleCurrentFriend = num => ({
  type: 'TOOGLE_CURRENT_FRIEND',
  num
});

export const toggleCurrentRide = num => ({
  type: 'TOGGLE_CURRENT_RIDE',
  num
});
