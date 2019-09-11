export const toggleRideAttendanceReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_RIDE_ATTENDANCE':
      return action.bool;
    default:
      return state;
  }
};