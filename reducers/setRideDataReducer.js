const test = {
  ride: 'ride'
};

export const setRideDataReducer = (state = test, action) => {
  switch (action.type) {
    case 'SET_RIDE_DATA':
      return action.rideData;
    default:
      return state;
  }
};