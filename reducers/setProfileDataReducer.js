const test = {
  profile: 'profile'
};

export const setProfileDataReducer = (state = test, action) => {
  switch (action.type) {
    case 'SET_PROFILE_DATA':
      return action.profileData;
    // case 'TOGGLE_RIDE_ATTENDANCE':
      // const targetedRide = state.data.user.rides.find(ride => ride.id === action.num);
      // const newRides = state.data.user.rides.filter(ride => ride.id !== action.num)
      // return state;
    default:
      return state;
  }
};
